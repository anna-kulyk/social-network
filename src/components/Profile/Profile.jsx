import React from 'react';
import './Profile.scss';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import NewPost from './NewPost/NewPost';
import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '../../services/postsService';
import NoPage from '../NoPage/NoPage';

const Profile = () => {
    const params = useParams();
    const profileID = params.id ? params.id : 1;
    const { isLoading, isError, data: user } = useGetUserQuery(profileID);
    let userPosts = [];
    if (user) {
        userPosts = user.posts.map(post => post.id);
        userPosts.reverse();
    }

    if (isLoading) {
        return null
    }

    if (isError) {
        return <NoPage />
    }

    return (
        <div className="profile _page-section">
            <div className="profile__header _section">
                <ProfileInfo user={user} />
            </div>
            <div className="profile__content content">
                <NewPost />
                <Posts posts={userPosts} />
            </div>
        </div>
    );
};

export default Profile;