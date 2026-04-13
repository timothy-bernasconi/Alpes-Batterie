import React from 'react'
import styles from './Electric.module.scss'

export const Electric = (videoSrc) => {

  return (
    <div className={styles.container}>
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
  )
}
