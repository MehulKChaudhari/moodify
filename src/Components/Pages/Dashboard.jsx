import React, { useCallback, useContext, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import img1 from "../../Assets/image1.jpg";
import img2 from "../../Assets/image2.jpeg";
import img3 from "../../Assets/image3.jpeg";
import img4 from "../../Assets/image4.jpeg";
import img5 from "../../Assets/image5.jpeg";
import img6 from "../../Assets/image6.jpeg";
import img7 from "../../Assets/image7.jpeg";
import Webcam from "react-webcam";
import { Sidebar } from "../Sidebar/Sidebar";
import{ musicContext} from '../../Contexts/musicContext';

export const Dashboard = () => {
  const [ arr, setArr, apiCall ] = useContext(musicContext);

  const videoConstraints = {
    // default width:height is 1280px:720px
    width: 365.71,
    height: 205.7,
    aspectRatio: 0.6666666667,
  };

  useEffect(() => {
    document
      .getElementsByClassName("music-player-controller-setting")[0]
      .click();
  }, []);

  var webCamera = useRef(null);

  return (
    <>
      <Sidebar />
      <div className="home">
        <div className="searchbar">
          <div className="searchbar__container">
            <input
              placeholder={"Search Music"}
              type="text"
              className="searchbar__input"
            />
            <FaSearch className="searchbar__icon" size={20} />
          </div>
        </div>

        <div className="explore-songs__container">
          <h4>Explore Happy Songs</h4>
          <div className="explore-songs__thumbnails-container">
            <div>
              <img src={img1} alt="" className="explore-songs__thumbnail" />
              <p className="song-name">Song 1</p>
            </div>
            <div>
              <img src={img2} alt="" className="explore-songs__thumbnail" />
              <p className="song-name">Song 2</p>
            </div>
            <div>
              <img src={img3} alt="" className="explore-songs__thumbnail" />
              <p className="song-name">Song 3</p>
            </div>
            <div>
              <img src={img4} alt="" className="explore-songs__thumbnail" />
              <p className="song-name">Song 4</p>
            </div>
            <div>
              <img src={img5} alt="" className="explore-songs__thumbnail" />
              <p className="song-name">Song 5</p>
            </div>
            <div>
              <img src={img6} alt="" className="explore-songs__thumbnail" />
              <p className="song-name">Song 6</p>
            </div>
            <div>
              <img src={img7} alt="" className="explore-songs__thumbnail" />
              <p className="song-name">Song 7</p>
            </div>
          </div>
        </div>

        <div className="mood__container">
          <h4>Songs based on your mood</h4>
          <div className="mood__interaction">
            <div className="mood__songs-list">
              <li className="mood__list-item"> song 1 </li>
              <li className="mood__list-item"> song 2</li>
              <li className="mood__list-item"> song 3</li>
              <li className="mood__list-item">song 4</li>
              <li className="mood__list-item">song 5</li>
            </div>
            <div className="mood__webcam">
              <Webcam
                videoConstraints={videoConstraints}
                className="webcam__camera"
                ref={webCamera}
              />
              <button className="webcam__button" onClick={()=> apiCall(webCamera.current.getScreenshot())}>
                Moodify
              </button>
            </div>
            <div className="mood__prediction">
              <div>
                <p>Current Mood</p>
                <p>😊</p>
                <p>Happy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
