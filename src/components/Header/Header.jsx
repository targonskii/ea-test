import React from 'react';

import Logo from '../../assets/logo.svg';

import './Header.css';

export const Header = () => {
    return (
        <header className='header'>
            <div className='header__left-image'></div>
            <div className='header__logo'>
                <a href='/'>
                    <img src={Logo} alt='logo' />
                </a>
            </div>
            <div className='header__right-image'></div>
        </header>
    );
};
