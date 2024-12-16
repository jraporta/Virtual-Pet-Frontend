import API from "./api";

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

    mockPet(pet) {
        return {
            ...pet,
            type: pet.type ?? 'hamster',
            hunger: pet.hunger ?? 75,
            happiness: pet.happiness ?? 60,
            state: pet.state ?? 'idle',
            color: pet.color ?? 'blue',
            image: pet.image ?? 'data:image/jpeg;base64,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',
        }
    },
};