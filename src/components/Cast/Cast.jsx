import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/movies-api';

const Cast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const { cast } = await getMovieCredits(id);
        setMovieCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieCast();
  }, [id]);

  return (
    movieCast && (
      <ul>
        {movieCast.map(({ character, id, name, profile_path }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                  : 'https://st2.depositphotos.com/1898481/6448/i/600/depositphotos_64486573-stock-photo-people.jpg'
              }
              alt={name}
              width="50"
              height="75"
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    )
  );
};

export default Cast;
