// src/features/products/productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts, createProduct, updateProduct, deleteProduct } from '../../api';

const initialState = {
    items: [],
    status: 'idle',
    error: null,
};

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    const response = await fetchProducts();
    return response.data;
});

export const addProduct = createAsyncThunk('products/addProduct', async (product) => {
    const response = await createProduct(product);
    return response;
});

export const editProduct = createAsyncThunk('products/editProduct', async (product) => {
    const response = await updateProduct(product);
    return response;
});

export const removeProduct = createAsyncThunk('products/removeProduct', async (id) => {
    const response = await deleteProduct(id);
    return response;
});

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items.push(action.payload);
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(editProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(editProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const index = state.items.findIndex((product) => product.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase(editProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(removeProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(removeProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = state.items.filter((product) => product.id !== action.payload.id);
            })
            .addCase(removeProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default productSlice.reducer;
