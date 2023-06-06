import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Review from './Review/Review';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>
      </Route>
    </Routes>
  );
};

/* 
-header:
  navlink: home page, movies page
-main:
    outlet:
      *Home page* (page) path=http:API
      -tranding title
      -tranding list (movies) => click on item => request=  path=http:API/movies/id 
                                          movie details (page) : 
                                          - main info about movie
                                          - outlet:
                                              - paragraph
                                              - cast (component) path=http:API/movies/id/cast
                                              - reviews (component) path=http:API/movies/id/reviews
       *Movies page* (page) path=http:API/movies                                   
      - search
      - response list path=http:API/movies?query={searchQuery}

*/
