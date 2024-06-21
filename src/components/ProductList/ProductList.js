// src/components/ProductList/ProductList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, removeProduct } from '../../features/products/productSlice';
import ProductForm from '../ProductForm/ProductForm';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const productStatus = useSelector((state) => state.products.status);

    useEffect(() => {
        if (productStatus === 'idle') {
            dispatch(getProducts());
        }
    }, [productStatus, dispatch]);

    const handleDelete = (id) => {
        dispatch(removeProduct(id));
    };

    return (
        <div>
            <h1>Product List</h1>
            <ProductForm />
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                        <ProductForm product={product} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
