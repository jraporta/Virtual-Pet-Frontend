import React, { useState, useEffect } from 'react';
import UserList from '../components/UserList';
import { userService } from '../services/userService';
import '../styles/Dashboard.css';

const ShowUsers = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    async function fetchUsers() {
        try {
            const data = await userService.getUsers();
            setUsers(data);
            console.log('User list updated from DB.');
        } catch (err) {
            console.error('Error loading users:' + err)
            setError('Failed to load users');
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="dashboard">
            <div className="header">
                <h1>User list:</h1>
            </div>
            <div>
                {error && <p className="error">{error}</p>}
                <UserList
                    users={users}
                />
            </div>
        </div>
    );
};

export default ShowUsers;
