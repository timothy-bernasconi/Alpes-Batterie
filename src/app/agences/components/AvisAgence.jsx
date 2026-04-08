
import React from 'react';
import styles from './AvisAgence.module.scss';


const AvisAgence = ({ titre, listeAvis }) => {
  return (
    <section className={styles['container-avis']}>

      <h2>{titre}</h2>
      
      <div className={styles.group}>
      
        {listeAvis.map((rev) => (
          <div key={rev.id} className={`${styles.card} ${styles['review-card']}`}>
            <div className={styles['quote-icon']}>“</div>
            <div className={styles.stars}>
              {"★".repeat(rev.star)}{"☆".repeat(5 - rev.star)}
            </div>
            <p className={styles['review-text']}>{rev.text}</p>
            <span className={styles['client-name']}>{rev.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AvisAgence;