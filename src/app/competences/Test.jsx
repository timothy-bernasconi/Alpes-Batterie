import React from 'react';
import styles from "./Test.module.scss";

const Test = () => {
  const services = [
    { title: "Véhicules & Utilitaires", icon: "fa-car-battery", desc: "Moto, auto, camion : stock immédiat." },
    { title: "Piles", icon: "fa-battery", desc: "Piles de haute qualité pour vos montres." },
    { title: "Diagnostic", icon: "fa-microchip", desc: "Tests complets circuits et batteries." },
    { title: "Sécurité", icon: "fa-bolt", desc: "Installation de coupe-circuit expert." },
    { title: "Camping-Car", icon: "fa-caravan", desc: "Énergie stable pour votre confort." }
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.mainContainer}>
        <div className={styles.header}>
          <span className={styles.badge}>Expertise locale</span>
          <h1>Nos compétences</h1>
          <p>Un accompagnement humain pour toutes vos solutions d'énergie.</p>
        </div>

        <div className={styles.expertGrid}>
          {services.map((s, i) => (
            <div key={i} className={styles.expertCard}>
              <div className={styles.iconWrapper}>
                <i className={`fa-solid ${s.icon}`}></i>
              </div>
              <h3>{s.title}</h3>
              <div className={styles.revealText}>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <a href="/catalogue" className={styles.primary}>Voir le catalogue</a>
          <a href="#" className={styles.secondary}>Rechercher une batterie</a>
        </div>
      </div>
    </section>
  );
};

export default Test;