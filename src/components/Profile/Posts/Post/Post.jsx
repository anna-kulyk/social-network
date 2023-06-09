import React, { useEffect } from 'react';
import './Post.scss';
import { Link } from 'react-router-dom';
import { useGetPostQuery, useLikePostMutation } from '../../../../services/postsService';

const Post = ({ id, onEdit, onDelete }) => {

    const [likePost] = useLikePostMutation();
    const { isLoading, isFetching, data: post } = useGetPostQuery(id);
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
        onDelete({ open: true, post: post })
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
                    <Link to={`/profile/${post.author.id}`}>
                        <img className="post__avatar _avatar_small" src={post.author.avatar} alt='avatar' />
                    </Link>
                </div>
                <div className="post__user">
                    <div className="post__username">{post.author.name}</div>
                    <div className="post__date">{new Date(post.id).toLocaleDateString()}</div>
                </div>
            </div>
            <div className="post__content">{post.content}</div>
            <div className="post__footer">
                <button className={`post__like ${iconClass}`}
                    onClick={likeBtnClickHandler}
                    disabled={isFetching} >
                    {post.likes}
                </button>
                <div className='post__buttons'>
                    <button className='post__edit _icon-draw' onClick={editBtnCLickHadler} disabled={isFetching}></button>
                    <button className='post__delete _icon-trash-bin' onClick={deleteBtnClickHandler} disabled={isFetching}></button>
                </div>
            </div>
        </div>
    );
};

export default Post;