import { petService } from "../petService";

export const setLocation = {

    async set(pet, location) {
        
        if (!pet || !pet.id) {
            throw new Error('Pet data is invalid or missing.');
        }
        if (!location) {
            throw new Error('Location parameter is required to set the location.');
        }

        const payload = {
            id: pet.id,
            action: "LOCATION",
            location: location,
        }

        try {
            const updatedPet = await petService.updatePet(payload);
            console.log('Pet updated, location set successfully:', updatedPet);
            return updatedPet;
        } catch (error) {
            console.error('Failed to update Pet:', error.response || error.message);
            throw error;
        }
    },
}