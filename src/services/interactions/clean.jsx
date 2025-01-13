import { petService } from "../petService";

export const cleanPet = {

    async clean(pet) {
        
        if (!pet || !pet.id) {
            throw new Error('Pet data is invalid or missing.');
        }

        const payload = {
            id: pet.id,
            action: "CLEAN",
        }

        try {
            const updatedPet = await petService.updatePet(payload);
            console.log('Successfully cleaned pet:', updatedPet);
            return updatedPet;
        } catch (error) {
            console.error('Failed to clean the Pet:', error.response || error.message);
            throw error;
        }
    },
}