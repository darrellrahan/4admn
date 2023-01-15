import React from "react";
import logo from "../assets/logo.svg";

const Logo = () => {
  return (
    <div className="logo-area">
      <img src={logo} alt="logo" />
      <span className="heading">4 Admn</span>
    </div>
  );
};

export default Logo;
