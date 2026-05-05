'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './Partenaires.module.scss';

const Partenaires = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
      
      // Sécurité : Vérification immédiate si déjà dans l'écran
      const rect = currentRef.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, []);

  const mainPArtner = [
    // Ajout de l'URL ici
    { nom: "Banner", image: "/assets/logo/banner.svg", url: "https://www.bannerbatterien.com/" }
  ];

  const partners = [
    { nom: "Optima Batterie", image: "/assets/logo/optima-batterie.png", url: "https://www.optimabatteries.com/" },
    { nom: "Gys", image: "/assets/logo/gys.svg", url: "https://www.gys.fr/" },
    { nom: "Exide", image: "/assets/logo/exide.png", url: "https://www.exidegroup.com/fr/fr" },
    { nom: "Yuasa", image: "/assets/logo/yuasa.svg", url: "https://www.yuasa.com/fr/" },
    { nom: "Trojan", image: "/assets/logo/trojan.svg", url: "https://www.trojanbattery.com/" },
    { nom: "Led Lenser", image: "/assets/logo/led-lenser.svg", url: "https://ledlenser.com/fr" },
    { nom: "Ctek", image: "/assets/logo/ctek.svg", url: "https://www.ctek.com/" },
    { nom: "Vitron Energy", image: "/assets/logo/vitron-energy.svg", url: "https://www.victronenergy.fr/" },
    { nom: "Varta", image: "/assets/logo/varta.png", url: "https://www.varta-automotive.com/fr-fr" },
    { nom: "Duracell", image: "/assets/logo/duracell.svg", url: "https://www.duracell.fr/" },
    { nom: "Noco", image: "/assets/logo/noco.svg", url: "https://no.co/" },
    { nom: "Fronius", image: "/assets/logo/fronius.svg", url: "https://www.fronius.com/fr-fr/france" },
    { nom: "LP", image: "/assets/logo/lp.svg", url: "https://www.landportbv.com/fr/brands/landport/" }
  ];

  return (
    <div ref={sectionRef} className={`${styles.partnersSection} ${isVisible ? styles.animate : ''}`}>
      <h2>Nos Fournisseurs</h2>

      {/* Partenaire Principal */}
      <div className={styles.gridWrapper}>
        {mainPArtner.map((item, index) => (
          <div key={index} className={styles.mainPartnerCard}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img src={item.image} alt={item.nom} className={styles.mainLogo} title={item.nom} />
            </a>
          </div>
        ))}
      </div>

      {/* Grille des autres partenaires */}
      <div className={styles.gridWrapper}>
        {partners.map((item, index) => (
          <div key={index} className={styles.partnerCard}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img src={item.image} alt={item.nom} className={styles.logo} title={item.nom} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partenaires;