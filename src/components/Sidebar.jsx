import React from "react";
import { sidebarData } from "../data";

const Sidebar = () => {
  return (
    <nav className="sidebar-container">
      <ul>
        {sidebarData.map((e, i) => {
          const { icon, text, url } = e;
          return (
            <li key={i}>
              <a
                href={url}
                className={
                  i === 0 || i === 1 ? "regular-text active" : "regular-text"
                }
              >
                {icon} {text}
              </a>
              {i === 0 && <hr />}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
