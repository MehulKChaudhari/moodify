import React from "react";
import Logo from "../../Assets/transparent_white.png";
import { BiHeart } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { IoNavigateSharp } from "react-icons/io5";

export const Sidebar = () => {
  return (
    <div className="side-nav">
      <div id="logo">
        <img src={Logo} alt="logo" className="sidenav-logo" />
      </div>
      <ul id="options">
        <li className="nav-link">
          <a href="/" className="">
            <button className="btn btn-secondary btn-sm sidenav-button d-flex">
              <span className="nav-icon">
                <FaHome />
              </span>{" "}
              Home
            </button>
          </a>
        </li>
        <li className="nav-link ">
          <a href="/">
            <button className="btn btn-secondary btn-sm sidenav-button d-flex">
              <span className="nav-icon">
                <BiHeart />
              </span>{" "}
              Favourites
            </button>
          </a>
        </li>
        <li className="nav-link ">
          <a href="/">
            <button className="btn btn-secondary btn-sm sidenav-button d-flex">
              <span className="nav-icon">
                <IoNavigateSharp />
              </span>{" "}
              Near Me
            </button>
          </a>
        </li>
      </ul>
      <div id="copyright">
        <p>
          Copyright &copy;2021 <span>Moodify</span>
        </p>
      </div>
    </div>
  );
};
