import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const MovieItem = ({
  poster_path,
  title,
  release_date,
  genres,
  id,
  vote_average,
  overview,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = route => {
    navigate(route);
  };

  const onBtnClick = () => {
    navigate(location?.state?.from ?? '/');
  };

  return (
    <div>
      <button type="button" onClick={onBtnClick}>
        Go back
      </button>
      <div>
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={title}
          />
        )}
      </div>
      <div>
        <h2>
          {title} ({new Date(release_date).getFullYear()})
        </h2>
        <p>User score: {Math.round(vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(genre => genre.name).join(' ')}</p>
      </div>
      <div>
        <p>Additional information</p>
      </div>
      <>
        <button onClick={() => handleClick('cast')}>Cast </button>
        <button onClick={() => handleClick('reviews')}>Reviews </button>
      </>
      <Outlet />
    </div>
  );
};

export default MovieItem;
