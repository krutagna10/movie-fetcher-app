import React from "react";

import MovieItem from "../MovieItem/MovieItem";
import classes from "./MoviesList.module.css";

const MovieList = ({ movies, onDeleteMovie }) => {
  return (
    <ul className={classes["movies-list"]}>
      {movies.length === 0 ? (
        <h2>Found no movies</h2>
      ) : (
        <>
          {movies.map((movie) => (
            <MovieItem
              key={movie.id}
              {...movie}
              onDeleteMovie={onDeleteMovie}
            />
          ))}
        </>
      )}
    </ul>
  );
};

export default MovieList;
