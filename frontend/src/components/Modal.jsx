import React from 'react';
import CreateRequest from './CreateRequest';
import style from '../assets/Styles/Modal.module.css';

const Modal = ({ onClose }) => {
  return (
    <div className={style.modalOverlay} onClick={onClose}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={style.closeButton}>×</button>
        <CreateRequest />
      </div>
    </div>
  );
}

export default Modal;
