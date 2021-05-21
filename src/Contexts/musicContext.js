import { createContext, useContext, useState } from "react";
import { MoodContext } from "./moodContext";

import axios from "axios";

export const MusicContext = createContext();

export function MusicProvider({ children }) {
  const [arr, setArr] = useState([]);
  const [mood, setMood] = useContext(MoodContext);
  async function apiCall(image = null) {
    let response = await axios.post("http://localhost:8000/api/post-image/", {
      image: image,
    });
    let songs = response.data.songs;
    let resMood = response.data.mood;
    setArr(songs);
    setMood(resMood);
  }
  return (
    <MusicContext.Provider value={[arr, setArr, apiCall]}>
      {children}
    </MusicContext.Provider>
  );
}
