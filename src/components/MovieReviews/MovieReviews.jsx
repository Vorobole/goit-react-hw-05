import { useState, useEffect } from "react";
import { requestMovieReviews } from "../../Services/API";
import { useParams } from "react-router-dom";
import css from "./MovieReviews.module.css";

function MovieReviews() {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        const data = await requestMovieReviews(movieId);

        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {reviews && (
        <ul className={css.list}>
          {reviews.map((review) => {
            return (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default MovieReviews;
