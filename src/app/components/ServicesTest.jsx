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
          <p>Acteur de référence sur le marché de l'énergie, notre structure déploie une gamme complète allant du démarrage moteur aux systèmes industriels et éclairages techniques. Avec un stock permanent et une logistique réactive, nous assurons à nos clients une disponibilité immédiate et une performance durable.</p>
        </div>     

        <div className={styles.group}>
          <h3><i className="fa-solid fa-thumbs-up"></i> Proximité et logistique de performance</h3>
          <p>Partenaire de confiance implanté en Haute-Savoie, nous érigeons l'accompagnement personnalisé à travers une gestion logistique de pointe sur le Grand Genève. En misant sur un ancrage territorial fort et des processus de distribution agiles, nous garantissons à votre entreprise fluidité et réactivité.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesTest;