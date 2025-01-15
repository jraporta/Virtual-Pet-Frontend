import React from "react";
import CatSVG from '../../public/assets/svg/cat.svg?react';
import DogSVG from '../../public/assets/svg/dog.svg?react';
import HamsterSVG from '../../public/assets/svg/hamster.svg?react';
import SpeechBubleSVG from '../../public/assets/svg/speech_buble.svg?react';
import '../styles/PetSVG.css';


const petSVGMap = {
  CAT: CatSVG,
  DOG: DogSVG,
  HAMSTER: HamsterSVG,
};

const PetInteractiveImage = ({ petType, primaryColor = "salmon", secondaryColor = "gray" }) => {
  const SelectedPetSVG = petSVGMap[petType] || null;

  return (

    <div className="pet-svg-container">
      {SelectedPetSVG ? (
        <SelectedPetSVG
        id="pet-SVG" 
        style={{
          '--primary-color': primaryColor,
          '--secondary-color': secondaryColor,
          color: primaryColor
        }} />
      ) : (
        <p>Pet type not recognized!</p>
      )}
      <SpeechBubleSVG id="speech-buble"/>
    </div>

  );
};

export default PetInteractiveImage;
