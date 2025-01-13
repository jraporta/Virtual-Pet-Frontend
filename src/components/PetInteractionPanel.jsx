import React, { useState, useEffect } from "react";
import { feedPet } from "../services/interactions/feed";
import { playWithPet } from "../services/interactions/play";

const PetInteractionPanel = ({ pet, onPetUpdate }) => {
    const [color, setColor] = useState("");

    useEffect(() => {
        const tongue = document.getElementById("tongue");
        const glasses = document.getElementById("glasses");
        const cap = document.getElementById("cap");
    }, []);

    const handleFeed = async (food) => {
        feedPet.feedPet(pet, food)
        .then(updatedPet => {
            onPetUpdate(updatedPet);
            console.log('Pet was feeded');
        })
        .catch(err => console.error('Error feeding pet'));
    };

    const handlePlay = async () => {
        playWithPet.play(pet)
        .then(updatedPet => {
            onPetUpdate(updatedPet);
            console.log('Played with pet');
        })
        .catch(err => console.error('Error playing with pet'));
    };

    const handleGroom = () => alert("Grooming the pet!");

    const handleToggleTongue = () => {
        tongue.style.opacity = tongue.style.opacity === "1" ? "0" : "1";
    };

    const handleToggleGlasses = () => {
        glasses.style.display =
            glasses.style.display === "none" ? "inline" : "none";
    };

    const handleToggleCap = () => {
        cap.style.display = cap.style.display === "none" ? "inline" : "none";
    };

    return (
        <div className="pet-interaction-panel">
            <h2>Interact with the Pet</h2>
            <button onClick={() => handleFeed('BREAD')}>Give Bread</button>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handleGroom}>Groom</button>
            <button onClick={() => handleToggleTongue()}>Toggle Tongue</button>
            <button onClick={() => handleToggleGlasses()}>Toggle Glasses</button>
            <button onClick={() => handleToggleCap()}>Toggle Cap</button>
            <label>
                Change Pet Color:
                <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
            </label>
        </div>
    );
};

export default PetInteractionPanel;
