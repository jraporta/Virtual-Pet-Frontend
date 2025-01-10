import React, { useState, useEffect } from 'react';
import CreatePetForm from '../components/CreatePetForm/CreatePetForm';
import PetList from '../components/PetList';
import { petService } from '../services/petService';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();
    const [petFormIsVisible, setPetFormIsVisible] = useState(false);
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

    useEffect(() => {
        fetchPets();
    }, []);

    const toggleFormVisibility = () => {
        setPetFormIsVisible((prev) => !prev);
    };

    const handleFormSubmit = () => {
        console.log('Updating pet list after adding new pet.');
        fetchPets();
    };

    return (
        <div className="dashboard">
            <div className="header">
                <h1>Here are your pets:</h1>
            </div>
            {petFormIsVisible && (
                <div className="popup-overlay">
                    <div className="popup">
                        <button className="close-popup-button" onClick={toggleFormVisibility}>
                            ×
                        </button>
                        <CreatePetForm onFormSubmit={handleFormSubmit} />
                    </div>
                </div>
            )}

            <div>
                {error && <p className="error">{error}</p>}
                <PetList
                    pets={pets}
                    onAddPetClick={toggleFormVisibility}
                />
            </div>
        </div>
    );
};

export default Dashboard;
