import React, { useState, useEffect } from "react";
import PetSVG from '../../public/assets/svg/cat.svg?react';
import Background1 from '/assets/background/forest.webp';
import Background2 from '/assets/background/home.webp';
import Background3 from '/assets/background/playground.webp';
import '../styles/PetSVG.css';

const PetCanvas = () => {
  const [background, setBackground] = useState(Background1);

  const changeBackground = (bg) => setBackground(bg);

  return (
    <div
      className="pet-container"
      style={{
        position: "relative",
        width: "500px",
        height: "500px",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
      {/* Pet Image */}
      <PetSVG />
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <button onClick={() => changeBackground(Background2)}>
          Change Background
        </button>
        <button onClick={() => setPetState("playing")}>Play</button>
        <button onClick={() => updateAccessory("hat", "hat1.png")}>
          Add Hat
        </button>
        <button onClick={() => updateAccessory("glasses", "glasses1.png")}>
          Add Glasses
        </button>
      </div>
    </div>
  );
};

export default PetCanvas;
