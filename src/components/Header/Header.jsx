import React from 'react';
import './Header.scss';
import logo from '../../assets/images/meetroom.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container container">
                <div className="header__body">
                    <img className="header__logo" src={logo} alt='logo'/>
                </div>
            </div>
        </header>
    );
};

export default Header;