import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../MovieDetails.css";
import "./Search.css";
import MovieCard from "../MovieCard";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);

  const searchMovies = async () => {
    const movies = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchInput}&include_adult=false`
    );
    //console.log(movies);
    setSearchedMovies(movies.data.results);
  };

  useEffect(() => {
    searchMovies();
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <div className="page">
        <div className="page__content">
          <Button
            onClick={() => navigate(-1)}
            sx={{
              backgroundColor: "#ff0000",
              color: "#fff",
              padding: "5px 10px",
              fontSize: "20px",
              position: "absolute",
              right: "16px",
              top: "8px",
            }}
          >
            &times;
          </Button>
          <h3>Search Movies Here...</h3>
          <div className="search__area">
            <input
              type="text"
              className="search__box"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search Movies..."
            />

            <Button
              variant="contained"
              sx={{ marginLeft: "10px", backgroundColor: "red" }}
              onClick={searchMovies}
            >
              <SearchIcon />
            </Button>
          </div>
          <div className="searched__movies">
            {searchedMovies &&
              searchedMovies.map((movie, index) => (
                <MovieCard movie={movie} key={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Search);
