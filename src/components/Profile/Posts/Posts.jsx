import React from 'react';
import Post from './Post/Post';
import './Posts.scss';
// import { useSelector } from 'react-redux';
import { useGetPostsQuery } from '../../../services/postsService';

const Posts = () => {

    const { data: posts } = useGetPostsQuery();
    posts && console.log(posts);

    // const posts = useSelector((state) => state.posts.posts);
    const postElements = posts && posts.map((post) => <Post message={post.post} likeCount={post.likes} liked={post.liked}
        id={post.id} key={post.id} />);

    return (
        <div className="content__posts posts">
            <div className="posts__title _page-title">Posts</div>
            <div className="posts__list">
                {posts && posts.length === 0 ? <div className='post _section'>No posts yet :(</div> : postElements}
            </div>
        </div>
    );
};

export default Posts;