import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'

function Modal(props) {
    return ReactDOM.createPortal(
        <div className={"Modal"}>
            <div className={"Modal__container"}>
                <button className={"Modal__close-button"}>
                    x
                </button>
                {
                    props.children
                }
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export default Modal;
