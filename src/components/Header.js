import React from "react";

const Header = () => {
  return (
    <>
      <div className="app_header">
        <div className="app_header_wrapper">
          <div className="app_logo">
            <a href="/" className="logo">
              React Gallery
            </a>
          </div>
          <div className="app_search">
            <input type="text" className="search_bar" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
