import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar_wrapper">
          <ul className="nav">
            <li className="nav_item">
              <NavLink
                to="photos"
                className={({ isActive }) =>
                  `nav_link ${isActive ? "active" : ""}`
                }
              >
                Photos
              </NavLink>
            </li>
            <li className="nav_item">
              <NavLink
                to="collections"
                className={({ isActive }) =>
                  `nav_link ${isActive ? "active" : ""}`
                }
              >
                Collections
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
