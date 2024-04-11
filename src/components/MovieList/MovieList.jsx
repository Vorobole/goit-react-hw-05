import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

function MovieList({ movies }) {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!movies || movies.length === 0) {
        setShowMessage(true);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [movies]);

  if (showMessage) {
    return <div>No movies available</div>;
  }

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
