import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../../MovieCard";
import "../../movies/trending/Trending.css";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  const fetchPopular = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=791b6328c9d4bd3d9dd7b05a42c5c1c8`
    );
    setPopular(res.data.results);
    console.log(res.data.results);
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <section className="movie">
      <h2 className="title">Popular</h2>
      <div className="movie__content">
        {popular &&
          popular.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
      </div>
    </section>
  );
};

export default Popular;
