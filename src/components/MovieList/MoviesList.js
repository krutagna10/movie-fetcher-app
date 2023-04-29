import React from "react";

import MovieItem from "../MovieItem/MovieItem";
import classes from "./MoviesList.module.css";

const MovieList = ({ movies }) => {
  return (
    <ul className={classes["movies-list"]}>
      {movies.length === 0 ? (
        <h2>No Movies Present</h2>
      ) : (
        <>
          {movies.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </>
      )}
    </ul>
  );
};

export default MovieList;
