import React from 'react';
import './Profile.scss';
import cover from '../../assets/images/cover.jpg';
import avatar from '../../assets/images/avatar.jpg';

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__header _section">
                <img className="profile__cover" src={cover} alt='cover'/>
                <div className="profile__user">
                    <img className="profile__avatar" src={avatar} alt='avatar'/>
                    <div className="profile__info"></div>
                </div>
            </div>
            <div className="profile__posts posts">
                <div className="posts__new new-post _section">
                    <form action="" className="new-post__form">
                        <div className="new-post__row">
                            <div className="new-post__img">
                                <a href={'/'}>
                                    <img className="new-post__avatar" src={avatar} alt='avatar'/>
                                </a>
                            </div>
                            <input type="text" 
                                   className="new-post__input" 
                                   placeholder='What do you want to post?' />
                        </div>
                        <button className="new-post__btn _btn">Post</button>
                    </form>
                </div>
                <div className="posts__all">
                    <div className="posts__title">My posts</div>
                    <div className="posts__list">
                        <div className="posts__item post _section">post</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;