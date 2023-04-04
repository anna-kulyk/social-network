import React from 'react';
import './Messages.scss';
// import avatar from '../../assets/images/avatar.jpg';
import { Link } from 'react-router-dom';
import Chat from './Chat/Chat';
import Message from './Message/Message';
import { useSelector } from 'react-redux';

const Messages = () => {

    const chats = useSelector((state) => state.chats.value);
    const messages = useSelector((state) => state.messages.value);

    let chatElements = chats.map(chat => <Chat id={chat.id} name={chat.name} avatar={chat.avatar} key={chat.id} />);
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