import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getFilmsForSearch } from 'service/getFilms';

const Movies = () => {
  const [queri, setQueri] = useState('');
  const [films, setFilms] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ search: queri });
  };

  useEffect(() => {
    const asyncUse = async () => {
      if (!search) {
        return;
      }
      try {
        const { results } = await getFilmsForSearch(search);
        setFilms(results);
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
export default Movies;
