import React from "react";
import "./App.css";
// import LandingPage from './Components/LandingPage'
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { MusicPlayer } from "./Components/MusicPlayer/MusicPlayer";
import { Home } from "./Components/Home/Home";
// import Main from "./Components/Main/Main";

function App() {
  return (
    <div className="">
      {/* <LandingPage /> */}
      {/* <Main /> */}
      <div className="main">
        <Sidebar />
        <Home />
      </div>
      <MusicPlayer />
    </div>
  );
}

export default App;
