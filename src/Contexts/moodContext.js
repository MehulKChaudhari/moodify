import { createContext, useState } from "react";

export const MoodContext = createContext();

export function MoodProvider({ children }) {
  const [mood, setMood] = useState("Loading");

  return (
    <MoodContext.Provider value={[mood, setMood]}>
      {children}
    </MoodContext.Provider>
  );
}
