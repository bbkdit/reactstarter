// src/api/auth.js
import axios from 'axios';


const api = axios.create({
    baseURL: "http://127.0.0.1:8000",
    // baseURL: process.env.BASE_URL,
});


export const login = async (credentials) => {
    const response = await api.post('/api/login', credentials);
    return response.data;
};

export const register = async (userInfo) => {
    const response = await api.post('/api/register', userInfo);
    return response.data;
};

export const logout = async () => {
    const response = await api.get('/api/logout');
    return response.data;
};
