import React from 'react';
import './Profile.scss';
import avatar from '../../assets/images/avatar.jpg';
import Posts from './Posts/Posts';
import { Link } from 'react-router-dom';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <div className="profile _page-section">
            <div className="profile__header _section">
                <ProfileInfo />
            </div>
            <div className="profile__content content">
                <div className="content__new new-post _section">
                    <form action="" className="new-post__form">
                        <div className="new-post__row">
                            <div className="new-post__img">
                                <Link to='/'>
                                    <img className="new-post__avatar _avatar_small" src={avatar} alt='avatar'/>
                                </Link>
                            </div>
                            <input type="text" 
                                   className="new-post__input _input" 
                                   placeholder='What do you want to post?' />
                        </div>
                        <button className="new-post__btn _btn">Post</button>
                    </form>
                </div>
                <Posts />
            </div>
        </div>
    );
};

export default Profile;