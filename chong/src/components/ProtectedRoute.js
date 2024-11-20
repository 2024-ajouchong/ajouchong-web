import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
        // Redirect to the login page if not logged in
        return <Navigate to="/signin" replace />;
    }

    // Render the child components if logged in
    return children;
};

export default ProtectedRoute;
