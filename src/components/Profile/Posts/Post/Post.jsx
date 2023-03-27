import React from 'react';
import './Post.scss';
import avatar from '../../../../assets/images/avatar.jpg';

const Post = (props) => {
    return (
        <div className="posts__item post _section">
            <div className="post__header">
                <div className="post__img">
                    <img className="post__avatar _avatar_small" src={avatar} alt='avatar'/>
                </div>
                <div className="post__user">
                    <div className="post__username">Anna Sandpiper</div>
                    <div className="post__date"></div>
                </div>
            </div>
            <div className="post__content">{props.message}</div>
        </div>
    );
};

export default Post;