import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
