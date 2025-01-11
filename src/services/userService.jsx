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

export const userService = {

    async getUsers() {
        try {
            const response = await API.get('/admin/users');
            return response.data;
        } catch (error) {
            console.error('Failed to fetch users:', error.response || error.message);
            throw error;
        }
    },
};