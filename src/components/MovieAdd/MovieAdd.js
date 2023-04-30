import React, { useRef } from "react";

import classes from "./MovieAdd.module.css";

function MovieAdd(props) {
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    titleRef.current = "";
    openingTextRef.current = "";
    releaseDateRef.current = "";

    props.onAddMovie(movie);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          ref={titleRef}
          placeholder="Enter Title"
          required
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea
          rows="5"
          id="opening-text"
          ref={openingTextRef}
          placeholder="Enter Opening Text"
          required
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input type="date" id="date" ref={releaseDateRef} required />
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default MovieAdd;
