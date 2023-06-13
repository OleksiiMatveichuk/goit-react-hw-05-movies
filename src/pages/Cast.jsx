import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastByFilmId } from 'service/getFilms';

const img = 'https://image.tmdb.org/t/p/w500/';
const noImg =
  'https://st4.depositphotos.com/4320021/23631/v/450/depositphotos_236319394-stock-illustration-photo-coming-soon-picture-frame.jpg';

const Cast = () => {
  const [actors, setActors] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const asyncUse = async () => {
      try {
        const { cast } = await getCastByFilmId(movieId);
        setActors(cast);
      } catch (err) {
        console.log(err.message);
      }
    };
    asyncUse();
  }, [movieId]);

  return (
    <>
      <ul>
        {actors &&
          actors.map(el => (
            <li key={el.id}>
              <img
                src={el.profile_path ? `${img}${el.profile_path}` : noImg}
                alt=""
              />
              <h3>{el.name}</h3>
              <p>{el.character}</p>
            </li>
          ))}
      </ul>
    </>
  );
};
export default Cast;
