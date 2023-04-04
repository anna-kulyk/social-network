import React from 'react';
import { Link } from 'react-router-dom';
import './Message.scss';
import { useSelector } from 'react-redux';

const Message = ({ userId, messageContent }) => {
    const chats = useSelector((state) => state.chats.value);

    if (userId === 0) {
        return (
            <div className="messages__message message message_right">
                <div className="message__content">
                    { messageContent }
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="messages__message message message_left">
                <Link to='/messages' className='message__user'>
                    <img src={ chats[userId-1].avatar } alt="avatar" className="message__avatar _avatar_small" />
                </Link>
                <div className="message__content">
                    { messageContent }
                </div>
            </div>
        );
    }
};

export default Message;