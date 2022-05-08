import React from "react";
import ReactDOM from "react-dom/client";
import GlobalCSS from "./assets/styles/GlobalStyle";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontStyles } from "./assets/fonts/fonts";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalCSS />
    <FontStyles />
    <App />
  </React.StrictMode>
);
