import React from 'react';
import './NewMessage.scss';

const NewMessage = () => {
    return (
        <form className='messages__new-message new-message' action="" method="post">
            <input className='new-message__input _input'
                type="text"
                name="new-message-input"
                id="new-message-input"
                placeholder='Write a message...' />
            <button type='submit' className='new-message__send _btn'>Send</button>
        </form>
    );
};

export default NewMessage;