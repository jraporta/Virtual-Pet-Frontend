import React, { useEffect, useState } from 'react';
import { petService } from '../../services/petService';
import '../../styles/PetList.css';

function PetList() {
    const [pets, setPets] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchPets() {
            try {
                const data = await petService.getPets();
                setPets(data);
            } catch (err) {
                setError('Failed to load pets');
            }
        }
        fetchPets();
    }, []);

    return (
        <div className="pet-list">
            <h2>Pet List</h2>
            {error && <p className="error">{error}</p>}
            <div className="pet-container">
                {pets.map((pet) => (
                    <div className="pet-card" key={pet.id}>
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
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PetList;
