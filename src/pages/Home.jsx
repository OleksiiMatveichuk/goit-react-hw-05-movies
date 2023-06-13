import { HomeList } from 'components/HomeList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getFilms } from 'service/getFilms';

const TrendingFilms = 'trending/all/day';
const filmByID = 'movie/569094';

export const Home = () => {
  const [films, setFilms] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const asyncUse = async () => {
      try {
        const { results } = await getFilms(TrendingFilms);
        console.log('data :>> ', results);
        setFilms(results);
      } catch (err) {
        console.log(err.message);
      }
    };
    asyncUse();
  }, []);

  // const handleClick = async id => {
  //   // const filmByID = `movie/${id}`;
  //   const data = await getFilms(filmByID);
  //   console.log('dataONE film :>> ', data);
  //   film(data);
  // };

  return (
    <>
      <h2>Trending today</h2>
      {films.length > 0 && <HomeList films={films} />}
    </>
  );
};
