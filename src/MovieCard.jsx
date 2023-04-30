import React from "react";
import { image_url } from "./config/config";
import { no_poster_img } from "./config/config";
import { no_backdrop_img } from "./config/config";
import "./MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, backdrop }) => {
  return (
    <>
      {movie && (
        <div className="card__content">
          <Link to={`/movie/${movie.id}`}>
            <img
              src={
                backdrop
                  ? movie.backdrop_path
                    ? `${image_url}${movie.backdrop_path}`
                    : `${no_backdrop_img}`
                  : movie.poster_path
                  ? `${image_url}${movie.poster_path}`
                  : `${no_poster_img}`
              }
              alt={movie?.title || movie?.original_title || movie?.name}
              className={backdrop ? "backdrop" : "poster"}
            />
          </Link>
          <p className="movie__title">
            {backdrop
              ? movie?.title || movie?.original_title || movie?.name
              : ""}
          </p>
        </div>
      )}
    </>
  );
};

export default MovieCard;
