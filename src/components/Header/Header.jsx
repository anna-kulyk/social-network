import React from 'react';
import './Header.scss';
import logo from '../../assets/images/meetroom.png';
import avatar from '../../assets/images/avatar.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container _container">
                <div className="header__body">
                    <Link to='/'>
                        <img className="header__logo" src={logo} alt='logo' />
                    </Link>
                    <Link to='/profile'>
                        <img className="header__avatar _avatar_small" src={avatar} alt='avatar' />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;