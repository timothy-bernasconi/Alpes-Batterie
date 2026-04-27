'use client';

import React from 'react';
import styles from './Hero.module.scss';
import Horaires from '../../components/Horaires';

const Hero = ({ titre, videoSrc, fallbackImage, phone, email }) => {
  return (
    <div className={styles.container}>

      <h1 className={styles.mainTitle}>{titre}</h1>
     
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={fallbackImage} 
        className={styles.bgVideo}
      >
        <source src={videoSrc} type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>

      <div className={styles.horairesPosition}>
        <Horaires />
      </div>

      <div className={styles.phonesPosition}>
        <button className={styles.btn}>{phone}</button>
        <button className={styles.btn}>{email}</button>
      </div>
    </div>
  );
};

export default Hero;