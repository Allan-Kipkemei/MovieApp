import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import MovieCard from "../../MovieCard";
import "../../movies/trending/Trending.css";

const Upcoming = () => {
  const [upcoming, setUpcoming] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const fetchUpcoming = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=791b6328c9d4bd3d9dd7b05a42c5c1c8"
    );
    setUpcoming(res.data.results);
  };

  const fetchMovieDetails = async (movieId) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=791b6328c9d4bd3d9dd7b05a42c5c1c8&append_to_response=videos`
    );
    setSelectedMovie(res.data);
  };

  useEffect(() => {
    fetchUpcoming();
  }, []);

  const handleMovieSelect = async (movieId) => {
    await fetchMovieDetails(movieId);
  };

  const handleClosePlayer = () => {
    setSelectedMovie(null);
  };

  return (
    <section className="movie">
      <h2 className="title">Upcoming</h2>
      <div className="movie__content">
        {upcoming &&
          upcoming.map((movie, index) => (
            <MovieCard
              movie={movie}
              key={index}
              onClick={() => handleMovieSelect(movie.id)}
            />
          ))}
      </div>
      {selectedMovie && (
        <div className="player-wrapper">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${selectedMovie.videos.results[0].key}`}
            controls
            width="100%"
            height="100%"
            className="react-player"
            playing
          />
          <button onClick={handleClosePlayer}>Close</button>
        </div>
      )}
    </section>
  );
};

export default Upcoming;
