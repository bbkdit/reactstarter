// src/components/AuthForm/AuthForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../../features/auth/authSlice';

const AuthForm = ({ isRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isRegister) {
            dispatch(registerUser({ email, password }));
        } else {
            dispatch(loginUser({ email, password }));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
            {auth.error && <p>{auth.error}</p>}
        </form>
    );
};

export default AuthForm;
