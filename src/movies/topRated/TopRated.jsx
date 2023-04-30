import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../../MovieCard";
import "../../movies/trending/Trending.css";

const TopRated = () => {
  const [topRated, setTopRated] = useState([]);

  const fetchTopRated = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=791b6328c9d4bd3d9dd7b05a42c5c1c8`
    );
    setTopRated(res.data.results);
    //console.log(res.data.results);
  };

  useEffect(() => {
    fetchTopRated();
  }, []);

  return (
    <section className="movie">
      <h2 className="title">Top Rated</h2>
      <div className="movie__content">
        {topRated &&
          topRated.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
      </div>
    </section>
  );
};

export default TopRated;
