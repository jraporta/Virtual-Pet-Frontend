import API from "./api";

export const petService = {

    /*
    async getCharacteristics() {
        try {
            const response = await API.get(
                '/api/enums'
            );
            return response.json();
        } catch (error) {
            console.error('Failed to get characteristics:', error.response || error.message);
            throw error;
        }
    },
    */

    async getCharacteristics() {
        return ({types: ['Dog', 'Cat', 'Hamster'], colors: ['red', 'green', 'blue']});
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
};