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
        return ({colors: ['Aqua', 'Black', 'Blue', 'Fuchsia', 'Gray', 'Green', 'Lime', 'Maroon', 'navy', 'olive', 'purple', 'red', 'silver', 'teal', 'white', 'yellow' ]});
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

    async updatePet(payload) {
        try {
            const response = await API.put(
                '/api/pets',
                payload,
                { headers: { 'Content-Type': 'application/json' } }    
            );
            if (response.status === 200) {
                console.log('Updated pet: ', response.data);
                return this.mapToPet(response.data);
            } else {
                console.error('Error updating pet: ', response);
                throw new Error('Unexpected error occurred');
            }
        } catch (error) {
            console.error('Failed to update pet:', error.response || error.message);
            throw error;
        }
    },

    async getPets() {
        try {
            const response = await API.get('/api/pets');
            const pets = response.data.map(this.mapToPet);
            return pets;
        } catch (error) {
            console.error('Failed to fetch pets:', error.response || error.message);
            throw error;
        }
    },

    async getAllUsersPets() {
        try {
            const response = await API.get('/admin/pets');
            const pets = response.data.map(this.mapToPet);
            return pets;
        } catch (error) {
            console.error('Failed to fetch pets:', error.response || error.message);
            throw error;
        }
    },

    mapToPet(pet) {
        const states = [];

        if (pet.dead) states.push('dead');
        if (pet.asleep) states.push('asleep');
        if (pet.hasPoo) states.push('dirty');
        if (pet.energy < 20) states.push('hungry');
        if (!states.length) states.push(pet.state ?? 'healthy');

        return {
            ...pet,
            type: pet.species ?? 'unknown',
            hunger: pet.energy ?? 75,
            happiness: pet.happiness ?? 60,
            state: states.join(', '),
            color: pet.color ?? 'blue',
            image: getPetImage(pet.species),
        }
    },
};