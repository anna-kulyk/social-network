import React from 'react';
import './Chat.scss';
import { NavLink } from 'react-router-dom';

const Chat = ({ userId, userName, userAvatar }) => {
    return (
        <NavLink to={`/messages/${ userId }`} className='chats__item chat'>
            <img src={ userAvatar } alt="avatar" className="chat__avatar _avatar_small" />
            <div className="chat__name">{ userName }</div>
        </NavLink>
    );
};

export default Chat;