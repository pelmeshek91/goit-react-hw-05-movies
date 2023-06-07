import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/movies-api';

const Review = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const { results } = await getMovieReviews(id);

        setMovieReviews(results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieCast();
  }, [id]);

  return movieReviews?.length > 0 ? (
    <ul>
      {movieReviews.map(({ author, id, content }) => (
        <li key={id}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>We don`t have any review</p>
  );
};

export default Review;
