import React from "react";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBox.css";
import { Link } from "react-router-dom";

const SearchBox = () => {
  return (
    <>
      <div className="search__btn">
        <Link to="/search">
          <Button
            variant="contained"
            sx={{ marginLeft: "3px", backgroundColor: "red" }}
          >
            <SearchIcon />
          </Button>
        </Link>
      </div>
    </>
  );
};

export default SearchBox;
