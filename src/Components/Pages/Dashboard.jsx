import React, { useContext, useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Webcam from "react-webcam";
import { Sidebar } from "../Sidebar/Sidebar";
import { MusicContext } from "../../Contexts/musicContext";
import { MoodContext } from "../../Contexts/moodContext";
import { CurrentSongContext } from "../../Contexts/currentSong";
import { AudioInsContext } from "../../Contexts/audioIns";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { useThree } from "@react-three/fiber";

export const Dashboard = () => {
  const [arr, setArr, apiCall] = useContext(MusicContext);
  const [mood, setMood] = useContext(MoodContext);
  const [currSong, setCurrSong] = useContext(CurrentSongContext);
  const [audioIns, setAudioIns] = useContext(AudioInsContext);
  const [BtnTxt, setBtnTxt] = useState("Moodify");
  const [currSlice, setSlice] = useState(0);

  const videoConstraints = {
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
  const RenderedArrayHandlerDec = () => {
    setSlice((prev) => prev - 1);
  };
  const RenderedArrayHandlerInc = () => {
    setSlice((prev) => prev + 1);
  };

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
          <h4>Explore {mood} Songs</h4>
          <div className="explore-songs__thumbnails-container">
            <div className="explore-songs__thumbnail arrow-button">
              <IoIosArrowDropleft onClick={RenderedArrayHandlerDec} />
            </div>
            {arr.slice(currSlice, currSlice + 6).map((song, index) => {
              var nn = song.name.slice(0, 13);
              return (
                <div
                  key={index}
                  onClick={() => {
                    setCurrSong([[song]]);
                    console.log(currSong);
                    audioIns.playByIndex(0);
                  }}
                  className="song"
                >
                  <img
                    src={song.cover}
                    alt={song.name.slice(0, 9)}
                    className="explore-songs__thumbnail"
                  />
                  <p className="song-name">{nn}</p>
                </div>
              );
            })}
            <div className="explore-songs__thumbnail arrow-button">
              <IoIosArrowDropright onClick={RenderedArrayHandlerInc} />
            </div>
          </div>
        </div>

        <div className="mood__container">
          <h4>Songs based on your mood</h4>
          <div className="mood__interaction">
            <div className="mood__songs-list">
              {arr.map((song, index) => {
                var nn = song.name.slice(0, 13);
                return (
                  <li
                    key={index}
                    className="mood__list-item"
                    onClick={() => {
                      setCurrSong([song]);
                      audioIns.playByIndex(0);
                    }}
                  >
                    {nn}
                  </li>
                );
              })}
            </div>
            <div className="mood__webcam">
              <Webcam
                videoConstraints={videoConstraints}
                className="webcam__camera"
                mirrored={true}
                ref={webCamera}
              />
              <button
                className="webcam__button"
                onClick={async () => {
                  setBtnTxt("Loading");
                  await apiCall(webCamera.current.getScreenshot());
                  setBtnTxt("Moodify");
                }}
              >
                {BtnTxt}
              </button>
            </div>
            <div className="mood__prediction">
              <div>
                <p>Current Mood</p>
                <p>😊</p>
                <p>{mood}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
