import {
    AddTimerPayload,
    DecrementTimerPayload,
    TimerState
} from '@/types/timer';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: TimerState = {};

const timerSlice = createSlice({
    name: 'timers',
    initialState,
    reducers: {
        setTimer: (state, { payload }: PayloadAction<AddTimerPayload>) => {
            const { id, initialSeconds } = payload;
            state[id] = initialSeconds;
        },
        decrementTimer: (
            state,
            { payload }: PayloadAction<DecrementTimerPayload>
        ) => {
            const { id } = payload;
            if (state[id] > 0) {
                state[id] -= 1;
            }
        }
    }
});

export const { setTimer, decrementTimer } = timerSlice.actions;

export default timerSlice.reducer;
