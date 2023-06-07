import Loader from 'components/Loader/Loader';
import { UpdateLoader } from 'components/Loader/Loader.styled';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/movies-api';
import { Title } from './HomePage.styled';

const HomePage = () => {
  const [trandingList, setTrandingList] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    setLoader(true);
    try {
      const { results } = await getTrendingMovies();
      setTrandingList(results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      {trandingList && loader ? (
        <UpdateLoader>
          <Loader />
        </UpdateLoader>
      ) : (
        <>
          <Title>Trandig today</Title>
          <MoviesList moviesList={trandingList} />
        </>
      )}
    </>
  );
};

export default HomePage;

// {
//             "adult": false,
//             "backdrop_path": "/2I5eBh98Q4aPq8WdQrHdTC8ARhY.jpg",
//             "id": 569094,
//             "title": "Spider-Man: Across the Spider-Verse",
//             "original_language": "en",
//             "original_title": "Spider-Man: Across the Spider-Verse",
//             "overview": "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
//             "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
//             "media_type": "movie",
//             "genre_ids": [
//                 28,
//                 12,
//                 16,
//                 878
//             ],
//             "popularity": 2974.157,
//             "release_date": "2023-05-31",
//             "video": false,
//             "vote_average": 8.711,
//             "vote_count": 584
//         },
