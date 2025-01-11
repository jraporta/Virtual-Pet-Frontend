import API from "./api";
import { getPetImage } from "./getPetImage";


export const petService = {


    async getValidPetTypes() {
        try {
            const response = await API.get(
                '/api/metadata/pet-types'
            );
            return response.data;
        } catch (error) {
            console.error('Failed to get characteristics:', error.response || error.message);
            throw error;
        }
    },

    async getValidColors() {
        return ({colors: ['BROWN', 'YELLOW', 'TURQUOISE']});
    },

    async registerPet(petData) {
        try {
            const response = await API.post(
                '/api/pets',
                petData,
                { headers: { 'Content-Type': 'application/json' } }    
            );

            if (response.status === 201) {
                console.log('Created pet with id: ', response);
                return petData;
            }else if (response.status === 400) {
                throw new Error('Invalid data provided');
            } else if (response.status === 500) {
                throw new Error('Server error occurred');
            } else {
                throw new Error('Unexpected error occurred');
            }
            
        } catch (error) {
            console.error('Failed to register pet:', error.response || error.message);
            throw error;
        }
    },

    async deletePet(pet) {
        try {
            const response = await API.delete('/api/pets/' + pet.id);
            if (response.status === 204) {
                console.log('Pet deleted');
            } else {
                console.error(response.data.message);
            }
        } catch (error) {
            console.error('Failed to delete pet:', error.response || error.message);
            throw error;
        }
    },

    async getPets() {
        try {
            const response = await API.get('/api/pets');
            const pets = response.data.map(this.mockPet);
            return pets;
        } catch (error) {
            console.error('Failed to fetch pets:', error.response || error.message);
            throw error;
        }
    },

    async getAllUsersPets() {
        try {
            const response = await API.get('/admin/pets');
            const pets = response.data.map(this.mockPet);
            return pets;
        } catch (error) {
            console.error('Failed to fetch pets:', error.response || error.message);
            throw error;
        }
    },

    mockPet(pet) {
        const states = [];

        if (pet.dead) states.push('dead');
        if (pet.asleep) states.push('asleep');
        if (pet.hasPoo) states.push('dirty');
        if (pet.energy < 20) states.push('hungry');
        if (!states.length) states.push(pet.state ?? 'healthy');

        return {
            ...pet,
            type: pet.species ?? 'unknown',
            energy: pet.energy ?? 75,
            happiness: pet.happiness ?? 60,
            state: states.join(', '),
            color: pet.color ?? 'blue',
            image: getPetImage(pet.species),
        }
    },
};