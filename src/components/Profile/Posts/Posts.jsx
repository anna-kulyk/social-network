import React, { useEffect, useState } from 'react';
import Post from './Post/Post';
import './Posts.scss';
import { useGetPostsQuery } from '../../../services/postsService';
import EditPostModal from './EditPostModal/EditPostModal';
import DeletePostModal from './DeletePostModal/DeletePostModal';
import { useSelector, useDispatch } from 'react-redux';
import { setPostsData, nextPostsPage } from '../../../store/redusers/postsdataSlice';

const Posts = () => {
    const pageNumber = useSelector((state) => state.postsData.postsPage);
    const postsData = useSelector((state) => state.postsData.postsData);
    const dispatch = useDispatch();
    const { data: posts, isFetching } = useGetPostsQuery(pageNumber);
    const [editPostData, setEditPostData] = useState({ open: false, post: null });
    const [deletePostData, setDeletePostData] = useState({ open: false, post: null });
    const [loadMoreBtnIsVisible, setLoadMoreBtnIsVisible] = useState(true);

    const loadMoreHandler = () => {
        dispatch(nextPostsPage());
    }

    const postElements = posts && postsData.map((post) => <Post id={post.id}
        key={post.id}
        onEdit={setEditPostData}
        onDelete={setDeletePostData} />);

    useEffect(() => {
        posts && dispatch(setPostsData(posts));
        if (posts && posts.length !== 0) {
            setLoadMoreBtnIsVisible(true);
        }
        else if (posts && posts.length === 0) {
            setLoadMoreBtnIsVisible(false);
        }
    }, [posts, dispatch]);

    return (
        <div className="content__posts posts">
            <div className="posts__title _page-title">Posts</div>
            <div className="posts__list">
                {posts && postsData.length === 0 ? <div className='post _section'>No posts yet</div> : postElements}
            </div>
            {loadMoreBtnIsVisible && <button disabled={isFetching} className='posts__more _btn' onClick={loadMoreHandler}>Load more...</button>}
            {editPostData.open && <EditPostModal onClose={setEditPostData} post={editPostData.post} />}
            {deletePostData.open && <DeletePostModal onClose={setDeletePostData} post={deletePostData.post} />}
        </div>
    );
};

export default Posts;