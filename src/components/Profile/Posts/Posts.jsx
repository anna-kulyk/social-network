import React from 'react';
import Post from './Post/Post';
import './Posts.scss';
import { useGetPostsQuery } from '../../../services/postsService';

const Posts = () => {

    const { data: posts } = useGetPostsQuery();
    // posts && console.log(posts);

    const postElements = posts && posts.map((post) => <Post post={post} key={post.id} />);

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