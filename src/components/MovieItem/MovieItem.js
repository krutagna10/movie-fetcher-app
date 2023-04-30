import React from "react";

import classes from "./MovieItem.module.css";

const MovieItem = ({ id, title, releaseDate, openingText, onDeleteMovie }) => {
  function handleDeleteMovie() {
    onDeleteMovie(id);
  }

  return (
    <li className={classes.movie}>
      <h2>{title}</h2>
      <h3>{releaseDate}</h3>
      <p>{openingText}</p>
      <button onClick={handleDeleteMovie}>Delete movie</button>
    </li>
  );
};

export default MovieItem;
