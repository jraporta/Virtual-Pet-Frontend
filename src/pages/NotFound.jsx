
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const NotFound = () => {
    
    return (
        <div>
            <h1>404</h1>
            <img src='../../assets/error-not-found-404.jpg'></img>
            <h3>Resource Not Found</h3>
        </div>
    );
};

export default NotFound;
                