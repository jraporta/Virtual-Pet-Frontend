import React, { useState } from "react";
import PetInfo from "./PetInfo";
import PetInfoEdit from "./PetInfoEdit";

const PetInfoPanel = ({ pet, onPetUpdate }) => {
    const [editMode, setEditMode] = useState(false);

    const toggleEditMode = () => {
        setEditMode((prevMode) => !prevMode);
    };

    const handlePetUpdate = (updatedPet) => {
        toggleEditMode();
        onPetUpdate(updatedPet);
    };

    return (
        <div className="pet-info-panel-extended">
            {editMode ? (
                <>
                    <PetInfoEdit pet={pet} onPetUpdate={handlePetUpdate} />
                    <button
                        id="pet-edit-cancel-button"
                        onClick={toggleEditMode}
                    >
                        Cancel
                    </button>
                </>
            ) : (
                <>
                    <PetInfo pet={pet} />
                    <button
                        id="pet-edit-button"
                        onClick={toggleEditMode}
                    >
                        Edit
                    </button>
                </>
            )}
        </div>
    );
};

export default PetInfoPanel;