import { Link, useLocation } from 'react-router-dom';
import { MovieTitle } from './MovieList.styled';

const MoviesList = ({ moviesList }) => {
  const location = useLocation();

  return (
    <ul>
      {moviesList?.map(({ id, title, original_name }) => (
        <Link
          key={id}
          to={location.pathname === '/movies' ? `${id}` : `movies/${id}`}
          state={{ from: location }}
        >
          <MovieTitle>{title || original_name}</MovieTitle>
        </Link>
      ))}
    </ul>
  );
};

export default MoviesList;
