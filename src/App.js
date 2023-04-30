import React, { useState } from "react";
import MoviesList from "./components/MovieList/MoviesList";
import MovieAdd from "./components/MovieAdd/MovieAdd";
import { useEffect } from "react";

const url = "https://swapi.dev/api/films";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      setError(null);
      const data = await response.json();
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
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleAddMovie(movie) {
    const newMovie = { id: crypto.randomUUID(), ...movie };
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  }

  function handleDeleteMovie(deleteId) {
    setMovies((prevMovies) => {
      const updatedMovies = prevMovies.filter((movie) => {
        return deleteId !== movie.id;
      });
      return updatedMovies;
    });
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
        <MovieAdd onAddMovie={handleAddMovie} />
      </section>
      {movies.length === 0 && (
        <section>
          <button onClick={fetchMovies}>Fetch Movies</button>
        </section>
      )}
      <section>
        <MoviesList movies={movies} onDeleteMovie={handleDeleteMovie} />
        {error && <h1 className="error">{error}</h1>}
      </section>
    </React.Fragment>
  );
}

export default App;
