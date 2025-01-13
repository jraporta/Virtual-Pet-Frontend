import { petService } from "../petService";

export const playWithPet = {

    async play(pet) {
        
        if (!pet || !pet.id) {
            throw new Error('Pet data is invalid or missing.');
        }

        const payload = {
            id: pet.id,
            action: "PLAY",
        }

        try {
            const updatedPet = await petService.updatePet(payload);
            console.log('Successfully played with pet:', updatedPet);
            return updatedPet;
        } catch (error) {
            console.error('Failed to play with Pet:', error.response || error.message);
            throw error;
        }
    },
}