import { Home } from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="" element={<MovieDetails />}></Route>
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
