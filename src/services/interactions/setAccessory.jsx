import { petService } from "../petService";

export const setAccessory = {

    async set(pet, accessory) {
        
        if (!pet || !pet.id) {
            throw new Error('Pet data is invalid or missing.');
        }
        if (!accessory) {
            throw new Error('Acessory parameter is required to set the accessory.');
        }

        const payload = {
            id: pet.id,
            action: "ACCESSORY",
            accessory: accessory,
        }

        try {
            const updatedPet = await petService.updatePet(payload);
            console.log('Pet updated, accessory set successfully:', updatedPet);
            return updatedPet;
        } catch (error) {
            console.error('Failed to update Pet:', error.response || error.message);
            throw error;
        }
    },
}