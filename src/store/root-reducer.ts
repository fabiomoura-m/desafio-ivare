import { combineReducers } from '@reduxjs/toolkit';
import orderReducer from '@/store/order-slice';
import timerReducer from '@/store/timer-slice';

const rootReducer = combineReducers({ orderReducer, timerReducer });

export default rootReducer;
