'use client';

import React from 'react';
import styles from './Hero.module.scss';

const Hero = ({ titre, videoSrc, fallbackImage }) => {
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

    </div>
  );
};

export default Hero;