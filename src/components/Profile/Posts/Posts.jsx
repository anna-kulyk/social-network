import React from 'react';
import Post from './Post/Post';
import './Posts.scss';

const posts = [
    {
        post: 'Hi, how are you?',
        likes: 3
    },
    {
        post: `It's my first post`,
        likes: 15
    }
]

const Posts = () => {
    return (
        <div className="content__posts posts">
            <div className="posts__title _page-title">Posts</div>
            <div className="posts__list">
                <Post message={posts[0].post} likeCount={posts[0].likes} />
                <Post message={posts[1].post} likeCount={posts[1].likes} />
            </div>
        </div>
    );
};

export default Posts;