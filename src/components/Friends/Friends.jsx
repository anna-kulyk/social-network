import React from 'react';
import './Friends.scss';
import Friend from './Friend/Friend';

const Friends = () => {

    const friendElements = [];

    return (
        <div className='friends _section _page-section'>
            <div className="friends__body  ">
                <div className="friends__title _page-title">Friends</div>
                <div className="friends__list">
                    {friendElements}
                    <Friend />
                </div>
            </div>
        </div>
    );
};

export default Friends;