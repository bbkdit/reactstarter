// src/pages/CartPage.js
import React from 'react';
import Cart from '../components/Cart/Cart';
import Checkout from '../components/Checkout/Checkout';

const CartPage = () => {
    return (
        <div>
            <h1>Cart</h1>
            <Cart />
            {/* <Checkout /> */}
        </div>
    );
};

export default CartPage;
