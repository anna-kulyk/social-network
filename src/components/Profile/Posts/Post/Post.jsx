import React, { useEffect } from 'react';
import './Post.scss';
import avatar from '../../../../assets/images/avatar.jpg';
import { Link } from 'react-router-dom';
import { useGetPostQuery, useLikePostMutation } from '../../../../services/postsService';

const Post = ({ id }) => {

    const [likePost] = useLikePostMutation();
    const { isLoading, data: post } = useGetPostQuery(id);
    let iconClass = post?.liked ? "_icon-like-filled" : "_icon-like";

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

    useEffect(() => { }, [post]);

    if (isLoading) {
        return <div></div>
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
            <button className={`post__like ${iconClass}`} onClick={likeBtnClickHandler}>{post.likes}</button>
        </div>
    );
};

export default Post;