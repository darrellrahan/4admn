import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { inbox } from "../data";

const Inbox = () => {
  return (
    <>
      <Header />
      <Sidebar currentPage="Surat Masuk" />
      <main className="inbox">
        <h1 className="heading">Surat Masuk</h1>
        <p className="small-text">
          {inbox.length} Surat <span style={{ margin: "0 0.2rem" }}>|</span>{" "}
          {inbox.length - 1} Belum Terbaca
        </p>
        {inbox.map((e, i) => {
          const { img, name, messages, date } = e;
          return (
            <div key={i} className="single-letter">
              <input type="checkbox" />
              <img src={img} alt="img" />
              <div className="text">
                <div className="top-text">
                  <h3 className="regular-text name">{name}</h3>
                  <p className="small-text date">{date}</p>
                </div>
                <p className="small-text messages">
                  {messages.length > 100
                    ? messages.substring(0, 80) + " ..."
                    : messages}
                </p>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Inbox;
