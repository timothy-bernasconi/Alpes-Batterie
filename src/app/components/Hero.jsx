import React from 'react'
import styles from './Hero.module.scss';
import Horaires from './Horaires';

const Hero = () => {

  return (
    <div className={styles.container}>
      <img src="/assets/batterie.jpg" alt="Batterie" className={styles.bgImage} />
      <Horaires customClass={styles.horairesPosition} />
      

    </div>
  );
}

export default Hero