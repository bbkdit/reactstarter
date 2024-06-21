// src/components/LogoutButton/LogoutButton.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import { persistor } from '../../app/store'; // Ensure you export persistor from your store setup

const LogoutButton = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        persistor.purge();
        // Additional logic like redirecting to login page if needed
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
