'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './Presentation.module.scss';

const Presentation = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className={`${styles.wrapper} ${isVisible ? styles.animate : ''}`}
    >
      <h1>Vos services de proximité en Haute-Savoie</h1>
      <h2>
        Au-delà de la vente, nos agences d'Annemasse (Ville-la-Grand), Thonon (Margencel) et Sallanches sont de véritables centres techniques pour votre énergie.
      </h2>

      <div className={styles.container}>
        <div className={styles.card}>
          <i className="fa-solid fa-car-battery"></i>
          <h3>Diagnostic et Test de Batterie Gratuit</h3>
          <p>Un doute sur votre démarrage avant l’hiver ou après un long hivernage ? Nos techniciens testent gratuitement votre batterie et votre circuit de charge sans rendez-vous.</p>
        </div>

        <div className={styles.card}>
          <i className="fa-solid fa-car"></i>
          <h3>Installation immédiate sur votre véhicule</h3>
          <p>Gagnez du temps et assurez-vous d'un montage professionnel. Pour chaque achat, nous pouvons réaliser la pose de votre nouvelle batterie directement sur notre parking.</p>
        </div>

        <div className={styles.card}>
          <i className="fa-solid fa-recycle"></i>
          <h3>Point de collecte et Recyclage</h3>
          <p>Soucieux de l'environnement montagnard, nos magasins sont des points de collecte agréés. Rapportez-nous vos batteries usagées pour leur valorisation.</p>
        </div>

        <div className={styles.card}>
          <i className="fa-solid fa-solar-panel"></i>
          <h3>Installation panneaux solaires </h3>
          <p>Expert en énergie durable, nos magasins vous accompagnent de l'étude à l'installation. Sollicitez-nous pour vos panneaux solaires et optimisez votre consommation..</p>
        </div>


      </div>
    </div>
  );
};

export default Presentation;