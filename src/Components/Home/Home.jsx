import React from "react";
import { FaSearch } from "react-icons/fa";
import img1 from "../../Assets/image1.jpg";
import img2 from "../../Assets/image2.jpeg";
import img3 from "../../Assets/image3.jpeg";
import img4 from "../../Assets/image4.jpeg";
import img5 from "../../Assets/image5.jpeg";
import img6 from "../../Assets/image6.jpeg";
import img7 from "../../Assets/image7.jpeg";
import ch from "../../Assets/camera-holder.jpeg";
import Webcam from "react-webcam";

export const Home = () => {
  const videoConstraints = {
    width: 1280,
    height: 720,
    aspectRatio: 0.6666666667
  };

  return (
    <div className="home">
      <div className="top-search-bar">
        <input placeholder={"Search Music"} type="text" />
        <FaSearch className="search-icon" size={20} />
      </div>

      <div className="explore-heading">
        <h4>Explore Happy Songs</h4>
      </div>

      <div className="square-songs">
        <div className="square-songs-child">
          <img src={img1} alt="" />
          <p>Song 1</p>
        </div>
        <div className="square-songs-child">
          <img src={img2} alt="" />
          <p>Song 2</p>
        </div>
        <div className="square-songs-child">
          <img src={img3} alt="" />
          <p>Song 3</p>
        </div>
        <div className="square-songs-child">
          <img src={img4} alt="" />
          <p>Song 4</p>
        </div>
        <div className="square-songs-child">
          <img src={img5} alt="" />
          <p>Song 5</p>
        </div>
        <div className="square-songs-child">
          <img src={img6} alt="" />
          <p>Song 6</p>
        </div>
        <div className="square-songs-child">
          <img src={img7} alt="" />
          <p>Song 7</p>
        </div>
      </div>

      <div className="mood-song-heading">
        <h4>Songs based on your mood</h4>
      </div>

      <div className="home-lower-half">
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
          <div>
            <p>Current Mood</p>
            <p>😊</p>
            <p>Happy</p>
          </div>
        </div>
      </div>
    </div>
  );
};
