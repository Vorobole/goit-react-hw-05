import { useState, useEffect } from "react";
import { requestMovie } from "../Services/API";
import MovieList from "../components/MovieList/MovieList";
import { useLocation, useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const paramQuery = searchParams.get("value");

  const handleSubmit = (e) => {
    e.preventDefault();
    const querySearch = e.target.elements.search.value.trim();
    setSearchParams({ value: querySearch });
  };

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (!paramQuery) return;

    async function fetchMovie() {
      try {
        const data = await requestMovie(paramQuery);
        if (data.results.length > 0) setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie();
  }, [paramQuery]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          name="search"
        />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && <MovieList movies={movies} location={location} />}
    </div>
  );
}
