import React from "react";
import Logo from "../components/Logo";

const NotFound = () => {
  return (
    <main className="nf-container">
      <Logo />
      <div className="text-ct">
        <h1 className="heading">404</h1>
        <p className="regular-text">Halaman tidak ditemukan.</p>
      </div>
    </main>
  );
};

export default NotFound;
