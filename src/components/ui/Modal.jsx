import ReactDOM from 'react-dom';
import { useContext } from 'react';
import ModalContext from '../../store/ModalContext';

import "./modal.css";

const portalElement = document.getElementById('portal');

const Modal = ({title="Modal Title", children, ...props}) => {

    const {closeModal} = useContext(ModalContext);

    return ReactDOM.createPortal(
        <>
            <div className='modal-wrapper' onClick={closeModal}>
            </div>
            <div className='modal'>
                <h2>{title}</h2>
                {children}
            </div>
        </>
        ,
        portalElement
    )
}

export default Modal;