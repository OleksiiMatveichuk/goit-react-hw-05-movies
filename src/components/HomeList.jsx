import { Link } from 'react-router-dom';

export const HomeList = ({ films, click }) => {
  return (
    <ul>
      {films.map(el => (
        <li key={el.id}>
          <Link to={`/movies/${el.id}`}>{el.title || el.name}</Link>
        </li>
      ))}
    </ul>
  );
};
