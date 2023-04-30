import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Banner.css";
import { image_url } from "../../config/config";
import { Link } from "react-router-dom";

const Banner = ({ media }) => {
  const [banner, setBanner] = useState([]);

  const fetchBannerDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/${media ? "tv" : "movie"
      }?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=28`
    );
    setBanner(
      res.data.results[Math.floor(Math.random() * res.data.results.length - 1)]
    );
  };

  // eslint-disable-next-line
  useEffect(() => {
    fetchBannerDetails();
  }, []);

  //truncate function
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <Link to={`/movie/${banner.id}`}>
      <section
        className="banner"
        style={{
          backgroundImage: `url(${image_url}${banner?.backdrop_path})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        {banner && (
          <div className="banner__content">
            <h3 className="banner__title">
              {banner?.original_title ||
                banner?.title ||
                banner?.original_name ||
                banner?.name}
            </h3>
            <p className="banner__overview">{truncate(banner.overview, 200)}</p>
          </div>
        )}
      </section>
    </Link>
  );
};

export default React.memo(Banner);
