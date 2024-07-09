import { Order } from '@/types/order';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    orders: Order[];
};

const initialState: InitialState = {
    orders: []
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrder: (state, { payload }: PayloadAction<Order>) => {
            state.orders = [...state.orders, { ...payload }];
        }
    }
});

export const { addOrder } = orderSlice.actions;

export default orderSlice.reducer;