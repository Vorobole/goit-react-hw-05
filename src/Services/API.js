import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTRlZTIyODU1YWNmNTRlN2ZjZDdiZjBlNzk4MjJhZiIsInN1YiI6IjY2MTYzODk2NjZhMGQzMDEzMTJmY2ExOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J7eGnbKLR9F6bJsUmfFJMhAsK1MhfYu6aOsYPRb58Lc",
  },
};

export const requestTrendingMovies = async () => {
  const { data } = await axios.get(
    "trending/movie/day?language=en-US",
    options
  );
  return data;
};

export const requestMovie = async (query) => {
  const { data } = await axios.get("search/movie", {
    ...options,
    params: { query },
  });
  return data;
};

export const requestMovieDetails = async (id) => {
  const { data } = await axios.get(`movie/${id}`, options);
  return data;
};

export const requestMovieCast = async (id) => {
  const { data } = await axios.get(`movie/${id}/credits`, options);
  return data;
};

export const requestMovieReviews = async (id) => {
  const { data } = await axios.get(`movie/${id}/reviews`, options);
  return data;
};
