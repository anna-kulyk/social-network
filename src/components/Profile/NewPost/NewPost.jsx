import React, { useState } from 'react';
import './NewPost.scss';
import avatar from '../../../assets/images/avatar.jpg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPost } from '../Posts/postsSlice';

const NewPost = () => {

    const placeholder = 'What do you want to post?';
    const [newPostInput, setNewPostInput] = useState('');
    const dispatch = useDispatch();

    const btnClickHandler = (e) => {
        const newPost = newPostInput.trim();
        if (newPost !== '') {
            dispatch(addPost(newPostInput));
            setNewPostInput('');
        }
        e.preventDefault();
    }

    return (
        <div className="content__new new-post _section">
            <form action="" className="new-post__form">
                <div className="new-post__row">
                    <div className="new-post__img">
                        <Link to='/'>
                            <img className="new-post__avatar _avatar_small" src={avatar} alt='avatar' />
                        </Link>
                    </div>
                    <textarea name="new-post-input"
                        id="new-post-input"
                        className="new-post__input _input"
                        placeholder={placeholder}
                        value={newPostInput}
                        onChange={(e) => setNewPostInput(e.target.value)} >
                    </textarea>
                </div>
                <button className="new-post__btn _btn" onClick={btnClickHandler}>Post</button>
            </form>
        </div>
    );
};

export default NewPost;