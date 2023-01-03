import axios from "axios";

export const fetchingMovies = async (content, page, query, type) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/${type}/${query}?api_key=5433a58ed58a7253f675b66bb885524d&language=en-US&page=${page}`
  );
  const data = await res.data.results;
  if (!content) return await data;
  return [...content, data];
};

export const fetchingPeople = async (content, page) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/person/popular?api_key=5433a58ed58a7253f675b66bb885524d&language=en-US&page=${page}`
  );
  const data = await res.data.results;
  if (!content) return await data;
  return [...content, data];
};

export const searching = async (content, page, query) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/search/multi?api_key=5433a58ed58a7253f675b66bb885524d&language=en-US&query=${query}&page=${page}&include_adult=false`
  );
  const data = await res.data.results;
  if (!content) return await data;
  return [...content, data];
};