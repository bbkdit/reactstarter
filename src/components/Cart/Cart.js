// src/components/Cart/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart } from '../../features/cart/cartSlice';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeItemFromCart(id));
    };

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price} x {item.quantity}
                            <button onClick={() => handleRemove(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: ${totalAmount.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;
