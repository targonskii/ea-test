import React from 'react';
import { Timer } from '../Timer/Timer';

import './Main.css';

export const Main = () => {
    return (
        <main className='main'>
            <h1>Under Construction</h1>
            <p>We're making lots of improvements and will be back soon</p>
            <Timer />
            <p>Check our event page when you wait:</p>
            <button>
                <a href='https://leadentrepreneursummit.com/'>
                    Go to the event
                </a>
            </button>
        </main>
    );
};
