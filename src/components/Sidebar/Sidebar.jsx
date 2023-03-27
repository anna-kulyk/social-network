import React from 'react';
import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar _section">
            <div className="sidebar__body">
                <nav className="sidebar__nav nav">
                    <ul className="nav__list">
                        <li><a className="nav__link _icon-user active" href={'/'}>Profile</a></li>
                        <li><a className="nav__link _icon-comment" href={'/'}>Messages</a></li>
                        <li><a className="nav__link _icon-news" href={'/'}>News</a></li>
                        <li><a className="nav__link _icon-music" href={'/'}>Music</a></li>
                        <li><a className="nav__link _icon-setting" href={'/'}>Settings</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;