import { Outlet, useParams } from "react-router-dom";
import { requestMovieDetails } from "../Services/API";
import { useState, useEffect, Suspense, useRef } from "react";
import css from "./MovieDetailsPage.module.css";
import { Link, useLocation } from "react-router-dom";
import GoBack from "../components/GoBack/GoBack";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state ?? "/");
  const [details, setDetails] = useState(null);

  useEffect(() => {
    async function fetchDetailsMovie() {
      try {
        const data = await requestMovieDetails(movieId);

        setDetails(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDetailsMovie();
  }, [movieId]);

  return (
    <>
      {details && (
        <div>
          <GoBack to={backLink.current}>⬅ Go back</GoBack>
          <div className={css.container}>
            <img
              src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
              alt={details.title}
              width="200px"
            />
            <div className={css.description}>
              <h2>
                {details.title}({details.release_date.slice(0, 4)})
              </h2>
              <p className={css.text}>
                User Score {Math.round(details.vote_average * 10)}%
              </p>
              <h3>Overview</h3>
              <p className={css.text}> {details.overview}</p>
              <h3>Genres</h3>
              <p className={css.text}>
                {details.genres
                  .map((genre) => {
                    return genre.name;
                  })
                  .join(" ")}
              </p>
            </div>
          </div>
          <div className={css.adInfo}>
            <h4>Additional information</h4>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>
          <Suspense fallback={<div>Loading infopage...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
}
