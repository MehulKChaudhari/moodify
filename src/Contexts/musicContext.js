import { createContext, useState } from "react";

export const musicContext = createContext();

export function musicProvider({ children }) {
    const [arr, setArr] = useState([]);
    function apiCall (image=null){
        // axios.
    }
  return (
    <musicContext.Provider value={arr, setArr, apiCall}>
      {children}
    </musicContext.Provider>
  );
}


