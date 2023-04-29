import React, { useState } from "react";
import MoviesList from "./components/MovieList/MoviesList";

const url = "https://swapi.dev/api/films";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMovies() {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Data not found");
      }
      const data = await response.json();
      console.log(data);
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      console.log(transformedMovies[0]);
      setMovies(transformedMovies);
    } catch (error) {
      alert(`${error.name}: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return (
      <div className="loading">
        <h2 className="loading__text">Loading...</h2>
      </div>
    );
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
