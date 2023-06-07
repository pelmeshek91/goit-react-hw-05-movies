import { Link, useLocation } from 'react-router-dom';

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
          <li>{title || original_name}</li>
        </Link>
      ))}
    </ul>
  );
};

export default MoviesList;
