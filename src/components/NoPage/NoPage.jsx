import React from 'react';
import './NoPage.scss';
import { Link } from 'react-router-dom';

const NoPage = () => {
    return (
        <div className='nopage _section _page-section'>
            <p className="nopage__error-number">404</p>
            <p className="nopage__error-text">Oops... Page not found!</p>
            <Link className='nopage__btn _btn' to="/">Go Back</Link>
        </div>
    );
};

export default NoPage;