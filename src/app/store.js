// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import authReducer from '../features/auth/authSlice';
import productReducer from '../features/products/productSlice';
import cartReducer from '../features/cart/cartSlice';
import ordersReducer from '../features/orders/orderSlice';


const persistConfig = {
    key: 'root',
    storage,
};

const cartPersistConfig = {
    key: 'cart',
    version: 1,
    storage,
};

const rootReducer = combineReducers({
    auth: persistReducer(persistConfig, authReducer),
    products: productReducer,
    // cart: cartReducer,
    cart: persistReducer(cartPersistConfig, cartReducer),
    orders: ordersReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

const persistor = persistStore(store);

export { store, persistor };
