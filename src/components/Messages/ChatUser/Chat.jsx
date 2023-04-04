import React from 'react';
import './Chat.scss';
import { NavLink } from 'react-router-dom';

const Chat = ({ id, name, avatar }) => {
    return (
        <NavLink to={`/messages/${ id }`} className='chats__item chat'>
            <img src={ avatar } alt="avatar" className="chat__avatar _avatar_small" />
            <div className="chat__name">{ name }</div>
        </NavLink>
    );
};

export default Chat;