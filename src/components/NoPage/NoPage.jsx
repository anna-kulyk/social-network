import React from 'react';
import './NoPage.scss';
import { useNavigate } from 'react-router-dom';

const NoPage = () => {

    const navigate = useNavigate();
    const goBackHandler = () => {  
        navigate(-1);
    };

    return (
        <div className='nopage _section _page-section'>
            <p className="nopage__error-number">404</p>
            <p className="nopage__error-text">Oops... Page not found!</p>
            <button className='nopage__btn _btn' onClick={goBackHandler}>Go Back</button>
        </div>
    );
};

export default NoPage;