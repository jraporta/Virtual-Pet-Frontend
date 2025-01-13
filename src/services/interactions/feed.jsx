import { petService } from "../petService";

export const feedPet = {

    async feedPet(pet, food) {
        
        if (!pet || !pet.id) {
            throw new Error('Pet data is invalid or missing.');
        }
        if (!food) {
            throw new Error('Food parameter is required to feed the pet.');
        }

        const payload = {
            id: pet.id,
            action: "FEED",
            food: food,
        }

        try {
            const updatedPet = await petService.updatePet(payload);
            console.log('Successfully fed pet:', updatedPet);
            return updatedPet;
        } catch (error) {
            console.error('Failed to feed Pet:', error.response || error.message);
            throw error;
        }
    },
}