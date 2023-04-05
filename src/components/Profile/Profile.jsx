import React from 'react';
import './Profile.scss';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import NewPost from './NewPost/NewPost';

const Profile = () => {
    return (
        <div className="profile _page-section">
            <div className="profile__header _section">
                <ProfileInfo />
            </div>
            <div className="profile__content content">
                <NewPost />
                <Posts />
            </div>
        </div>
    );
};

export default Profile;