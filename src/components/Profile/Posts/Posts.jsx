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

    let postElements = posts.map((post, index) => <Post message={post.post} likeCount={post.likes} key={index} />);

    return (
        <div className="content__posts posts">
            <div className="posts__title _page-title">Posts</div>
            <div className="posts__list">
                { postElements }
            </div>
        </div>
    );
};

export default Posts;