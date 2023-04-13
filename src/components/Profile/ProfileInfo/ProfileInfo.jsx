import React from 'react';
import './ProfileInfo.scss';
import cover from '../../../assets/images/cover.jpg';

const ProfileInfo = ({ user }) => {
    return (
        <>
            <img className="profile__cover" src={cover} alt='cover' />
            <div className="profile__user">
                <div className="profile__photo">
                    <img className="profile__avatar" src={user.avatar} alt='avatar' />
                </div>
                <div className="profile__info">
                    <div className="profile__name">{user.name}</div>
                    <div className="profile__location _icon-home">Lives in
                        <span className="profile__city"> {user.address}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileInfo;