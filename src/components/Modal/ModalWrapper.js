import React from 'react';
import ReactDom from 'react-dom';
import Modal from './Modal';

const ModalWrapper = (props) => {
    return ReactDom.createPortal(
        <Modal props={props} />,
        document.getElementById('modal-wrapper')
    );
}

export default ModalWrapper;