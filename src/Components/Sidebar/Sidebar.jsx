import React from "react";
import Logo from "../../Assets/transparent_white.png";
import { BiHeart } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { IoNavigateSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="side-nav">
      <div className="sidenav__container-top">
        <div id="logo">
          <img src={Logo} alt="logo" className="sidenav-logo" />
        </div>
        <nav className="side-nav__list">
          <NavLink
            activeClassName="activeLink"
            style={{ textDecoration: "none" }}
            to="/dashboard"
            className="side-nav__link"
          >
            <FaHome className="nav-icon" />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            activeClassName="activeLink"
            style={{ textDecoration: "none" }}
            to="/favourites"
            className="side-nav__link"
          >
            <BiHeart className="nav-icon" />
            <span>Favourites</span>
          </NavLink>
          <NavLink
            activeClassName="activeLink"
            style={{ textDecoration: "none" }}
            to="/near-me"
            className="side-nav__link"
          >
            <IoNavigateSharp className="nav-icon" />
            <span>Near Me</span>
          </NavLink>
        </nav>
      </div>
      <div className="side-nav__copyright">
        <p>
          Copyright &copy;2021 <span className="copyright__name">Moodify</span>
        </p>
      </div>
    </div>
  );
};
