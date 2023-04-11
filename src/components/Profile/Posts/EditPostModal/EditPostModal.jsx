import React, { useState } from 'react';
import './EditPostModal.scss';
import Modal from '../../../Modal/Modal';
import { Link } from 'react-router-dom';
import avatar from '../../../../assets/images/avatar.jpg';
import { useEditPostMutation } from '../../../../services/postsService';

const EditPostModal = ({ post, onClose }) => {
    const [editPostInput, setEditPostInput] = useState(post.content);
    const [editPost] = useEditPostMutation();

    const saveBtnHandler = () => {
        const editedPost = { ...post };
        editedPost.content = editPostInput;
        editPost(editedPost);
        onClose({ open: false, post: null })
    }

    return (
        <Modal onClose={onClose} title='Edit Post'>
            <div className='edit-post'>
                <div className="edit-post__header">
                    <div className="edit-post__img">
                        <Link to='/'>
                            <img className="edit-post__avatar _avatar_small" src={avatar} alt='avatar' />
                        </Link>
                    </div>
                    <div className="edit-post__user">
                        <div className="edit-post__username">Anna Sandpiper</div>
                        <div className="edit-post__date"></div>
                    </div>
                </div>
                <textarea className="edit-post__content _input"
                    name="edit-post-input"
                    id="edit-post-input"
                    value={editPostInput}
                    onChange={(e) => setEditPostInput(e.target.value)}
                    autoFocus ></textarea>
                <div className="edit-post__footer">
                    <button className="edit-post__save _btn" onClick={saveBtnHandler}>Save</button>
                </div>
            </div>
        </Modal>
    );
};

export default EditPostModal;