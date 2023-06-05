export const App = () => {
  return <div></div>;
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
