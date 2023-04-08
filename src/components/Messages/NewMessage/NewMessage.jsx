import React, { useState } from 'react';
import './NewMessage.scss';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../../store/redusers/messagesSlice';

const NewMessage = () => {

    const [newMessageInput, setNewMessageInput] = useState('');
    const dispatch = useDispatch();

    const sendMessageHandler = (e) => {
        const newMessage = newMessageInput.trim();
        if (newMessage !== '') {
            dispatch(addMessage(newMessage));
            setNewMessageInput('');
        }
        e.preventDefault();
    }

    return (
        <form className='messages__new-message new-message' action="">
            <input className='new-message__input _input'
                type="text"
                name="new-message-input"
                id="new-message-input"
                placeholder='Write a message...'
                autoComplete='off'
                value={newMessageInput}
                onChange={(e) => setNewMessageInput(e.target.value)} />
            <button type='submit' className='new-message__send _btn' onClick={sendMessageHandler}>Send</button>
        </form>
    );
};

export default NewMessage;