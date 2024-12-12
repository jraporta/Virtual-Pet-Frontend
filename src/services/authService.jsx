import API from './api';

export const loginRequest = async (username, password) => {
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


export const registerRequest = async (username, password) => {
    try {
        const response = await API.post(
            '/api/register',
            {user: username, password: password},
            {headers: {'Content-Type': 'application/json' }}
        );
        return response.data.token;
    } catch (error) {
        console.error('Register failed:', error.response || error.message);
        throw error;
    }
}