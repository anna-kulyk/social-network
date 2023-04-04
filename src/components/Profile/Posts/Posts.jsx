import React from 'react';
import Post from './Post/Post';
import './Posts.scss';
import { useSelector } from 'react-redux';

const Posts = () => {

    const posts = useSelector((state) => state.posts.value);
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