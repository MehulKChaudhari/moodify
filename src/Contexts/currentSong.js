import { createContext, useState } from "react";

export const CurrentSongContext = createContext();

export function CurrentSongProvider({ children }) {
  const [currSong, setCurrSong] = useState([]);

  return (
    <CurrentSongContext.Provider value={[currSong, setCurrSong]}>
      {children}
    </CurrentSongContext.Provider>
  );
}
