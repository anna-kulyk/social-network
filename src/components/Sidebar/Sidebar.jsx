import React from 'react';
import './Sidebar.scss';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar _section">
            <div className="sidebar__body">
                <nav className="sidebar__nav nav">
                    <ul className="nav__list">
                        <li><NavLink className="nav__link _icon-user" to='/'>Profile</NavLink></li>
                        <li><NavLink className="nav__link _icon-comment" to='/messages'>Messages</NavLink></li>
                        <li><NavLink className="nav__link _icon-news" to='/news'>News</NavLink></li>
                        <li><NavLink className="nav__link _icon-friends" to='/friends'>Friends</NavLink></li>
                        <li><NavLink className="nav__link _icon-setting" to='/settings'>Settings</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;