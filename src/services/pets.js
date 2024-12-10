
import API from './api';

export const getPets = () => API.get('/api/pets');
export const createPet = (pet) => API.post('/api/pets', pet);
export const updatePet = (id, pet) => API.put(`/api/pets/${id}`, pet);
export const deletePet = (id) => API.delete(`/api/pets/${id}`);
                