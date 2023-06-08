export const HomeList = ({ films }) => {
  return (
    <ul>
      {films.map(el => (
        <li key={el.id}>{el.title || el.name}</li>
      ))}
    </ul>
  );
};
