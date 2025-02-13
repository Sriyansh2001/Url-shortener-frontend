import React, { createContext, useContext, useState } from "react";
import "./fireworkProvider.css";

// Create Context
const FireworksContext = createContext();

export const FireworksProvider = ({ children }) => {
  const [fireworks, setFireworks] = useState([]);

  const startFireworks = () => {
    const newFireworks = Array.from({ length: 30 }).map(() => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));
    setFireworks(newFireworks);
    setTimeout(() => setFireworks([]), 1000); // Stop after 1 second
  };

  return (
    <FireworksContext.Provider value={{ startFireworks }}>
      {children}
      {fireworks.map((fw) => (
        <div
          key={fw.id}
          className="firework"
          style={{ left: fw.x, top: fw.y }}
        />
      ))}
    </FireworksContext.Provider>
  );
};

// Custom hook for easy access
export const useFireworks = () => useContext(FireworksContext);
