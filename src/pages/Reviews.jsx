import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsByFilmId } from 'service/getFilms';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const asyncUse = async () => {
      try {
        const { results } = await getReviewsByFilmId(movieId);
        setReviews(results);
      } catch (err) {
        console.log(err.message);
      }
    };
    asyncUse();
  }, [movieId]);

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
export default Reviews;
