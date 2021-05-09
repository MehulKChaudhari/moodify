import { createContext, useState } from "react";

export const MusicContext = createContext();

export function MusicProvider({ children }) {
    const [arr , setArr] = useState([]);
    function apiCall(image = null) {
        // axios.
    }
  return (
    <MusicContext.Provider value={(arr, setArr, apiCall)}>
      {children}
    </MusicContext.Provider>
  );
}
