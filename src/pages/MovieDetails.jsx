import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getFilms } from 'service/getFilms';

const img = 'https://image.tmdb.org/t/p/w500/';

export const MovieDetails = () => {
  const [film, setFilm] = useState(null);

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
      <button>Go back</button>
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
          <NavLink to={'cast'}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={'reviews'}>Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
