import React from "react";
import Logo1 from "../../Assets/moodify_black.png";
import "./LandingPage.css";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div className="container ">
      <div className="left">
        <img src={Logo1} alt="logo" />
      </div>
      <div className="right">
        <h4>
          Moodify is new generation music player which is intelligent enough to
          recognize your mood then make playlist.
        </h4>
        <div className="button-div">
          <Link to="/about-us">
            <button className="btn btn-primary primary-button">
              About us{" "}
            </button>
          </Link>
          <Link to="/dashboard">
            {" "}
            <button className="btn btn-outline-primary outline-button">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
