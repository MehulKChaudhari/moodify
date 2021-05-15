import React, { useContext } from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import { AudioInsContext } from "../../Contexts/audioIns";
import { CurrentSongContext } from "../../Contexts/currentSong";

export const MusicPlayer = () => {
  const [currSong, setCurrSong] = useContext(CurrentSongContext);
  const [audioIns, setAudioIns] = useContext(AudioInsContext);
  return (
    <div className="playbar w-100">
      <ReactJkMusicPlayer
        theme="dark"
        drag={false}
        showThemeSwitch={false}
        audioLists={currSong}
        getAudioInstance={(instance) => {
          setAudioIns(instance);
        }}
      />
    </div>
  );
};
