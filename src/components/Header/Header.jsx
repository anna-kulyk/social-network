import React from 'react';
import './Header.scss';
import logo from '../../assets/images/meetroom.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container _container">
                <div className="header__body">
                    <a href={"/"}>
                        <img className="header__logo" src={logo} alt='logo'/>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;