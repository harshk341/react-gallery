import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar_wrapper">
          <ul className="nav">
            <li className="nav_item">
              <NavLink to="s/photos" className="nav_link">
                Photos
              </NavLink>
            </li>
            <li className="nav_item">
              <NavLink to="s/collections" className="nav_link">
                Collection
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
