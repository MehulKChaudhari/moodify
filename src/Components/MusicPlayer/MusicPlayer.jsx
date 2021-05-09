import React, { useContext } from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import drunkenMonkey from "../../Assets/a.mp3";
import { musicContext } from '../../Contexts/musicContext'
export const MusicPlayer = () => {
  const [arr, setArr, apiCall] = useContext(musicContext);
  return (
    <div className="playbar w-100">
      <ReactJkMusicPlayer
        theme="dark"
        drag={false}
        showThemeSwitch={false}
        // toggleMode={false}
        audioLists={arr}
      />
    </div>
  );
};
