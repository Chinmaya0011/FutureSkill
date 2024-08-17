import React from 'react';
import style from "../assets/Styles/Footer.module.css"; // Import CSS module

const Footer = () => {
  return (
    <div className={style.Footer}>
    <div className={style.footerContainer}>
      <div className={style.footerSection}>
        <p className={style.footerTitle}>Abstract</p>
        <ul className={style.footerList}>
          <li className={style.footerItem}>Branches</li>
        </ul>
      </div>
      <div className={style.footerSection}>
        <p className={style.footerTitle}>Resources</p>
        <ul className={style.footerList}>
          <li className={style.footerItem}>Blog</li>
          <li className={style.footerItem}>Help Center</li>
          <li className={style.footerItem}>Release Notes</li>
          <li className={style.footerItem}>Status</li>
        </ul>
      </div>
      <div className={style.footerSection}>
        <p className={style.footerTitle}>Community</p>
        <ul className={style.footerList}>
          <li className={style.footerItem}>Twitter</li>
          <li className={style.footerItem}>LinkedIn</li>
          <li className={style.footerItem}>Facebook</li>
          <li className={style.footerItem}>Dribbble</li>
          <li className={style.footerItem}>Podcast</li>
        </ul>
      </div>
      <div className={style.footerSection}>
        <div className={style.footerSubSection}>
          <p className={style.footerTitle}>Company</p>
          <ul className={style.footerList}>
            <li className={style.footerItem}>About Us</li>
            <li className={style.footerItem}>Careers</li>
            <li className={style.footerItem}>Legal</li>
          </ul>
        </div>
        <div className={style.footerSubSection}>
          <p className={style.footerTitle}>Contact Us</p>
          <ul className={style.footerList}>
            <li className={style.footerItem}>imchinu17@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className={style.footerBottom}>
        <p className={style.footerLogo}>Logo</p>
        <ul className={style.footerList}>
          <li className={style.footerItem}>© Copyright 2021</li>
          <li className={style.footerItem}>Abstract Studio Design, Inc.</li>
          <li className={style.footerItem}>All Rights Reserved</li>
        </ul>
      </div>
    </div></div>
  );
}

export default Footer;
