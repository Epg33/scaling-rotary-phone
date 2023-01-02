import axios from "axios";

export const fetchingMovies = async (content, page, query, type) => {
  const res = await axios.get(`https://api.themoviedb.org/3/${type}/${query}?api_key=5433a58ed58a7253f675b66bb885524d&language=en-US&page=${page}`);
  const data = await res.data.results;
  console.log(data)
  if (!content) return await data;
  return [...content, data];
};
