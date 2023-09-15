import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ listOfMovies }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {listOfMovies.map((movie) => {
        return <MovieCard movie={movie} key={movie.id} />;
      })}
    </div>
  );
}
