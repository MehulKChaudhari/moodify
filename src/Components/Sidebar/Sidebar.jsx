import React from "react";
import "./Sidebar.css";
import Logo from "./transparent_white.png";
import { BiHeart } from "react-icons/bi";
import { FaHome, FaSearch } from "react-icons/fa";
import { IoNavigateSharp } from "react-icons/io5";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import drunkenMonkey from "./a.mp3";
import img1 from "../../Assets/image1.jpg";
import img2 from "../../Assets/image2.jpeg";
import img3 from "../../Assets/image3.jpeg";
import img4 from "../../Assets/image4.jpeg";
import img5 from "../../Assets/image5.jpeg";
import img6 from "../../Assets/image6.jpeg";
import img7 from "../../Assets/image7.jpeg";
import ch from "../../Assets/camera-holder.jpeg";
import Webcam from "react-webcam"

export default function App() {
  const videoConstraints = {
    width: 1280,
    height: 720,
    aspectRatio: 0.6666666667
  };
  
  return (
    <>
      <div className="main">
        <div className="side-nav">
          <div id="logo">
            <img src={Logo} alt="logo" className="sidenav-logo" />
          </div>
          <div id="options">
            <div className="subop ">
              <a href="/" className="">
                <button className="btn btn-secondary btn-sm w-75 sidenav-button">
                  <span className="nav-icon">
                    <FaHome />
                  </span>{" "}
                  Home
                </button>
              </a>
            </div>
            <div className="subop ">
              <a href="/">
                <button className="btn btn-secondary btn-sm w-75 ">
                  <span className="nav-icon">
                    <BiHeart />
                  </span>{" "}
                  Favourites
                </button>
              </a>
            </div>
            <div className="subop ">
              <a href="/">
                <button className="btn btn-secondary btn-sm w-75">
                  <span className="nav-icon">
                    <IoNavigateSharp />
                  </span>{" "}
                  Near Me
                </button>
              </a>
            </div>
          </div>
          <div id="copyright">
            <p>
              Copyright &copy;2021 <span>Moodify</span>
            </p>
          </div>
        </div>

        {/* Right div */}
        <div className="app">
          <div className="top-search-bar">
            <input placeholder={"Search Music"} type="text" />
            <FaSearch className="search-icon" size={20} />
          </div>

          <div className="explore-heading">
            <h4>Explore Happy Songs</h4>
          </div>

          <div className="square-songs">
            <div className="square-songs-child">
              <img src={img1} />
              <p>Song 1</p>
            </div>
            <div className="square-songs-child">
              <img src={img2} />
              <p>Song 2</p>
            </div>
            <div className="square-songs-child">
              <img src={img3} />
              <p>Song 3</p>
            </div>
            <div className="square-songs-child">
              <img src={img4} />
              <p>Song 4</p>
            </div>
            <div className="square-songs-child">
              <img src={img5} />
              <p>Song 5</p>
            </div>
            <div className="square-songs-child">
              <img src={img6} />
              <p>Song 6</p>
            </div>
            <div className="square-songs-child">
              <img src={img7} />
              <p>Song 7</p>
            </div>
          </div>

          <div className="mood-song-heading">
            <h4>Songs based on your mood</h4>
          </div>

          <div className="app-lower-half">
            <div className="songs-list">
              <li> song 1 </li>
              <li> song 2</li>
              <li> song 3</li>
              <li>song 4</li>
              <li>song 5</li>
            </div>
            <div className="recognize-div">
              <div className="webcam">
                {/* <img src={ch} /> */}
                {/* <WebcamComponent /> */}
                <Webcam 
                  videoConstraints={videoConstraints}
                  className="webcam-opt" 
                />
              </div>
              <div className="refresh-button">
                <button>Search Playlist</button>
              </div>
            </div>
            <div className="prediction-opt">
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="playbar w-100">
        <ReactJkMusicPlayer
          theme="dark"
          drag={false}
          showThemeSwitch={false}
          audioLists={[{ duration: 100.0, src: drunkenMonkey }]}
        />
        {/* <embed src={drunkenMonkey}/> */}
      </div>
    </>
  );
}


