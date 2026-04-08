import React from 'react';
import styles from './BentoActu.module.scss';

const BentoActu = ({ titreSection, mainCard, kpiCard, eventCard }) => {
  return (
    <section className={styles.bentoSection}>
      <div className={styles.header}>
        <h2>{titreSection}</h2>
      </div>

      <div className={styles.bentoGrid}>
      
        <div className={`${styles.bentoItem} ${styles.bigPhoto}`}>
          <img src={mainCard.image} alt={mainCard.alt} />
          <div className={styles.overlay}>
            <h3>{mainCard.titre}</h3>
            <p>{mainCard.description}</p>
            {mainCard.details && <p>{mainCard.details}</p>}
          </div>
        </div>

   
        <div className={`${styles.bentoItem} ${styles.kpiCard}`}>
          <div className={styles.kpiContent}>
            <span className={styles.number}>{kpiCard.chiffre}</span>
            <p>{kpiCard.texte}</p>
            <span className={styles.thanks}>{kpiCard.merci}</span>
          </div>
        </div>

   
        <div className={`${styles.bentoItem} ${styles.recruitCard}`}>
          <img src={eventCard.image} alt={eventCard.alt} />
          <div className={styles.recruitOverlay}>
            <span className={styles.badge}>{eventCard.badge}</span>
            <h3>{eventCard.titre}</h3>
            <p>{eventCard.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoActu;