// src/components/ProductList/ProductList.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../features/products/productSlice';
import { addItemToCart } from '../../features/cart/cartSlice';
import SearchFilter from '../SearchFilter/SearchFilter';
import ProductForm from '../ProductForm/ProductForm';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    const handleSearch = (searchTerm) => {
        setFilteredProducts(
            products.filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    };

    const handleFilter = (filterTerm) => {
        setFilteredProducts(
            filterTerm
                ? products.filter((product) => product.category === filterTerm)
                : products
        );
    };

    const handleAddToCart = (product) => {
        dispatch(addItemToCart(product));
    };

    return (
        <div>
            <h2>Product List</h2>

            <ProductForm />
            <SearchFilter onSearch={handleSearch} onFilter={handleFilter} />
            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
