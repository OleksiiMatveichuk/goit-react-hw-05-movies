import { HomeList } from 'components/HomeList';
import { useEffect, useState } from 'react';
import { getFilms } from 'service/getFilms';

export const Home = () => {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    const asyncUse = async () => {
      const { results } = await getFilms();
      console.log('data :>> ', results);
      setFilms(results);
    };
    asyncUse();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {films && <HomeList films={films} />}
    </>
  );
};
