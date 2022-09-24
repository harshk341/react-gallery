import React from "react";
import { Outlet } from "react-router-dom";
import { Header, NavBar } from ".";

const BaseLayout = () => {
  return (
    <>
      <Header />
      <div className="app_content">
        <div className="app_content_wrapper">
          <div className="inner_wrapper">
            <NavBar />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default BaseLayout;
