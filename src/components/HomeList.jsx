import { Link, useLocation } from 'react-router-dom';

export const HomeList = ({ films, click }) => {
  const location = useLocation();
  return (
    <ul>
      {films.map(el => (
        <li key={el.id}>
          <Link to={`/movies/${el.id}`} state={location}>
            {el.title || el.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
