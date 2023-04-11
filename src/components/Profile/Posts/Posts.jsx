import React, { useState } from 'react';
import Post from './Post/Post';
import './Posts.scss';
import { useGetPostsQuery } from '../../../services/postsService';
import EditPostModal from './EditPostModal/EditPostModal';
import DeletePostModal from './DeletePostModal/DeletePostModal';

const Posts = () => {

    const { data: posts } = useGetPostsQuery();
    const [editPostData, setEditPostData] = useState({ open: false, post: null });
    const [deletePostData, setDeletePostData] = useState({ open: false, post: null });

    const postElements = posts && posts.map((post) => <Post id={post.id}
        key={post.id}
        onEdit={setEditPostData}
        onDelete={setDeletePostData} />);

    return (
        <div className="content__posts posts">
            <div className="posts__title _page-title">Posts</div>
            <div className="posts__list">
                {posts && posts.length === 0 ? <div className='post _section'>No posts yet</div> : postElements}
            </div>
            {editPostData.open && <EditPostModal onClose={setEditPostData} post={editPostData.post} />}
            {deletePostData.open && <DeletePostModal onClose={setDeletePostData} post={deletePostData.post} />}
        </div>
    );
};

export default Posts;