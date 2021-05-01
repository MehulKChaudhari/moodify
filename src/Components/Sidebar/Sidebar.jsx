import React from "react";
import Logo from "../../Assets/transparent_white.png";
import { BiHeart } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { IoNavigateSharp } from "react-icons/io5";

export const Sidebar = () => {
  return (
    <div className="side-nav">
    <div className="sidenav__container-top">
      <div id="logo">
        <img src={Logo} alt="logo" className="sidenav-logo" />
      </div>
      <ul className="side-nav__list">
        <li className="side-nav__list-item">
          <a href="/" className="side-nav__link">
            <FaHome className="nav-icon" />
            <p>Home</p>
          </a>
        </li>
        <li className="side-nav__list-item">
        <a href="/" className="side-nav__link">
            <BiHeart className="nav-icon" />
            <p>Favourite</p>
          </a>
        </li>
        <li className="side-nav__list-item">
        <a href="/" className="side-nav__link">
            <IoNavigateSharp className="nav-icon" />
            <p>Near Me</p>
          </a>
        </li>
      </ul>
    </div>
      <div className="side-nav__copyright">
        <p>
          Copyright &copy;2021 <span className="copyright__name">Moodify</span>
        </p>
      </div>
    </div>
  );
};
