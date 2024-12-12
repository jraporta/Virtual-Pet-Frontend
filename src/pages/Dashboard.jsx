import React from 'react';
import CreatePetForm from '../components/CreatePetForm/CreatePetForm';
import PetList from '../components/PetList/PetList';

const Dashboard = () => {

    return (
        <div>
            <h1>Here are your pets:</h1>
            <div>
                <CreatePetForm />
            </div>
            <div>
                <PetList />
            </div>
        </div>
    );
};

export default Dashboard;
