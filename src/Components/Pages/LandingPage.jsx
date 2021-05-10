import React from "react";
import Logo1 from "../../Assets/transparent_white.png";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from 'react-icons/ai'

export const LandingPage = () => {
  return (
    <div className="landing-page__container">
      <div className="landing-page__logo">
        <img src={Logo1} alt="logo" className="logo" />
      </div>
      <div className="landing-page__tagline">
        <h1 className="tagline">
          Shut the world <span>Out</span>
        </h1>
        <h3 className="tagline">Listen to your <span>Mood!</span></h3>
        <div className="landing-page__buttons">
          <Link to="/about-us">
            <button className="landing-page__pri-button">About Us</button>
          </Link>
          <Link to="/dashboard">
            <button className="landing-page__sec-button">Get Started <AiOutlineArrowRight /></button>
          </Link>
        </div>
      </div>
    </div>
  );
};
