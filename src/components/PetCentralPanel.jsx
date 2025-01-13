import React, { useState, useEffect } from "react";
import Background1 from "/assets/background/forest.webp";
import Background2 from "/assets/background/home.webp";
import Background3 from "/assets/background/playground.webp";
import PetInteractiveImage from "./PetInteractiveImage";
import { setLocation } from "../services/interactions/setLocation";
import "../styles/PetCentralPanel.css";

const PetCentralPanel = ({ pet, onPetUpdate }) => {
  const [background, setBackground] = useState(null);

  useEffect(() => {
    if (pet.location === "CAGE") setBackground(Background1);
    if (pet.location === "ROOM") setBackground(Background2);
    if (pet.location === "PARK") setBackground(Background3);
  }, [pet.location]);

  const handleLocationChange = (location) => {
    setLocation.set(pet, location)
      .then((updatedPet) => {
        onPetUpdate(updatedPet);
        console.log("Location has been updated to: ", location);
      })
      .catch((err) => console.error("Error updating location", err));
  };

  return (
    <div
      className="pet-canvas-container"
      style={{
        backgroundImage: `url(${background})`, // Dynamic background style
      }}
    >
      <PetInteractiveImage />

      <div className="bg-button-container">
        <button
          className="bg-button"
          onClick={() => handleLocationChange("CAGE")}
        >
          Go to the forest
        </button>
        <button
          className="bg-button"
          onClick={() => handleLocationChange("ROOM")}
        >
          Go home
        </button>
        <button
          className="bg-button"
          onClick={() => handleLocationChange("PARK")}
        >
          Go to the park
        </button>
      </div>
    </div>
  );
};

export default PetCentralPanel;
