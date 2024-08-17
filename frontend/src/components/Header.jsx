import React, { useState } from 'react';
import style from "../assets/Styles/Header.module.css";
import Modal from './Modal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={style.headerContainer}>
      <div className={style.titleContainer}>
        <h1 className={style.title}>Abstract</h1>
        <span className={style.separator}>|</span>
        <p className={style.subtitle}>Help Center</p>
      </div>
      <div className={style.buttonContainer}>
        <button onClick={openModal} className={style.submitButton}>Submit a request</button>
      </div>
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
}

export default Header;
