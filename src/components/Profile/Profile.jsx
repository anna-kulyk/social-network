import React from 'react';
import './Profile.scss';
import cover from '../../assets/images/cover.jpg';
import avatar from '../../assets/images/avatar.jpg';
import Posts from './Posts/Posts';

const Profile = () => {
    return (
        <div className="profile _page-section">
            <div className="profile__header _section">
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
            </div>
            <div className="profile__content content">
                <div className="content__new new-post _section">
                    <form action="" className="new-post__form">
                        <div className="new-post__row">
                            <div className="new-post__img">
                                <a href={'/'}>
                                    <img className="new-post__avatar _avatar_small" src={avatar} alt='avatar'/>
                                </a>
                            </div>
                            <input type="text" 
                                   className="new-post__input" 
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