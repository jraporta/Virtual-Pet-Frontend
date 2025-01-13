import React from 'react';

const PetInfoPanel = ({ pet, className }) => {
    return (
        <div className={`pet-info-panel ${className}`}>
            <h2><strong>{pet.name}</strong></h2>
            <p><strong>Type:</strong> {pet.type}</p>
            <p><strong>Color:</strong> {pet.color}</p>   
            <div className="progress-bar">
                <label>Happiness:</label>
                    <div className="progress-track">
                        <div
                            className="progress-fill happiness"
                            style={{ width: `${pet.happiness}%` }}
                    ></div>
                </div>
            </div>
            <div className="progress-bar">
                <label>Energy:</label>
                <div className="progress-track">
                    <div
                        className="progress-fill hunger"
                        style={{ width: `${pet.hunger}%` }}
                    ></div>
                </div>
                </div>
            <p>State: {pet.state}</p>
        </div>
    );
};

export default PetInfoPanel;