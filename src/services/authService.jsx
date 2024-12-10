import API from './api';

export const login = async (username, password) => {
    try {
        const response = await API.post(
            '/api/login',
            {user: username, password: password},
            {headers: {'Content-Type': 'application/json' }}
        );
        return response.data.token;
    } catch (error) {
        console.error('Login failed:', error.response || error.message);
        throw error;
    }
}