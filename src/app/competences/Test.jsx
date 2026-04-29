import React from 'react';
import styles from "./Test.module.scss";

const Test = () => {
  const services = [
    { title: "Véhicules & Utilitaires", icon: "fa-car-battery", desc: "Des batteries adaptées à tous type de véhicule : moto, auto, camion." },
    { title: "Piles", icon: "fa-battery", desc: "Remplacement des piles de vos montres" },
    { title: "Produits", icon: "fa-warehouse", desc: "Plus de 5000 références de produits" },
    { title: "Disponibilité", icon: "fa-phone", desc: "Nous sommes disponibles du lundi au samedi pour vous servir." },
    { title: "Camping-Car", icon: "fa-caravan", desc: "Énergie stable pour votre confort." }
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.mainContainer}>
        <div className={styles.header}>
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