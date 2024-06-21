// src/pages/LoginPage.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm/AuthForm';
import { useSelector } from 'react-redux';

const LoginPage = () => {

    const token = useSelector((state) => state.auth.token);

    if (token) {
        return <Navigate to="/" />;
    }
    return (
        <div>
            <h1>Login</h1>
            <AuthForm isRegister={false} />
        </div>
    );
};

export default LoginPage;
