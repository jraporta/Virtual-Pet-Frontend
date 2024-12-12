import React from 'react';
import CreatePetForm from '../components/CreatePetForm/CreatePetForm';

const Dashboard = () => {

    return (
        <div>
            <h1>Here are your pets:</h1>
            <div>
                <CreatePetForm />
            </div>
        </div>
    );
};

export default Dashboard;
