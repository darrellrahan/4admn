import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Bin = () => {
  return (
    <>
      <Header />
      <Sidebar currentPage="Sampah" />
      <main className="bin">
        <h1 className="heading">Bin</h1>
      </main>
    </>
  );
};

export default Bin;
