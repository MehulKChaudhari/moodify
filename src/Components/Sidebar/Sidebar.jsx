import React from "react";
import "./Sidebar.css";
import Logo from "./transparent_white.png";
import {  BiHeart } from "react-icons/bi";
import { FaHome,FaSearch } from "react-icons/fa";
import { IoNavigateSharp } from "react-icons/io5"
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import drunkenMonkey from './a.mp3'

export default function App() {
  return (
    <>
      <div className="main">
        <div className="side-nav">
          <div id="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div id="options">
            <div className="subop ">
              <a href="/">
                <button className="btn btn-secondary btn-sm w-75">
                     <FaHome/>   Home
                </button>
              </a> 
                    
            </div>
            <div className="subop ">
              <a href="/">
                <button className="btn btn-secondary btn-sm w-75 ">
                    <BiHeart/> Favourites 
                </button>
              </a>
            </div>
            <div className="subop ">
              <a href="/">
                <button className="btn btn-secondary btn-sm w-75">
                  <IoNavigateSharp/> Near Me
                </button>
              </a>
                    
            </div>
          </div>
          <div id="copyright">
          <p>Copyright &copy;2020 <span>Moodify</span></p>
          </div>
        </div>

        {/* Right div */}
        <div className="app">
          <div className="top-search-bar">
          <FaSearch className="search-icon" size={20}/>
            <input placeholder={"Search Music"} type="text" />
          </div>

          <div className="square-songs">
            <p>Explore Happy Songs</p>
            <div>
              <p>Song1</p>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div>
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
          </div>


        </div>
      </div>

      <div className="playbar w-100">
        
        <ReactJkMusicPlayer theme="dark" drag={false} showThemeSwitch={false} audioLists={[{ duration : 100.0, src: drunkenMonkey}]}/>
        {/* <embed src={drunkenMonkey}/> */}
      </div>
    </>
  );
}
