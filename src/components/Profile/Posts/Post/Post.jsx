import React from 'react';
import './Post.scss';
import avatar from '../../../../assets/images/avatar.jpg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { likePost } from '../../../../store/redusers/postsSlice'

const Post = (props) => {

    const dispatch = useDispatch();
    let iconClass = props.liked ? "_icon-like-filled" : "_icon-like";

    const likeBtnClickHandler = () => {
        dispatch(likePost(props.id));
    }

    return (
        <div className="posts__item post _section">
            <div className="post__header">
                <div className="post__img">
                    <Link to='/'>
                        <img className="post__avatar _avatar_small" src={avatar} alt='avatar' />
                    </Link>
                </div>
                <div className="post__user">
                    <div className="post__username">Anna Sandpiper</div>
                    <div className="post__date"></div>
                </div>
            </div>
            <div className="post__content">{props.message}</div>
            <button className={`post__like ${iconClass}`} onClick={likeBtnClickHandler}>{props.likeCount}</button>
        </div>
    );
};

export default Post;