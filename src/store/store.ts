import { configureStore } from '@reduxjs/toolkit';
import orderReducer from '@/store/order-slice';
import { useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: orderReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<Dispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();