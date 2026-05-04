'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './Sponsors.module.scss';

const Sponsors = () => {

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


  const partenaires = [
    { nom: "Racing Rugby", image: "/assets/partenaires/rc-faucigny-mt-blanc.jpg", url : 'https://www.facebook.com/rcfmb/?locale=fr_FR' },
    { nom: "Black Panthers Thonon", image: "/assets/partenaires/black-panthers.png", url :'https://www.les-black-panthers.org/FootUS/' },
    { nom: "The R5 Team", image: "/assets/partenaires/r5-team.jpg", url :'https://www.instagram.com/the_r5_team' },
    { nom: "Ski Club Pays Rochoix", image: "/assets/partenaires/ski-club-pays-rochois.jpg", url :'https://www.skiclubpaysrochois.com/' }
  ];

  return (
    <section 
  ref={sectionRef} 
  className={`${styles.container} ${isVisible ? styles.animate : ''}`}
>
      <h2 className={styles.title}>Notre communauté</h2>
      <p className={styles.introText}>Alpes Batteries, votre partenaire de choix.</p>

      <div className={styles.mainLogoWrapper}>
        <img src="/assets/Logo-Alpes-BATTERIES_AGIR-sans-baseline-1.png" alt="Logo Agir Alpes Batteries" />
      </div>

      <p className={styles.paragraph}>
        Chez Alpes Batteries, nous propulsons les initiatives locales. Plus que du sponsoring, nous nouons des partenariats de confiance avec ceux qui font bouger notre territoire. Entreprises, sportifs ou associations : nous sommes fiers de soutenir vos projets et de partager avec vous notre exigence de performance.
      </p>

      <p className={styles.subParagraph}>
        Vous avez un projet ou un défi à relever ? Alpes Batteries sponsorise les initiatives de notre territoire. Contactez-nous pour faire équipe !      </p>

      <div className={styles.buttonWrapper}>
        <a href="mailto:annemasse@alpesbatteries.com">
          <button>Devenir partenaire</button>
        </a>
      </div>

      <hr />

      <div className={styles.partnersGrid}>
        {partenaires.map((item, index) => (
          <div key={index} className={styles.partnerCard}>
            <a href={item.url}>
              <img 
              src={item.image} 
              alt={item.nom} 
              title={item.nom} 
            /></a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;