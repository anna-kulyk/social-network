import React from 'react';
import './Friends.scss';
import Friend from './Friend/Friend';
import { useSelector } from 'react-redux';

const Friends = () => {

    const friends = useSelector((state) => state.friends.friendList);
    const friendElements = friends.map(friend => <Friend id={friend.id} name={friend.name}
        avatar={friend.avatar} key={friend.id} />);

    return (
        <div className='friends _section _page-section'>
            <div className="friends__body  ">
                <div className="friends__title _page-title">Friends</div>
                <div className="friends__list">
                    {friendElements}
                </div>
            </div>
        </div>
    );
};

export default Friends;