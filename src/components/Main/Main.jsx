import React from 'react';
import './Main.scss';

const Main = (props) => {
    return (
        <main className='main'>
            <div className="main__container _container">
                <div className="main__body">
                    {props.children}
                </div>
            </div>
        </main>
    );
};

export default Main;