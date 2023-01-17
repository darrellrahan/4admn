import React from "react";
import { Link } from "react-router-dom";
import { sidebarData } from "../data";

const Sidebar = ({ currentPage }) => {
  return (
    <nav className="sidebar-container">
      <ul>
        {sidebarData.map((e, i) => {
          const { icon, text, url } = e;
          return (
            <li key={i}>
              <Link
                to={url}
                className={
                  i === 0 || currentPage === text
                    ? "regular-text sidebar-link active"
                    : "regular-text sidebar-link"
                }
              >
                {icon} {text}{" "}
                {i === 1 && (
                  <span style={{ fontSize: "smaller", marginLeft: "4.5rem" }}>
                    6
                  </span>
                )}
              </Link>
              {i === 0 && <hr />}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
