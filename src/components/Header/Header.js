// src/components/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../LogoutButton/LogoutButton';

const Header = () => {
    const user = useSelector((state) => state.auth.user);

    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                {user ? (
                    <>
                        <span>Welcome, {user.name}</span>
                        <LogoutButton />
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
