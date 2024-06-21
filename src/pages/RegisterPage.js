// src/pages/RegisterPage.js
import React from 'react';
import AuthForm from '../components/AuthForm/AuthForm';

const RegisterPage = () => {
    return (
        <div>
            <h1>Register</h1>
            <AuthForm isRegister={true} />
        </div>
    );
};

export default RegisterPage;
