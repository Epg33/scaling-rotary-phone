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

export const searching = async (content, page, type, query) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/search/${type}?api_key=5433a58ed58a7253f675b66bb885524d&language=en-US&query=${query}&page=${page}&include_adult=false`
  );
  const data = await res.data.results;
  if (!content) return await data;
  return [...content, data];
};

export const fetchingTrends = async (content, page, type, time) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/trending/${type}/${time}?api_key=5433a58ed58a7253f675b66bb885524d&page=${page}`
  );
  const data = await res.data.results;
  if (!content) return await data;
  return [...content, data];
}

export const fetchEspecificMovie = async ( id ) => {
  const res = await axios.get(
    `
    https://api.themoviedb.org/3/movie/${id}?api_key=5433a58ed58a7253f675b66bb885524d&language=en-US`
  );
  return res.data;
}

export const fetchEspecificPerson = async ( id ) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/person/${id}?api_key=5433a58ed58a7253f675b66bb885524d&language=en-US`
  )
  const aditionalInfo = await axios.get(
    `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=5433a58ed58a7253f675b66bb885524d&language=en-US`
  )
  return [res.data, aditionalInfo]
}

export const fetchEspecificShow = async ( id ) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/tv/${id}?api_key=5433a58ed58a7253f675b66bb885524d&language=en-US`
  );
  return res.data;
}