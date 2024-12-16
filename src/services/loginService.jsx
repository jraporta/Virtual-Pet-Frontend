import { userDataRequest } from "./userService";

export const login = async (navigate, username, token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username)
    try {
        updateUserData(username);
        navigate('/dashboard');
    } catch (error) {
        navigate('/notfound');
    }
}

export const logout = async (navigate) => {
    localStorage.clear();
    // Trigger re-check of admin role in AdminMenu
    window.dispatchEvent(new Event('storage'));
    navigate('/');
}

export const updateUserData = async (username) => {
    const data = await userDataRequest(username);
    localStorage.setItem('id', data.id);
    localStorage.setItem('role', data.role);
    localStorage.setItem('pets', data.pets);
    // Trigger re-check of admin role in AdminMenu
    window.dispatchEvent(new Event('storage'));
}