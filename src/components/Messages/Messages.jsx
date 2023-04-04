import React from 'react';
import './Messages.scss';
// import avatar from '../../assets/images/avatar.jpg';
import { Link } from 'react-router-dom';
import Chat from './ChatUser/Chat';
import Message from './Message/Message';

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
const messages = [
    {
        userId: 3,
        message: 'Hi, how are you?'
    },
    {
        userId: 0,
        message: 'Good, how are you?'
    }
]

const Messages = () => {

    let chatElements = users.map(user => <Chat id={user.id} name={user.name} avatar={user.avatar} key={user.id} />);
    let messageElements = messages.map((message, index) => <Message userId={message.userId} messageContent={message.message} key={index} />);

    return (
        <div className='messages _page-section'>
            <div className="messages__chats chats _section">
                <div className="chats__title _page-title">Chats</div>
                <div className="chats__search search-chats">
                    <input className='search-chats__input _input' 
                           type="text" 
                           name="search-chats-input" 
                           id="search-chats-input"
                           placeholder='Search messages' />
                </div>
                <div className="chats__list">
                    { chatElements }
                </div>
            </div>
            <div className="messages__chat _section">
                <div className="messages__header">
                    <Link to='/messages' className='messages__user'>
                        <img src='https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80' alt="avatar" className="messages__avatar _avatar_small" />
                        <div className="messages__username">Yuli Nabu</div>
                    </Link>
                </div>
                <div className="messages__body">
                    { messageElements }
                </div>
                <div className="messages__footer">
                    <form className='messages__new-message new-message' action="" method="post">
                        <input className='new-message__input _input' 
                               type="text" 
                               name="new-message-input" 
                               id="new-message-input"
                               placeholder='Write a message...' />
                        <button type='submit' className='new-message__send _btn'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Messages;