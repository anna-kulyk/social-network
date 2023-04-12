import React from 'react';
import './DeletePostModal.scss';
import Modal from '../../../Modal/Modal';
import { useDeletePostMutation } from '../../../../services/postsService';
import { useDispatch } from 'react-redux';
import { resetPostsPage } from '../../../../store/redusers/postsdataSlice';

const DeletePostModal = ({ post, onClose }) => {
    const [deletePost] = useDeletePostMutation();
    const dispatch = useDispatch();

    const deleteBtnHandler = () => {
        dispatch(resetPostsPage());
        deletePost(post.id);
        onClose({ open: false, post: null })
    }

    const canselBtnHandler = () => {
        onClose({ open: false, post: null })
    }

    return (
        <Modal onClose={onClose} title='Delete Post'>
            <div className='delete-post'>
                <div className="delete-post__content">
                    Are you sure you want to delete this post?
                </div>
                <div className="delete-post__buttons">
                    <button className="delete-post__delete _btn" onClick={deleteBtnHandler}>Delete</button>
                    <button className="delete-post__cansel _btn" onClick={canselBtnHandler}>Cansel</button>
                </div>
            </div>
        </Modal>
    );
};

export default DeletePostModal;