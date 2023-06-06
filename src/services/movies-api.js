import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const KEY = 'dace3ba60ee82f0a15c6bb8af3a62e30';

export const getTrendingMovies = async () => {
  const { data } = await axios('/trending/all/day', {
    params: { api_key: KEY, language: 'en-US' },
  });
  return data;
};
export const searchMovie = async searchQuery => {
  const { data } = await axios('/search/movie', {
    params: {
      api_key: KEY,
      language: 'en-US',
      query: searchQuery,
      page: 1,
      include_adult: false,
    },
  });
  return data;
};
export const getMovieDetails = async movieId => {
  const { data } = await axios(`/movie/${movieId}`, {
    params: { api_key: KEY, language: 'en-US' },
  });
  return data;
};
export const getMovieCredits = async movieId => {
  const { data } = await axios(`/movie/${movieId}/credits`, {
    params: { api_key: KEY, language: 'en-US' },
  });
  return data;
};
export const getMovieReviews = async movieId => {
  const { data } = await axios(`/movie/${movieId}/reviews`, {
    params: { api_key: KEY, language: 'en-US', page: 1 },
  });
  return data;
};
