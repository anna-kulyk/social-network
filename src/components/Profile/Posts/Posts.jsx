import React from 'react';
import Post from './Post/Post';
import './Posts.scss';

const Posts = () => {
    return (
        <div className="content__posts posts">
            <div className="posts__title">Posts</div>
            <div className="posts__list">
                <Post message='Hi! How are you?' likeCount='3' />
                <Post message="It's my first post" likeCount='15' />
            </div>
        </div>
    );
};

export default Posts;