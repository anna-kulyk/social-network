import React, { useState } from 'react';
import './NewPost.scss';
import avatar from '../../../assets/images/avatar.jpg';
import { Link, useParams } from 'react-router-dom';
import { useAddPostMutation } from '../../../services/postsService';
import { useDispatch } from 'react-redux';
import { resetPostsPage } from '../../../store/redusers/postsdataSlice';

const NewPost = () => {

    const placeholder = 'What do you want to post?';
    const [newPostInput, setNewPostInput] = useState('');
    const [addPost, { isLoading }] = useAddPostMutation();
    const dispatch = useDispatch();
    const params = useParams();

    const btnClickHandler = (e) => {
        const postText = newPostInput.trim();
        if (postText === '') return;

        const postId = new Date().getTime();
        const userId = params.id ? Number(params.id) : 1;
        const newPost = {
            "id": postId,
            "content": postText,
            "likes": 0,
            "liked": false,
            "author": {
                "name": "Anna Sendpiper",
                "avatar": "https://i.pinimg.com/564x/dc/84/3b/dc843b6b50cd4cb94a7b3eb97f850888.jpg",
                "id": 1
            },
            "userId": userId
        }
        dispatch(resetPostsPage());
        addPost(newPost).then(() => setNewPostInput(''));
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
                <button type="button"
                    className="new-post__btn _btn"
                    disabled={isLoading}
                    onClick={btnClickHandler}>Post</button>
            </form>
        </div>
    );
};

export default NewPost;