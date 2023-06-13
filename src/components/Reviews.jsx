import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilms } from 'service/getFilms';

const img = 'https://image.tmdb.org/t/p/w500/';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);

  const { movieId } = useParams();
  const api = `movie/${movieId}/reviews`;

  useEffect(() => {
    const asyncUse = async () => {
      const { results } = await getFilms(api);
      setReviews(results);
      console.log('results :>> ', results);
    };
    asyncUse();
  }, []);

  return (
    <>
      <ul>
        {reviews &&
          reviews.map(el => (
            <li key={el.id}>
              {/* <img src={`${img}${el.author_details.avatar_path}`} alt="" /> */}
              <h3>{el.author}</h3>
              <p>{el.content}</p>
            </li>
          ))}
      </ul>
    </>
  );
};
