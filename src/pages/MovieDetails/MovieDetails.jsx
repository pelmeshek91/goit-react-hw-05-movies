import MovieItem from 'components/MovieItem/MovieItem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/movies-api';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getMovieInfo = async () => {
      try {
        const info = await getMovieDetails(id);
        setMovieInfo(info);
      } catch (error) {}
    };
    getMovieInfo();
  }, [id]);

  return movieInfo && <MovieItem {...movieInfo} />;
};

export default MovieDetails;
