import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFilms } from 'service/getFilms';

export const Movies = () => {
  const [queri, setQueri] = useState('');
  // useSearchParams

  // const api = `search/movie`;
  const handleSubmit = e => {
    e.preventDefault();
    console.log('e :>> ', e.target);
    console.log('query :>> ', queri);
  };

  useEffect(() => {
    const asyncUse = async () => {
      const api = `${queri}/movie`;
      const data = await getFilms(api);
      setQueri(data);
      console.log('data :>> ', data);
    };
    asyncUse();
  }, [handleSubmit]);

  const handleChange = e => {
    const { value } = e.target;
    setQueri(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={queri} name="search" />
      <button>Search</button>
    </form>
  );
};
