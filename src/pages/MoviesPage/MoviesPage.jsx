import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/movies-api';

const MoviesPage = () => {
  const [moviesList, setMoviesList] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const querySearch = useMemo(
    () => searchParams.get('query') ?? '',
    [searchParams]
  );

  useEffect(() => {
    querySearch && getMovieBySearch(querySearch);
  }, [querySearch]);

  const getMovieBySearch = async query => {
    try {
      const { results } = await searchMovie(query);
      setMoviesList(results);
    } catch (error) {
      console.log(error);
    }
  };

  const resultBySearch = data => {
    setSearchParams(data);
  };

  return (
    <div>
      <SearchForm resultBySearch={resultBySearch} querySearch={querySearch} />
      {moviesList && <MoviesList moviesList={moviesList} />}
    </div>
  );
};

export default MoviesPage;
