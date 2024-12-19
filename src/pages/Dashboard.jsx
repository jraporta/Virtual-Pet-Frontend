import React, { useState, useRef } from 'react';
import CreatePetForm from '../components/CreatePetForm/CreatePetForm';
import PetList from '../components/PetList';
import '../styles/Dashboard.css';

const Dashboard = () => {
    const [petFormIsVisible, setPetFormIsVisible] = useState(false);

    // Reference to PetList's fetchPets function
    const petListRef = useRef();

    const toggleFormVisibility = () => {
        setPetFormIsVisible((prev) => !prev);
    };

    const handleFormSubmit = () => {
        if (petListRef.current) {
            petListRef.current(); // Trigger fetchPets in PetList
        }
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
                <PetList
                    onShowForm={toggleFormVisibility}
                    ref={petListRef}
                />
            </div>
        </div>
    );
};

export default Dashboard;
