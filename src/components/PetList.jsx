import React from 'react';

import { useNavigate } from 'react-router-dom';
import '../styles/PetList.css';

const PetList = ({ pets, onAddPetClick }) => {
    const navigate = useNavigate();

    const handlePetClick = (pet) => {
        console.log('Pet clicked:', pet);
        navigate('/pet', { state: { pet } });
    };

    return (
        <div className="pet-list">
            <div className="pet-container">
                {pets.map((pet) => (
                    <button
                        className="pet-card"
                        key={pet.id}
                        onClick={() => handlePetClick(pet)}
                    >
                        <img
                            src={pet.image}
                            alt={pet.name}
                            className="pet-image"
                        />
                        <h3>{pet.name}</h3>
                        <p>Type: {pet.type}</p>
                        <p>Color: {pet.color}</p>
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
                            <label>Hunger:</label>
                            <div className="progress-track">
                                <div
                                    className="progress-fill hunger"
                                    style={{ width: `${pet.hunger}%` }}
                                ></div>
                            </div>
                        </div>
                        <p>State: {pet.state}</p>
                    </button>
                ))}
                {/* Final blank card */}
                <button className="pet-card add-pet-card" onClick={onAddPetClick}>
                    <div className="add-icon">+</div>
                    <p>Add a new pet</p>
                </button>
            </div>
        </div>
    );
}

export default PetList;
