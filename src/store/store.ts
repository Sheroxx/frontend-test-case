import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import productReducer from './reducers/productSlice';

export const store = configureStore({ 
    reducer: {
        user: productReducer,
    } 
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export type NameStateType = ReturnType<typeof store.getState>