// src/api/orders.js
import axios from 'axios';

const orderApi = axios.create({
    baseURL: process.env.REACT_APP_ORDER_API_BASE_URL,
});

export const createOrder = async (orderData) => {
    const response = await orderApi.post('/orders', orderData);
    return response.data;
};

export const getOrder = async (orderId) => {
    const response = await orderApi.get(`/orders/${orderId}`);
    return response.data;
};

export const getUserOrders = async (userId) => {
    const response = await orderApi.get(`/users/${userId}/orders`);
    return response.data;
};
