import React from "react";
import CatSVG from '../../public/assets/svg/cat.svg?react';
import DogSVG from '../../public/assets/svg/dog.svg?react';
import HamsterSVG from '../../public/assets/svg/hamster.svg?react';
import '../styles/PetSVG.css';


const petSVGMap = {
  CAT: CatSVG,
  DOG: DogSVG,
  HAMSTER: HamsterSVG,
};

const PetInteractiveImage = ({ petType }) => {
  const SelectedPetSVG = petSVGMap[petType] || null;

  return (

    <div className="pet-svg-container">
      {SelectedPetSVG ? (
        <SelectedPetSVG />
      ) : (
        <p>Pet type not recognized!</p>
      )}
    </div>

  );
};

export default PetInteractiveImage;
