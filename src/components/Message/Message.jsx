import React from 'react';

import classNames from 'classnames';

import './Message.css';

export const Message = ({ warning, text, redColor, showPopup, closePopup }) => {
    return (
        <div
            className={classNames('message__wrapper', {
                showPopup: showPopup,
                redColor: redColor,
            })}
        >
            <div className='message'>
                <button
                    type='button'
                    className='message__close'
                    onClick={closePopup}
                />
                <h2>{warning}</h2>
                <p>{text}</p>
                <button type='button' onClick={closePopup}>
                    Close
                </button>
            </div>
        </div>
    );
};
