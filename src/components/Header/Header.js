import React from 'react';
import logo from '../../image/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="" />
            <h1>Here we will see some computer club members.</h1>

        </div>
    );
};

export default Header;