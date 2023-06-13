import { HomeList } from 'components/HomeList';
import { useEffect, useState } from 'react';
import { getTrendingFilms } from 'service/getFilms';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const asyncUse = async () => {
      try {
        const { results } = await getTrendingFilms();
        setFilms(results);
      } catch (err) {
        console.log(err.message);
      }
    };
    asyncUse();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {films.length > 0 && <HomeList films={films} />}
    </>
  );
};
export default Home;
