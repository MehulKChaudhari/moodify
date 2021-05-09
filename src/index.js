import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { MusicProvider } from "./Contexts/musicContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MusicProvider>
        <App />
      </MusicProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
