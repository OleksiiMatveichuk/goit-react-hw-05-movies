import axios from 'axios';

const api_key = '8aba4e3419a44727b7eb66f35fce4fa2';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key,
};

export const getFilms = async string => {
  const { data } = await axios.get(string);
  //   console.log('data :>> ', data);
  return data;
};

//   url: 'search/movie',
//   params: { include_adult: 'false', language: 'en-US', page: '1' },

//   url: 'movie/movie_id',
//   params: { language: 'en-US' },

//   url: 'movie/movie_id/credits',
//   params: { language: 'en-US' },

//   url: 'movie/movie_id/reviews',
//   params: { language: 'en-US', page: '1' },
