// src/pages/OrderDetailsPage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrder } from '../features/orders/orderSlice';
import { useParams } from 'react-router-dom';

const OrderDetailsPage = () => {
    const { orderId } = useParams();
    const dispatch = useDispatch();
    const order = useSelector((state) => state.orders.currentOrder);
    const orderStatus = useSelector((state) => state.orders.status);
    const orderError = useSelector((state) => state.orders.error);

    useEffect(() => {
        dispatch(fetchOrder(orderId));
    }, [dispatch, orderId]);

    return (
        <div>
            <h1>Order Details</h1>
            {orderStatus === 'loading' && <p>Loading...</p>}
            {orderStatus === 'failed' && <p>Error: {orderError}</p>}
            {order && (
                <div>
                    <h2>Order #{order.id}</h2>
                    <p>Total: ${order.totalAmount.toFixed(2)}</p>
                    <ul>
                        {order.items.map((item) => (
                            <li key={item.id}>
                                {item.name} - ${item.price} x {item.quantity}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default OrderDetailsPage;
