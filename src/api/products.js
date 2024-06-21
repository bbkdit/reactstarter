// src/api/products.js
import axios from 'axios';

console.log('Product API Base URL:', process.env.BASE_URL);
const api = axios.create({
    baseURL: "http://127.0.0.1:8000",
});


export const fetchProducts = async () => {
    const response = await api.get('/api/products');
    return response.data;
};

export const createProduct = async (product) => {
    const response = await api.post('/api/products', product);
    return response.data;
};

export const updateProduct = async (product) => {
    const response = await api.put(`/api/products/${product.id}`, product);
    return response.data;
};

export const deleteProduct = async (id) => {
    const response = await api.delete(`/api/products/${id}`);
    return response.data;
};
