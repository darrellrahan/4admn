import React from "react";
import Logo from "./Logo";
import { BsChevronDown } from "react-icons/bs";
import adminImg from "../assets/smkn4bdg.svg";

const Header = () => {
  return (
    <header>
      <div className="left-header">
        <div className="logo-area">
          <Logo />
        </div>
        <input
          type="text"
          className="placeholder-icon"
          autoComplete="off"
          placeholder="&#61442; &nbsp; Cari"
        />
      </div>
      <div className="right-header">
        <div className="admin-area">
          <img src={adminImg} alt="img" />
          <div>
            <h4 className="regular-text">SMKN 4 Bandung</h4>
            <p className="small-text">smkn4bdg@mail.com</p>
          </div>
        </div>
        <button className="dropdown-btn">
          <BsChevronDown />
        </button>
      </div>
    </header>
  );
};

export default Header;
