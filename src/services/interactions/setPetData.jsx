import { petService } from "../petService";

export const setPetData = {

    async set(pet, petData) {
        
        if (!pet || !pet.id) {
            throw new Error('Pet data is invalid or missing.');
        }
        if (!petData) {
            throw new Error('Pet data is required to update pet data.');
        }

        const payload = {
            ...petData,
            id: pet.id,
            action: "DATA",
        }

        try {
            const updatedPet = await petService.updatePet(payload);
            console.log('Pet updated, new data set successfully:', updatedPet);
            return updatedPet;
        } catch (error) {
            console.error('Failed to update Pet:', error.response || error.message);
            throw error;
        }
    },
}