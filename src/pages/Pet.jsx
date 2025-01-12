import React, { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import PetInfoPanel from "../components/PetInfoPanel";
import PetInteractionPanel from "../components/PetInteractionPanel";
import PetCanvas from "../components/PetCanvas";
import '../styles/PetPage.css';

const Pet = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const pet = location.state?.pet;

    useEffect(() => {
        if (!pet) {
            navigate('/dashboard');
        }
    }, [pet, navigate]);
    
    if (!pet) {
        return null;
    }

    return (
        <div className="pet-page">
            <h1 className="pet-page-title">Take Care of Your Pet!</h1>
            <button className="pet-page-back-button" onClick={() => navigate(-1)}>Return</button>
            <div className="pet-page-content">
                <PetInfoPanel pet={pet} />
                <PetCanvas pet={pet} />
                <PetInteractionPanel pet={pet} />
            </div>
        </div>
    );
};

export default Pet;
