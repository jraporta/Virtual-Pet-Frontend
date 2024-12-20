import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const RestrictedRoute = ({ children }) => {
    const { isAuthenticated, user } = useAuth();
    const location = useLocation();

    if (!isAuthenticated || !user?.isAdmin) {
        const redirectTo = isAuthenticated ? '/unauthorized' : '/login';
        return <Navigate to={redirectTo} state={{ from: location }} replace />;
    }

    return children;
};

export default RestrictedRoute;