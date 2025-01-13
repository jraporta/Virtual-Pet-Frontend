import React, { useState, useEffect } from "react";
import Background1 from '/assets/background/forest.webp';
import Background2 from '/assets/background/home.webp';
import Background3 from '/assets/background/playground.webp';
import PetInteractiveImage from "./PetInteractiveImage";
import '../styles/PetCentralPanel.css';

const PetCentralPanel = () => {
  const [background, setBackground] = useState(Background1);

  const changeBackground = (bg) => setBackground(bg);

  return (
    <div
      className="pet-canvas-container"
      style={{
        backgroundImage: `url(${background})`, // Dynamic background style
      }}
    >
      
      <PetInteractiveImage />
      
      <div className="bg-button-container">
        <button className="bg-button" onClick={() => changeBackground(Background1)}>Go to the forest</button>
        <button className="bg-button" onClick={() => changeBackground(Background2)}>Go home</button>
        <button className="bg-button" onClick={() => changeBackground(Background3)}>Go to the park</button>
      </div>
    </div>
  );
};

export default PetCentralPanel;
