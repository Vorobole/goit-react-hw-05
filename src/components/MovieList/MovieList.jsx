import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

function MovieList({ movies }) {
  const [showMessage, setShowMessage] = useState(false);
  const location = useLocation();

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
            <Link to={{ pathname: `/movies/${movie.id}`, state: { location } }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
