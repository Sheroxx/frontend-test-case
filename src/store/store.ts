import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import productReducer from './reducers/productSlice';
import basketReducer from './reducers/basketSlice';

export const store = configureStore({ 
    reducer: {
        product: productReducer,
        basket: basketReducer,
    } 
});


export type NameStateType = ReturnType<typeof store.getState>