import React from "react";
import PetSVG from '../../public/assets/svg/cat.svg?react';
import '../styles/PetSVG.css';

const PetInteractiveImage = () => {

  return (
    
    <div className="pet-svg-container">
      <PetSVG />
    </div>
      
  );
};

export default PetInteractiveImage;
