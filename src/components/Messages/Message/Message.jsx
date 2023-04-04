import React from 'react';
import { Link } from 'react-router-dom';
import './Message.scss';

const users = [
    {
        id: 1,
        name: 'Hendry Katla',
        avatar: 'https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
    },
    {
        id: 2,
        name: 'Liselotte Márk',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        id: 3,
        name: 'Yuli Nabu',
        avatar: 'https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
    }
]

const Message = ({ userId, messageContent }) => {
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
                    <img src={ users[userId-1].avatar } alt="avatar" className="message__avatar _avatar_small" />
                </Link>
                <div className="message__content">
                    { messageContent }
                </div>
            </div>
        );
    }
};

export default Message;