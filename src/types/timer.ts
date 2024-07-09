export type TimerState = {
    [id: string]: number;
};

export type AddTimerPayload = {
    id: string;
    initialSeconds: number;
};

export type DecrementTimerPayload = {
    id: string;
};
