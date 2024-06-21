// src/components/ProductForm/ProductForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, editProduct } from '../../features/products/productSlice';

const ProductForm = ({ product }) => {
    const [name, setName] = useState(product ? product.name : '');
    const [price, setPrice] = useState(product ? product.price : '');
    const [detail, setDetail] = useState(product ? product.detail : '');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (product) {
            dispatch(editProduct({ ...product, name, price, detail }));
        } else {
            dispatch(addProduct({ name, price, detail }));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Price:</label>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
                <label>Detail:</label>
                <input type="text" value={detail} onChange={(e) => setDetail(e.target.value)} />
            </div>
            <button type="submit">{product ? 'Update' : 'Add'} Product</button>
        </form>
    );
};

export default ProductForm;
