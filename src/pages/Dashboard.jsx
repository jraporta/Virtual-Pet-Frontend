import React, { useState } from 'react';
import CreatePetForm from '../components/CreatePetForm/CreatePetForm';
import PetList from '../components/PetList';
import '../styles/Dashboard.css';

const Dashboard = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleFormVisibility = () => {
        setIsVisible((prev) => !prev);
    };

    return (
        <div className="dashboard">
            <div className="header">
                <h1>Here are your pets:</h1>
                {!isVisible && (
                    <button
                        className={`toggle-form-button ${isVisible ? 'close' : 'open'}`}
                        onClick={toggleFormVisibility}
                    >
                        +
                    </button>
                )}
            </div>

            {isVisible && (
                <div className="popup-overlay">
                    <div className="popup">
                        <button className="close-popup-button" onClick={toggleFormVisibility}>
                            ×
                        </button>
                        <CreatePetForm />
                    </div>
                </div>
            )}

            <div>
                <PetList />
            </div>
        </div>
    );
};

export default Dashboard;
