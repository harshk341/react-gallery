import React, { useEffect } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import { Header } from "./components";
import { WINDOW_SIZE } from "./constants/windowSize";
import { getWindowSize } from "./slices/window";
import { useDispatch } from "./store";
import router from "./router";

const App = () => {
  const dispatch = useDispatch();
  const content = useRoutes(router);
  
  useEffect(() => {
     
    const onWindowResize = () => {

      const { innerWidth } = window;

      if (innerWidth >= WINDOW_SIZE.desktop) {
        dispatch(getWindowSize(WINDOW_SIZE.desktop))
      } 
      else if (innerWidth >= WINDOW_SIZE.laptop) {
        dispatch(getWindowSize(WINDOW_SIZE.laptop))
      } 
      else if (innerWidth >= WINDOW_SIZE.phablet) {
        dispatch(getWindowSize(WINDOW_SIZE.phablet))
      } 
      else if (innerWidth >= WINDOW_SIZE.phone) {
        dispatch(getWindowSize(WINDOW_SIZE.phone))
      }
    };

    onWindowResize();
    window.addEventListener("resize", onWindowResize);
    return () => {window.removeEventListener("resize", onWindowResize)};
  }, []);

  return (
    <div className="app">
      <div className="app_wrapper">
        {content}
      </div>
    </div>
  );
};

export default App;
