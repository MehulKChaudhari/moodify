import { createContext, useState } from "react";

export const AudioInsContext = createContext();

export function AudioInsProvider({ children }) {
  const [audioIns, setAudioIns] = useState(null);

  return (
    <AudioInsContext.Provider value={[audioIns, setAudioIns]}>
      {children}
    </AudioInsContext.Provider>
  );
}
