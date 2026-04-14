"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './ServicesTest.module.scss';

const ServicesTest = () => {
 
  const fadeInUp = {
    offscreen: { 
      opacity: 0, 
      y: 60 
    },
    onscreen: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.2
      }
    }
  };

  return (
    <motion.div 
      className={styles.container}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <h2 className={styles.title}>Nos Services</h2>
      
      <div className={styles.wrapper}>
        <div className={styles.group}>    
          <h3><i className="fa-solid fa-star"></i> L'expertise au service de l'énergie</h3>
          <p>Spécialiste reconnu dans le stockage et la conversion d’énergie, votre enseigne propose une expertise pointue en batteries, piles et solutions solaires. En collaborant avec des partenaires de prestige tels que Banner, Fulmen ou Varta, vous garantissez des produits d’une fiabilité exceptionnelle.</p>
        </div> 

        <div className={styles.group}>      
          <h3><i className="fa-solid fa-people-group"></i> Accompagnement technique et complet</h3>
          <p>Votre offre se distingue par un assortiment vaste, couvrant l’intégralité des besoins en énergie, du démarrage de véhicule aux solutions industrielles et à l’éclairage de haute performance.</p>
        </div>     

        <div className={styles.group}>
          <h3><i className="fa-solid fa-thumbs-up"></i> Proximité et logistique de performance</h3>
          <p>Acteur stratégique dans la Haute-Savoie, vous placez l'expérience client au cœur de votre activité grâce à une logistique de proximité optimisée sur l'ensemble du Grand Genève.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesTest;