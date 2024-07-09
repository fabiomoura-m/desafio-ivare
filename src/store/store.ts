import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import rootReducer from './root-reducer';
import { decrementTimer } from './timer-slice';

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<Dispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

// Inicializa o intervalo global para decrementar os timers a cada segundo
let globalTimerInterval: NodeJS.Timeout | null = null;

const decrementAllTimers = () => (dispatch: Dispatch, getState: () => RootState) => {
    const { timerReducer } = getState();
    Object.keys(timerReducer).forEach(id => {
        dispatch(decrementTimer({ id }));
    });
};

export const startGlobalTimer = (dispatch: Dispatch) => {
    if (!globalTimerInterval) {
        globalTimerInterval = setInterval(() => {
            dispatch(decrementAllTimers());
        }, 1000);
    }
};

export const stopGlobalTimer = () => {
    if (globalTimerInterval) {
        clearInterval(globalTimerInterval);
        globalTimerInterval = null;
    }
};

// Inicia o intervalo global ao criar a loja
startGlobalTimer(store.dispatch);
