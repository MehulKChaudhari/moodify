import React from "react";
import Logo1 from "../../Assets/transparent_white.png";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div className="">
      <div className="">
        <img src={Logo1} alt="logo" />
      </div>
      <div className="">
        <h4>
          Moodify is new generation music player which is intelligent enough to
          recognize your mood then make playlist.
        </h4>
        <div className="button-div">
          <Link to="/about-us">
            <button className="">
              About us{" "}
            </button>
          </Link>
          <Link to="/dashboard">
            {" "}
            <button className="">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
