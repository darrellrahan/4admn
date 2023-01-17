import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Sent = () => {
  return (
    <>
      <Header />
      <Sidebar currentPage="Terkirim" />
      <main className="sent">
        <h1 className="heading">Sent</h1>
      </main>
    </>
  );
};

export default Sent;
