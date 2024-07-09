import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setTimer } from '@/store/timer-slice';

type TimerProps = {
    id: string;
    initialSeconds: number;
};

const Timer = ({ id, initialSeconds }: TimerProps) => {
    const dispatch = useAppDispatch();
    const timers = useAppSelector(state => state.timerReducer);
    const seconds = timers[id];

    useEffect(() => {
        if (seconds === undefined) {
            dispatch(setTimer({ id, initialSeconds }));
        }
    }, [dispatch, id, initialSeconds, seconds]);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(
            remainingSeconds
        ).padStart(2, '0')}`;
    };

    return (
        <div>
            {seconds !== undefined ? (
                <p>
                    <span className="font-semibold">Tempo estimado:</span>{' '}
                    {formatTime(seconds)}
                </p>
            ) : (
                'Loading...'
            )}
        </div>
    );
};

export default Timer;
