import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

function MovieList({ movies }) {
  const location = useLocation();

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;