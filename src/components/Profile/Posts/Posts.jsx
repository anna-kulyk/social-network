import React, { useEffect, useState } from 'react';
import Post from './Post/Post';
import './Posts.scss';
import { useGetPostsQuery } from '../../../services/postsService';
import EditPostModal from './EditPostModal/EditPostModal';
import DeletePostModal from './DeletePostModal/DeletePostModal';
import { useSelector, useDispatch } from 'react-redux';
import { setPostsData, nextPostsPage, resetPostsPage } from '../../../store/redusers/postsdataSlice';

const Posts = ({ posts }) => {
    const postsLimit = 5;
    const pageNumber = useSelector((state) => state.postsData.postsPage);
    // const postsData = useSelector((state) => state.postsData.postsData);
    const dispatch = useDispatch();
    // const { data: posts, isFetching } = useGetPostsQuery(pageNumber);
    const [editPostData, setEditPostData] = useState({ open: false, post: null });
    const [deletePostData, setDeletePostData] = useState({ open: false, post: null });
    const [loadMoreBtnIsVisible, setLoadMoreBtnIsVisible] = useState((postsLimit * pageNumber) < posts.length);

    const loadMoreHandler = () => {
        dispatch(nextPostsPage());
        setLoadMoreBtnIsVisible((postsLimit * pageNumber) < posts.length);
    }


    const postElements = posts.slice(0, postsLimit * pageNumber).map((post) => <Post id={post}
        key={post}
        onEdit={setEditPostData}
        onDelete={setDeletePostData} />);

    // const postElements = posts && postsData.map((post) => <Post id={post.id}
    //     key={post.id}
    //     onEdit={setEditPostData}
    //     onDelete={setDeletePostData} />);

    // useEffect(() => {
    //     posts && dispatch(setPostsData(posts));
    //     if (posts && posts.length !== 0) {
    //         setLoadMoreBtnIsVisible(true);
    //     }
    //     else if (posts && posts.length === 0) {
    //         setLoadMoreBtnIsVisible(false);
    //     }
    // }, [posts, dispatch]);

    // useEffect(() => {
    //     return () => {
    //         dispatch(resetPostsPage());
    //     }
    // }, [dispatch]);

    return (
        <div className="content__posts posts">
            <div className="posts__title _page-title">Posts</div>
            <div className="posts__list">
                {posts.length === 0 ? <div className='post _section'>No posts yet</div> : postElements}
            </div>
            {loadMoreBtnIsVisible && <button className='posts__more _btn' onClick={loadMoreHandler}>Load more...</button>}
            {/* <div className="posts__list">
                {posts && postsData.length === 0 ? <div className='post _section'>No posts yet</div> : postElements}
            </div> */}
            {/* {loadMoreBtnIsVisible && <button disabled={isFetching} className='posts__more _btn' onClick={loadMoreHandler}>Load more...</button>} */}
            {editPostData.open && <EditPostModal onClose={setEditPostData} post={editPostData.post} />}
            {deletePostData.open && <DeletePostModal onClose={setDeletePostData} post={deletePostData.post} />}
        </div>
    );
};

export default Posts;