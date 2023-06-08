import axios from 'axios';

const api_key = '8aba4e3419a44727b7eb66f35fce4fa2';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/all/day';
axios.defaults.params = {
  api_key,
};

export const getFilms = async () => {
  const { data } = await axios.get();
  //   console.log('data :>> ', data);
  return data;
};
