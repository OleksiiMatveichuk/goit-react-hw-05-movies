import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilms } from 'service/getFilms';

const img = 'https://image.tmdb.org/t/p/w500/';

export const Cast = () => {
  const [actors, setActors] = useState(null);

  const { movieId } = useParams();
  const api = `movie/${movieId}/credits`;

  useEffect(() => {
    const asyncUse = async () => {
      const { cast } = await getFilms(api);
      setActors(cast);
      console.log('data :>> ', cast);
    };
    asyncUse();
  }, []);

  return (
    <>
      <ul>
        {actors &&
          actors.map(el => (
            <li key={el.id}>
              <img src={`${img}${el.profile_path}`} alt="" />
              <h3>{el.name}</h3>
              <p>{el.character}</p>
            </li>
          ))}
      </ul>
    </>
  );
};
