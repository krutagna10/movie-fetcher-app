import React from "react";

import classes from "./MovieItem.module.css";

const MovieItem = ({ title, releaseDate, openingText }) => {
  return (
    <li className={classes.movie}>
      <h2>{title}</h2>
      <h3>{releaseDate}</h3>
      <p>{openingText}</p>
    </li>
  );
};

export default MovieItem;
