import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getFilms } from 'service/getFilms';
import { MovieDetails } from './MovieDetails';

export const Movies = () => {
  const [queri, setQueri] = useState('');
  const [search, setSearch] = useState(null);
  const [films, setFilms] = useState(null);
  // useSearchParams

  const location = useLocation();

  // const api = `search/movie`;
  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.search;
    setSearch(value);
  };

  useEffect(() => {
    const asyncUse = async () => {
      if (!search) {
        return;
      }
      try {
        console.log('search :>> ', search);
        const api = `${search}/movie`;
        const { results } = await getFilms(api);
        setFilms(results);
        console.log('data :>> ', results);
      } catch (err) {
        console.log(err.message);
      }
    };
    asyncUse();
  }, [search]);

  const handleChange = e => {
    const { value } = e.target;
    setQueri(value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={queri}
          name="search"
        />
        <button>Search</button>
      </form>
      {films && (
        <ul>
          {films.map(el => (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`} state={location}>
                {el.title || el.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

// переход goBack зі сторінки Home (як перекинути location)
// помилка пошука на Movies
// useSearchParams
