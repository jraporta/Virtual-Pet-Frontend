import React, { useState, useEffect } from "react";
import { feedPet } from "../services/interactions/feed";
import { playWithPet } from "../services/interactions/play";
import { cleanPet } from "../services/interactions/clean";
import { setAccessory } from "../services/interactions/setAccessory";

const PetInteractionPanel = ({ pet, onPetUpdate }) => {
    const [color, setColor] = useState("");
    const [tongueLayer, setTongueLayer] = useState(null);
    const [glassesLayer, setGlassesLayer] = useState(null);
    const [capLayer, setCapLayer] = useState(null);

    useEffect(() => {
        setTongueLayer(document.getElementById("tongue"));
        setGlassesLayer(document.getElementById("glasses"));
        setCapLayer(document.getElementById("cap"));
    }, []);

    useEffect(() => {
        if (glassesLayer && pet.accessories.includes("SUNGLASSES")) {
            toggleGlassesView();
        }
        if (capLayer && pet.accessories.includes("CAP")) {
            toggleCapView();
        }
    }, [glassesLayer, capLayer]);

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

    const handleClean = async () => {
        cleanPet.clean(pet)
        .then(updatedPet => {
            onPetUpdate(updatedPet);
            console.log('The pet is very clean');
        })
        .catch(err => console.error('Error cleaning the pet'));
    };

    const handleGroom = () => alert("Grooming the pet!");

    const handleToggleTongue = () => {
        tongueLayer.style.opacity = tongueLayer.style.opacity === "1" ? "0" : "1";
    };

    const setAccessoryOfPet = (pet, accessory) => {
        setAccessory.set(pet, accessory)
        .then(updatedPet => {
            onPetUpdate(updatedPet);
            console.log('Accessory updated: ', accessory);
        })
        .catch(err => console.error('Error updating accessory: ', accessory));
    }

    const toggleGlassesView = () => {
        glassesLayer.style.display = glassesLayer.style.display === "none" ? "inline" : "none";
    }

    const toggleCapView = () => {
        capLayer.style.display = capLayer.style.display === "none" ? "inline" : "none";
    }

    const handleToggleGlasses = () => {
        setAccessoryOfPet(pet, 'SUNGLASSES');
        toggleGlassesView();
    };

    const handleToggleCap = () => {
        setAccessoryOfPet(pet, 'CAP');
        toggleCapView();
    };

    return (
        <div className="pet-interaction-panel">
            <h2>Interact with the Pet</h2>
            <button onClick={() => handleFeed('BREAD')}>Give Bread</button>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handleClean}>Clean</button>
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
