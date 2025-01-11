import React, { useState } from 'react';
import '../styles/UserList.css';

const UserList = ({ users }) => {
    const [editingUserId, setEditingUserId] = useState(null);
    const [editedUser, setEditedUser] = useState({});

    const handleEditClick = (user) => {
        setEditingUserId(user.id);
        setEditedUser(user);
    };

    const handleInputChange = (e, field) => {
        setEditedUser({
            ...editedUser,
            [field]: e.target.value,
        });
    };

    const handleSaveUser = async () => {
        // Call your save user logic here
        console.log('User saved:', editedUser);
        setEditingUserId(null);
    };
    
    const handleDeleteUser = async (user) => {
        // await userService.editUser(user);
        console.log('User deleted: ', user.name, '-', user.id);
    };

    return (
        <div className="user-list">
            <div className="user-list-header">
                <div>Name</div>
                <div>Id</div>
                <div>Role</div>
                <div>Actions</div>
            </div>
            {users.map((user) => (
                <div className="user-list-row" key={user.id}>
                    {editingUserId === user.id ? (
                        <>
                            <input
                                type="text"
                                value={editedUser.name || ''}
                                onChange={(e) => handleInputChange(e, 'name')}
                                className="input-name"
                            />
                            <input
                                type="text"
                                value={editedUser.id || ''}
                                onChange={(e) => handleInputChange(e, 'id')}
                                disabled // Keep the ID static
                                className="input-id"
                            />
                            <select
                                value={editedUser.role || ''}
                                onChange={(e) => handleInputChange(e, 'role')}
                                className="input-role"
                            >
                                <option value="ADMIN">ADMIN</option>
                                <option value="USER">USER</option>
                            </select>
                        </>
                    ) : (
                        <>
                            <div>{user.name}</div>
                            <div>{user.id}</div>
                            <div>{user.role}</div>
                        </>
                    )}
                    {editingUserId === user.id ? (
                        <div className="action-buttons">
                            <button className="user-save-button" onClick={handleSaveUser}>
                                Save
                            </button>
                            <button className="user-delete-button" onClick={() => handleDeleteUser(user)}>
                                Delete
                            </button>
                        </div>
                    ) : (
                        <div className="action-buttons">
                            <button className="user-edit-button" onClick={() => handleEditClick(user)}>
                                Edit
                            </button>
                            <button className="user-delete-button" onClick={() => handleDeleteUser(user)}>
                                Delete
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default UserList;
