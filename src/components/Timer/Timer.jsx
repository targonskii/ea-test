import React from 'react';

import { useCountdown } from '../../hooks/useCountdown';

import './Timer.css';

const COUNTDOWN_DATE = 'May 31 2023 00:00:00';

const padValue = (value) => value.toString().padStart(2, '0');

export const Timer = () => {
    const [days, hours, minutes, seconds] = useCountdown(COUNTDOWN_DATE);

    if (days + hours + minutes + seconds <= 0) {
        return <p>31 MAY IS NOW!!!</p>;
    } else {
        return (
            <div className='timer'>
                <div className='timer__numbers'>
                    <p className='timer__numbers-digit'>{days}</p>
                    <p>:</p>
                    <p className='timer__numbers-digit'>{padValue(hours)}</p>
                    <p>:</p>
                    <p className='timer__numbers-digit'>{padValue(minutes)}</p>
                    <p>:</p>
                    <p className='timer__numbers-digit'>{padValue(seconds)}</p>
                </div>
                <div className='timer__description'>
                    <p>Days</p>
                    <p>Hours</p>
                    <p>Minutes</p>
                    <p>Seconds</p>
                </div>
                <div className='timer__description--mobile'>
                    <p>DD</p>
                    <p>HH</p>
                    <p>MM</p>
                    <p>SS</p>
                </div>
            </div>
        );
    }
};
