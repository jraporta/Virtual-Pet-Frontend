import React from 'react';

const PetInfoPanel = ({ pet }) => {
    return (
        <div className="pet-info-panel">
            <h2>About {pet.name}</h2>
            <p><strong>Name:</strong> {pet.name}</p>
            <p><strong>Age:</strong> {pet.age} years</p>
            <p><strong>Breed:</strong> {pet.breed}</p>
            <p><strong>Description:</strong> {pet.description}</p>
        </div>
    );
};

export default PetInfoPanel;