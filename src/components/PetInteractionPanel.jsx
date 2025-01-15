import React, { useState, useEffect } from "react";
import { feedPet } from "../services/interactions/feed";
import { playWithPet } from "../services/interactions/play";
import { cleanPet } from "../services/interactions/clean";
import { setAccessory } from "../services/interactions/setAccessory";
import FoodSelector from "./FoodSelector";

const PetInteractionPanel = ({ pet, onPetUpdate }) => {
    const [tongueLayer, setTongueLayer] = useState(null);
    const [glassesLayer, setGlassesLayer] = useState(null);
    const [capLayer, setCapLayer] = useState(null);
    const [pooLayer, setPooLayer] = useState(null);

    useEffect(() => {
        setTongueLayer(document.getElementById("tongue"));
        setGlassesLayer(document.getElementById("glasses"));
        setCapLayer(document.getElementById("cap"));
        setPooLayer(document.getElementById("poo"));
    }, []);

    useEffect(() => {
        if (glassesLayer && pet.accessories.includes("SUNGLASSES")) {
            glassesLayer.style.display = "inline";
        } else if (glassesLayer && !pet.accessories.includes("SUNGLASSES")) {
            glassesLayer.style.display = "none";
        }
        if (capLayer && pet.accessories.includes("CAP")) {
            capLayer.style.display = "inline";
        } else if (capLayer && !pet.accessories.includes("CAP")) {
            capLayer.style.display = "none";
        }
        if (pooLayer && pet.hasPoo) {
            pooLayer.style.display = "inline";
        } else if (pooLayer && !pet.hasPoo) {
            pooLayer.style.display = "none";
        }
    }, [glassesLayer, capLayer, pooLayer, pet]);

    const handleFeed = async (food) => {
        feedPet.feedPet(pet, food)
        .then(updatedPet => {
            onPetUpdate(updatedPet);
            console.log('Pet has been fed', food);
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

    const handleToggleGlasses = () => {
        setAccessoryOfPet(pet, 'SUNGLASSES');
    };

    const handleToggleCap = () => {
        setAccessoryOfPet(pet, 'CAP');
    };

    return (
        <div className="pet-interaction-panel">
            <FoodSelector onFoodSelect={handleFeed} />
            <button onClick={handlePlay}>Play</button>
            <button onClick={handleClean}>Clean</button>
            <button onClick={() => handleToggleTongue()}>Toggle Tongue</button>
            <button onClick={() => handleToggleGlasses()}>Toggle Glasses</button>
            <button onClick={() => handleToggleCap()}>Toggle Cap</button>
        </div>
    );
};

export default PetInteractionPanel;
