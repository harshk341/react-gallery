import React from "react";
import "./App.css";
import { Header } from "./components";
import { ImagesContainer } from "./containers";

const App = () => {
  return (
    <div className="app">
      <div className="app_wrapper">
        <Header />
        <ImagesContainer />
      </div>
    </div>
  );
};

export default App;
