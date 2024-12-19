import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { petService } from '../services/petService';
import { useNavigate } from 'react-router-dom';
import '../styles/PetList.css';

const PetList = forwardRef((props, ref) => {
    const navigate = useNavigate();
    const [pets, setPets] = useState([]);
    const [error, setError] = useState('');

    async function fetchPets() {
        try {
            const data = await petService.getPets();
            setPets(data);
        } catch (err) {
            setError('Failed to load pets');
        }
    }

    // Expose fetchPets to parent component through ref
    useImperativeHandle(ref, () => ({
        fetchPets,
    }));

    useEffect(() => {
        fetchPets();
    }, []);

    const handlePetClick = (pet) => {
        console.log('Pet clicked:', pet);
        setActivePet(pet);
        navigate('/pet', { state: { pet } });
    };

    return (
        <div className="pet-list">
            {error && <p className="error">{error}</p>}
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
                <button className="pet-card add-pet-card" onClick={props.onShowForm}>
                    <div className="add-icon">+</div>
                    <p>Add a new pet</p>
                </button>
            </div>
        </div>
    );
});

export default PetList;
