import React from "react";
import Logo from "../../assets/logo3.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <span>
      <Link to="/">
        <img src={Logo} alt="header-logo" className="header__logo" />
      </Link>
    </span>
  );
};

export default Header;
