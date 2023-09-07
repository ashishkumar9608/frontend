// src/components/MovieListings.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MovieListings = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch the list of movies from your Express backend API here
    // Example: fetch('/api/movies').then(response => response.json()).then(data => setMovies(data));
  }, []);

  return (
    <div>
      <h1>Movie Listings</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              {movie.title} ({movie.releaseYear})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieListings;
