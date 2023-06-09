import { Home } from 'pages/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
import { useState } from 'react';

// const actorsApi = 'movie/569094/credits';
// const reviewsApi = 'movie/569094/reviews';

export const App = () => {
  // const [film, setFilm] = useState(null);

  // const getFilm = async arr => {
  //   setFilm(arr);
  //   const actorsArr = await getFilm(actorsApi);
  //   const reviewsArr = await getFilm(reviewsApi);
  //   console.log('actorsArr :>> ', actorsArr);
  //   console.log('reviewsArr :>> ', reviewsArr);
  // };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    // <div
    //   style={{
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101',
    //   }}
    // ></div>
  );
};
