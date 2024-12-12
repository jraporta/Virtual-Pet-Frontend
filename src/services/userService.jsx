import API from './api';

export const userDataRequest = async (username) => {
    try {
        const response = await API.get(
            '/api/users/' + username,
        );
        return response.data;
    } catch (error) {
        console.error('User data fetch failed:', error.response || error.message);
        throw error;
    }
}