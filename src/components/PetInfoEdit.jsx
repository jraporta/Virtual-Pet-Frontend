import React, { useState, useEffect } from "react";
import { setPetData } from "../services/interactions/setPetData";

const PetInfoEdit = ({ pet, onPetUpdate }) => {
    const [primaryColor, setPrimaryColor] = useState("#000000");
    const [secondaryColor, setSecondaryColor] = useState("#000000");
    const [editedData, setEditedData] = useState({});

    useEffect(() => {
        const validColor = pet.color.startsWith("#") ? pet.color : "#000000";
        setPrimaryColor(validColor);
        setSecondaryColor(validColor);
    }, [pet.color]);

    const handleInputChange = (value, field) => {
        setEditedData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const updatePetInfo = async () => {
        setPetData.set(pet, editedData)
            .then(updatedPet => {
                onPetUpdate(updatedPet);
                console.log('Pet data has been updated', editedData);
            })
            .catch(err => console.error('Error updating pet data'));
    };

    return (
        <div id="pet-info-edit-panel">
            <h2>
                <input
                    type="text"
                    className="pet-name-input"
                    value={editedData.name || pet.name}
                    onChange={(e) => handleInputChange(e.target.value, "name")}
                />
            </h2>
            <p><strong>Type:</strong> {pet.type}</p>
            <div className="color-picker-container">
                <label>
                    <strong>Primary color:</strong>
                    <input
                        type="color"
                        className="color-picker"
                        value={primaryColor}
                        onChange={(e) => {
                            const newColor = e.target.value;
                            setPrimaryColor(newColor);
                            handleInputChange(newColor, "color");
                        }}
                    />
                </label>
            </div>
            <div className="color-picker-container">
                <label>
                    <strong>Secondary color:</strong>
                    <input
                        type="color"
                        className="color-picker"
                        value={secondaryColor}
                        onChange={(e) => {
                            const newColor = e.target.value;
                            setSecondaryColor(newColor);
                            console.log("Secondary color update is not implemented.");
                        }}
                    />
                </label>
            </div>
            <button
                id ="pet-edit-save-button"
                onClick={updatePetInfo}
            >
                Save
            </button>
        </div>
    );
};

export default PetInfoEdit;