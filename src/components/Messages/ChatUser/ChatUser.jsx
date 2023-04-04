import React from 'react';
import './ChatUser.scss';
import { NavLink } from 'react-router-dom';

const ChatUser = ({ userId, userName, userAvatar }) => {
    return (
        <NavLink to={`/messages/${ userId }`} className='chats__user'>
            <img src={ userAvatar } alt="avatar" className="chats__avatar _avatar_small" />
            <div className="chats__username">{ userName }</div>
        </NavLink>
    );
};

export default ChatUser;