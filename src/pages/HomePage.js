// src/pages/HomePage.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import ProductList from '../components/ProductList/ProductList';

const HomePage = () => {
    const token = useSelector((state) => state.auth.token);

    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <h1>Home Page</h1>
            <ProductList />
        </div>
    );
};

export default HomePage;
