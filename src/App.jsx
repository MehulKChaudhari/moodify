import React from "react";
import "./App.css";
import { LandingPage } from "./Components/Pages/LandingPage";
import { Routes, Route, useLocation } from "react-router-dom";
import { Dashboard } from "./Components/Pages/Dashboard";
import { Favourites } from "./Components/Pages/Favourites";
import { AboutUs } from "./Components/Pages/AboutUs";
import { NearMe } from "./Components/Pages/NearMe";
import { MusicPlayer } from "./Components/MusicPlayer/MusicPlayer";

function App() {
  const location = useLocation();
  
  return (
    <>
      <div>
        <div className="main">
          <Routes>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/near-me" element={<NearMe />} />
          </Routes>
        </div>
        { (location.pathname !== "/" && location.pathname !=="/about-us")  && <MusicPlayer />}
      </div>
    </>
  );
}

export default App;
