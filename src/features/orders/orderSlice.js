// src/features/orders/orderSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createOrder, getOrder, getUserOrders } from '../../api/orders';

const initialState = {
    orders: [],
    currentOrder: null,
    status: 'idle',
    error: null,
};

export const placeOrder = createAsyncThunk('orders/placeOrder', async (orderData, { rejectWithValue }) => {
    try {
        const response = await createOrder(orderData);
        return response;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const fetchOrder = createAsyncThunk('orders/fetchOrder', async (orderId, { rejectWithValue }) => {
    try {
        const response = await getOrder(orderId);
        return response;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const fetchUserOrders = createAsyncThunk('orders/fetchUserOrders', async (userId, { rejectWithValue }) => {
    try {
        const response = await getUserOrders(userId);
        return response;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(placeOrder.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(placeOrder.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.orders.push(action.payload);
            })
            .addCase(placeOrder.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(fetchOrder.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchOrder.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.currentOrder = action.payload;
            })
            .addCase(fetchOrder.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(fetchUserOrders.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUserOrders.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.orders = action.payload;
            })
            .addCase(fetchUserOrders.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default orderSlice.reducer;
