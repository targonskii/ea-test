import React, { useRef, useState } from 'react';
import { Message } from '../Message/Message';

import './Footer.css';

const RES_CODES = [200, 500];

const getResponseCode = (codes) => {
    return codes[Math.round(Math.random())];
};

const POPUP_STATES = {
    SUCCESS: {
        warning: 'SUCCESS',
        text: 'You have successfully subscribed to the email newsletter',
        redColor: false,
    },
    ERROR: {
        warning: 'ERROR',
        text: 'Please, try again!',
        redColor: true,
    },
};

export const Footer = () => {
    const [messagePopup, setMessagePopup] = useState(null);

    const email = useRef(null);

    const submitEmail = async (event) => {
        event.preventDefault();
        await fetch(
            `https://dummyjson.com/http/${getResponseCode(RES_CODES)}`,
            {
                method: 'POST',
                body: JSON.stringify({ email: email.current.value }),
            }
        )
            .then(async (res) => {
                if (!res.ok) throw new Error(res.statusText);

                await res.json();
            })
            .then(() => setMessagePopup(POPUP_STATES.SUCCESS))
            .catch(() => setMessagePopup(POPUP_STATES.ERROR));
    };

    const closePopup = () => setMessagePopup(null);

    return (
        <footer className='footer'>
            <form className='footer__form' onSubmit={submitEmail}>
                <input
                    ref={email}
                    type='email'
                    placeholder='Enter your Email and get notified'
                    pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                />
                <button
                    className='footer__button'
                    type='submit'
                    onSubmit={submitEmail}
                />
                {messagePopup && (
                    <Message
                        text={messagePopup.text}
                        warning={messagePopup.warning}
                        redColor={messagePopup.redColor}
                        showPopup={messagePopup}
                        closePopup={closePopup}
                    />
                )}
            </form>
        </footer>
    );
};
