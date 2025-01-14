import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import PetInfoPanel from "../components/PetInfoPanel";
import PetInteractionPanel from "../components/PetInteractionPanel";
import PetCentralPanel from "../components/PetCentralPanel";
import '../styles/PetPage.css';

const Pet = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [pet, setPet] = useState(location.state?.pet);


    useEffect(() => {
        if (!pet) {
            navigate('/dashboard');
        }
    }, [pet, navigate]);

    const handlePetUpdate = (updatedPet) => {
        setPet(updatedPet);
    };
    
    if (!pet) {
        return null;
    }

    return (
        <div className="pet-page">
            <h1 className="pet-page-title">Take Care of Your Pet!</h1>
            <button className="pet-page-back-button" onClick={() => navigate(-1)}>Return</button>
            <div className="pet-page-content">
                <PetInfoPanel pet={pet} onPetUpdate={handlePetUpdate}/>
                <PetCentralPanel pet={pet} onPetUpdate={handlePetUpdate}/>
                <PetInteractionPanel pet={pet} onPetUpdate={handlePetUpdate}/>
            </div>
        </div>
    );
};

export default Pet;
