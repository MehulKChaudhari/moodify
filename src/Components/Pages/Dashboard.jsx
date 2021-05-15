import React, { useContext, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import Webcam from "react-webcam";
import { Sidebar } from "../Sidebar/Sidebar";
import { MusicContext } from "../../Contexts/musicContext";
import { MoodContext } from "../../Contexts/moodContext";
import { CurrentSongContext } from "../../Contexts/currentSong";
import { AudioInsContext } from "../../Contexts/audioIns";

export const Dashboard = () => {
  const [arr, setArr, apiCall] = useContext(MusicContext);
  const [mood, setMood] = useContext(MoodContext);
  const [currSong, setCurrSong] = useContext(CurrentSongContext);
  const [audioIns, setAudioIns] = useContext(AudioInsContext);

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
            {arr.map((song, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setCurrSong([...[song]]);
                    audioIns.playByIndex(index);
                  }}
                  className="song"
                >
                  <img
                    src={song.cover}
                    alt={song.name}
                    className="explore-songs__thumbnail"
                  />
                  <p className="song-name">{song.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mood__container">
          <h4>Songs based on your mood</h4>
          <div className="mood__interaction">
            <div className="mood__songs-list">
              {arr.map((song, index) => {
                return (
                  <li
                    key={index}
                    className="mood__list-item"
                    onClick={() => {
                      setCurrSong([...[song]]);
                      audioIns.playByIndex(index);
                    }}
                  >
                    {song.name}
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
                onClick={() => apiCall(webCamera.current.getScreenshot())}
              >
                Moodify
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
