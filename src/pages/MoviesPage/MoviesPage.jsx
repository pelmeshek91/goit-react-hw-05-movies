import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/movies-api';

const MoviesPage = () => {
  const [moviesList, setMoviesList] = useState(null);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const queryBySearch = useMemo(
    () => searchParams.get('search') ?? '',
    [searchParams]
  );

  const resultBySearch = () => {
    setQuery(queryBySearch);
  };

  useEffect(() => {
    query && getMovieBySearch(query);
  }, [query]);

  const getMovieBySearch = async query => {
    try {
      const { results } = await searchMovie(query);
      setMoviesList(results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <SearchForm
        resultBySearch={resultBySearch}
        setSearchParams={setSearchParams}
        querySearch={queryBySearch}
      />
      {moviesList && <MoviesList moviesList={moviesList} />}
    </div>
  );
};

export default MoviesPage;
