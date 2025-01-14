import React from 'react';
import { petService } from '../services/petService';
import { useNavigate } from 'react-router-dom';
import PetInfo from './PetInfo';
import '../styles/PetList.css';

const PetList = ({ pets, onAddPetClick = null, onDeletePetClick, showAddCard = true }) => {
    const navigate = useNavigate();

    const handlePetClick = (pet) => {
        console.log('Pet clicked:', pet);
        navigate('/pet', { state: { pet } });
    };

    const handleDeletePet = async (pet) => {
        await petService.deletePet(pet);
        console.log('Pet deleted: ', pet.name, ' - ', pet.id);
        onDeletePetClick();
    };

    return (
        <div className="pet-list">
            <div className="pet-container">
                {pets.map((pet) => (
                    <div className="pet-card-container" key={pet.id}>
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
                            <div className="pet-info-panel-compact">
                                <PetInfo pet={pet} />
                            </div>
                        </button>
                        <button
                            className="delete-button"
                            onClick={() => handleDeletePet(pet)}
                        >
                            x
                        </button>
                    </div>
                ))}
                {/* Final blank card */}
                {showAddCard && (
                    <button className="pet-card add-pet-card" onClick={onAddPetClick}>
                        <div className="add-icon">+</div>
                        <p>Add a new pet</p>
                    </button>
                )}
            </div>
        </div>
    );
}

export default PetList;
