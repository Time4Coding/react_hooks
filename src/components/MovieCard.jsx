import React from "react";
import "./moviesCard.css";
import { Link } from "react-router-dom";
export default function MovieCard({ movie }) {
  return (
    <>
      <div className="movie_card" id="bright">
        <div className="info_section">
          <div className="movie_header">
            <Link to={`/description/${movie.id}`}>
              <img
                className="locandina"
                src={movie.posterUrl}
                alt={movie.title}
              />
            </Link>
            <h1>{movie.title}</h1>
            <h4>
              {movie.year}, {movie.director}
            </h4>
            <span className="minutes">{movie.runtime} min</span>
            <p className="type">{movie.genres.map((genre) => `${genre}, `)}</p>
          </div>
          <div className="movie_desc">
            <p className="text">{movie.plot}</p>
          </div>
          <div className="movie_social">
            <ul>
              <li>
                <i className="material-icons">share</i>
              </li>
              <li>
                <i className="material-icons"></i>
              </li>
              <li>
                <i className="material-icons">chat_bubble</i>
              </li>
            </ul>
          </div>
        </div>
        <div className="blur_back bright_back"></div>
      </div>
    </>
  );
}
