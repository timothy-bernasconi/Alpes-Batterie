'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './Equipe.module.scss';

const Equipe = ({ titre, presentationEquipe, equipeAnnemasse }) => {
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`${styles.container} ${isVisible ? styles.animate : ''}`}
    >
      <h2>{titre}</h2>
      <p>{presentationEquipe}</p>

      <div className={styles.group}>
        {equipeAnnemasse.map((membre) => (
          <div className={styles.card} key={membre.id}>
            <div className={styles.wrapper}>
              <img src={membre.image} alt={membre.nom} className={styles.photo} />
            </div>
        
            <p className={styles.nomMembre}>{membre.nom}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Equipe;