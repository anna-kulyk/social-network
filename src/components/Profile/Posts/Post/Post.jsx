import React, { useEffect } from 'react';
import './Post.scss';
import avatar from '../../../../assets/images/avatar.jpg';
import { Link } from 'react-router-dom';
import { useGetPostQuery, useLikePostMutation, useDeletePostMutation } from '../../../../services/postsService';

const Post = ({ id, onEdit }) => {

    const [likePost] = useLikePostMutation();
    const [deletePost] = useDeletePostMutation();
    const { isLoading, data: post } = useGetPostQuery(id);
    const iconClass = post?.liked ? "_icon-like-filled" : "_icon-like";

    const likeBtnClickHandler = () => {
        const likedPost = { ...post };
        if (likedPost.liked) {
            likedPost.likes -= 1;
            likedPost.liked = false;
        }
        else {
            likedPost.likes += 1;
            likedPost.liked = true;
        }
        likePost(likedPost);
    }

    const deleteBtnClickHandler = () => {
        deletePost(post.id)
    }

    const editBtnCLickHadler = () => {
        onEdit({ open: true, post: post });
    }

    useEffect(() => { }, [post]);

    if (isLoading) {
        return null
    }

    return (
        <div className="posts__item post _section">
            <div className="post__header">
                <div className="post__img">
                    <Link to='/'>
                        <img className="post__avatar _avatar_small" src={avatar} alt='avatar' />
                    </Link>
                </div>
                <div className="post__user">
                    <div className="post__username">Anna Sandpiper</div>
                    <div className="post__date"></div>
                </div>
            </div>
            <div className="post__content">{post.content}</div>
            <div className="post__footer">
                <button className={`post__like ${iconClass}`} onClick={likeBtnClickHandler}>{post.likes}</button>
                <div className='post__buttons'>
                    <button className='post__edit _icon-draw' onClick={editBtnCLickHadler}></button>
                    <button className='post__delete _icon-trash-bin' onClick={deleteBtnClickHandler}></button>
                </div>
            </div>
        </div>
    );
};

export default Post;