import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Logo = () => {
  return (
    <Link to="/" className="logo-area">
      <img src={logo} alt="logo" />
      <span className="heading">4 Admn</span>
    </Link>
  );
};

export default Logo;
