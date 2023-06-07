import { Suspense } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AddInfo, MovieDesc, MovieInfo, StyledBtn } from './MovieItem.styled';

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
    <>
      <StyledBtn type="button" onClick={onBtnClick}>
        Go back
      </StyledBtn>
      <MovieInfo>
        <div>
          {poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={title}
              width="250"
            />
          )}
        </div>
        <MovieDesc>
          <h2>
            {title} ({new Date(release_date).getFullYear()})
          </h2>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(genre => genre.name).join(' ')}</p>
        </MovieDesc>
      </MovieInfo>

      <>
        <AddInfo>Additional information</AddInfo>
        <StyledBtn onClick={() => handleClick('cast')}>Cast </StyledBtn>
        <StyledBtn onClick={() => handleClick('reviews')}>Reviews </StyledBtn>
      </>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieItem;
