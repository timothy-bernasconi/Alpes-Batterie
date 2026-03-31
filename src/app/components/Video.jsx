import React from 'react'
import ReactPlayer from 'react-player'
import styles from './Video.module.scss'

const Video = () => {
  return (
    <div className={styles.wrapper}>
        <ReactPlayer src='https://www.youtube.com/watch?v=mEYvAeREpZc&t=46s' />
    </div>
  )
}

export default Video