// src/components/Checkout/Checkout.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../../features/orders/orderSlice';
import { clearCart } from '../../features/cart/cartSlice';

const Checkout = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const userId = useSelector((state) => state.auth.user.id);

    const handleCheckout = () => {
        const orderData = {
            userId,
            items: cartItems,
            totalAmount,
        };
        dispatch(placeOrder(orderData));
        dispatch(clearCart());
    };

    return (
        <div>
            
            <h2>Checkout</h2>
            <button onClick={handleCheckout}>Place Order</button>
        </div>
    );
};

export default Checkout;
