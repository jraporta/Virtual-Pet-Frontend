import React, { useState, useEffect } from 'react';
import PetList from '../components/PetList';
import { petService } from '../services/petService';
import '../styles/Dashboard.css';

const AdminPetsDashboard = () => {
    const [pets, setPets] = useState([]);
    const [error, setError] = useState('');

    async function fetchPets() {
        try {
            const data = await petService.getAllUsersPets();
            setPets(data);
            console.log('Pet list updated from DB.');
        } catch (err) {
            console.error('Error loading pets:' + err)
            setError('Failed to load pets');
        }
    }

    useEffect(() => {
        fetchPets();
    }, []);


    return (
        <div className="dashboard">
            <div className="header">
                <h1>All Users Pets:</h1>
            </div>
            <div>
                {error && <p className="error">{error}</p>}
                <PetList
                    pets={pets}
                    showAddCard={false}
                    onDeletePetClick={fetchPets}
                />
            </div>
        </div>
    );
};

export default AdminPetsDashboard;
