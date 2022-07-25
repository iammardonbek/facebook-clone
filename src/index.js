import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PhotoContextProvider } from "./components/Contexts";
import { LoginContextProvider } from "./components/Contexts";
import { NavContextProvider } from "./components/Contexts";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

var root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <NavContextProvider>
      <LoginContextProvider>
        <PhotoContextProvider>
          <App />
        </PhotoContextProvider>
      </LoginContextProvider>
    </NavContextProvider>
  </BrowserRouter>
);
