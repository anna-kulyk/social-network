import React from 'react';
import './Friend.scss';
import { NavLink } from 'react-router-dom';

const Friend = ({ name, avatar }) => {
    return (
        <NavLink to={`/profile`} className='friends__item friend _section'>
            <img src={avatar} alt="avatar" className="friend__avatar _avatar_small" />
            <div className="friend__name">{name}</div>
        </NavLink>
    );
};

export default Friend;