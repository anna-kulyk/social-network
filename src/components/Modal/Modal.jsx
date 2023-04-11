import React from 'react';
import './Modal.scss';
import useLockBodyScroll from '../../hooks/use-lock-body-scroll';

const Modal = (props) => {
    useLockBodyScroll();

    const closeBtnHandler = () => {
        props.onClose({ open: false });
    }

    return (
        <div className='modal'>
            <div className='modal__body _section'>
                <div className='modal__header'>
                    <div className="modal__title _page-title">{props.title}</div>
                    <button className="modal__close-btn _icon-cross" onClick={closeBtnHandler}></button>
                </div>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;