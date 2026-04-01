"use client"

import React from 'react'
import YouTube from 'react-youtube'
import styles from './Video.module.scss'

const Video = ({ videoId, title, channel }) => {
  const opts = {
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.playerCard}>
        <YouTube videoId={videoId} opts={opts} />
        <div className={styles.info}>
          <h3>{title}</h3>
          <p>{channel}</p>
        </div>
      </div>
    </div>
  )
}

export default Video