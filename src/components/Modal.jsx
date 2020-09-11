import React from 'react';
import ReactDOM from 'react-dom'

export default function Modal({isOpen, children}){
    if(!isOpen) return null

    return ReactDOM.createPortal(
        <div className="modal-borrow">
            {children}
        </div>,
        document.getElementById('portal')
    )
}