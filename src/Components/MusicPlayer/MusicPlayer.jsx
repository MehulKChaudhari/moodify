import React from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import drunkenMonkey from "../../Assets/a.mp3";

export const MusicPlayer = () => {
  return (
    <div className="playbar w-100">
      <ReactJkMusicPlayer
        theme="dark"
        drag={false}
        showThemeSwitch={false}
        audioLists={[{ musicSrc: drunkenMonkey }]}
      />
    </div>
  );
};
