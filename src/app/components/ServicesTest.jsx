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
          <i className="fa-solid fa-star"></i>
          <h3> Solutions de Démarrage</h3>
          <p>Spécialiste du démarrage en Haute-Savoie, Alpes Batteries propose un stock permanent pour voitures, motos et poids lourds. Retrouvez les marques Varta, Banner et Fulmen. Nos batteries garantissent une puissance fiable et durable, adaptée aux conditions climatiques alpines, pour particuliers et professionnels.</p>
        </div> 

        <div className={styles.group}>     
          <i className="fa-solid fa-sun"></i> 
          <h3> Énergie Autonome et Solaire</h3>
          <p>Optimisez votre indépendance avec nos solutions solaires et batteries à décharge lente. Nous fournissons panneaux, convertisseurs et chargeurs pour camping-cars ou sites isolés. Alpes Batteries vous accompagne dans la conception de systèmes d’énergie nomade performants, avec un matériel technique de haute qualité.</p>
        </div>     

        <div className={styles.group}>
          <i className="fa-solid fa-battery"></i>
          <h3> Piles et Accumulateurs</h3>
          <p>Retrouvez un catalogue complet de piles et accumulateurs pour tous vos usages, du quotidien à l’industrie. Nous distribuons des solutions d'éclairage technique et des batteries spécifiques pour vos équipements professionnels. Alpes Batteries assure la fourniture de petite énergie avec une fiabilité maximale.</p>
        </div>

        <div className={styles.group}>
          <i className="fa-solid fa-truck"></i>
          <h3> Livraison Gratuite (Pros)</h3>
          <p>Alpes Batteries simplifie votre logistique avec une livraison hebdomadaire gratuite pour les professionnels. Nos tournées couvrent le Chablais, le pays du MontBlanc, la Vallée de l'Arves et le Genevois. Profitez de la réactivité d'un partenaire local pour l'approvisionnement de votre flotte sans frais de transport supplémentaires.</p>
        </div>

        <div className={styles.group}>
          <i className="fa-solid fa-wrench"></i>
          <h3>Diagnostic et Conseil Expert (Pros)</h3>
          <p>Bénéficiez de l'expertise Alpes Batteries dans nos agences d'Annemasse, Thonon et Sallanches. Nos techniciens réalisent le diagnostic gratuit de vos batteries et vous conseillent la solution la plus adaptée. Profitez d'un service de proximité pour tester, charger et entretenir durablement vos équipements.</p>
        </div>

        



      </div>
    </motion.div>
  );
};

export default ServicesTest;