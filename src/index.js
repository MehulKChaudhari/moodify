import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { MusicProvider } from "./Contexts/musicContext";
import { MoodProvider } from "./Contexts/moodContext";
import { CurrentSongProvider } from "./Contexts/currentSong";
import { AudioInsProvider } from "./Contexts/audioIns";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MoodProvider>
        <MusicProvider>
          <CurrentSongProvider>
            <AudioInsProvider>
              <App />
            </AudioInsProvider>
          </CurrentSongProvider>
        </MusicProvider>
      </MoodProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
