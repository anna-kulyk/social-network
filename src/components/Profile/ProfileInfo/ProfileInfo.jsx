import React from 'react';
import './ProfileInfo.scss';
import cover from '../../../assets/images/cover.jpg';
import avatar from '../../../assets/images/avatar.jpg';

const ProfileInfo = () => {
    return (
        <>
            <img className="profile__cover" src={cover} alt='cover'/>
                <div className="profile__user">
                    <div className="profile__photo">
                        <img className="profile__avatar" src={avatar} alt='avatar'/>
                    </div>
                    <div className="profile__info">
                        <div className="profile__name">Anna Sandpiper</div>
                        <div className="profile__location _icon-home">Lives in
                            <span className="profile__city"> Reston, Virginia</span>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default ProfileInfo;