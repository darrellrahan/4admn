import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Favourite = () => {
  return (
    <>
      <Header />
      <Sidebar currentPage="Favorit" />
      <main className="favourite">
        <h1 className="heading">Favourite</h1>
      </main>
    </>
  );
};

export default Favourite;
