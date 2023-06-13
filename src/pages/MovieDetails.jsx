import { useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getFilms } from 'service/getFilms';

const img = 'https://image.tmdb.org/t/p/w500/';

export const MovieDetails = () => {
  const [film, setFilm] = useState(null);

  const location = useLocation();

  const { movieId } = useParams();
  const api = `movie/${movieId}`;

  useEffect(() => {
    const asyncUse = async () => {
      const data = await getFilms(api);
      setFilm(data);
    };
    asyncUse();
  }, []);

  return (
    <>
      <Link to={location.state ?? '/'}>Go back</Link>
      {film && (
        <div>
          <img src={`${img}${film.poster_path}`} alt={film.title} />
          <div>
            <ul>
              <li>
                <h2>{film.title}</h2>
              </li>
              <li>
                <p>{film.tagline}</p>
              </li>
              <li>
                <h3>Overview</h3>
              </li>
              <li>
                <p>{film.overview}</p>
              </li>
              <li>
                <ul>
                  {film.genres.map((el, i) => (
                    <li key={i}>{el.name}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      )}
      <h3>Additional information</h3>
      <ul>
        <li>
          <NavLink to={'cast'} state={location.state}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to={'reviews'} state={location.state}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
