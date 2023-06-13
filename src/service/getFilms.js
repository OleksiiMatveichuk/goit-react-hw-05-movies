import axios from 'axios';

const api_key = '8aba4e3419a44727b7eb66f35fce4fa2';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key,
  language: 'en-US',
};

export const getTrendingFilms = async () => {
  const { data } = await axios.get('trending/all/day');
  return data;
};

export const getFilmsForSearch = async query => {
  const { data } = await axios.get('search/movie', { params: { query } });
  return data;
};

export const getCastByFilmId = async id => {
  const { data } = await axios.get(`movie/${id}/credits`);
  return data;
};

export const getReviewsByFilmId = async id => {
  const { data } = await axios.get(`movie/${id}/reviews`);
  return data;
};

export const getFilmById = async id => {
  const { data } = await axios.get(`movie/${id}`);
  return data;
};
