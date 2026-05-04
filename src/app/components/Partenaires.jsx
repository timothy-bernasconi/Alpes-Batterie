'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './Partenaires.module.scss'

const Partenaires = () => {

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
  

   
    const partners = [
        { nom: "Optima Batterie", image: "/assets/logo/3.png" },
        { nom: "Gys", image: "/assets/logo/4.svg" },
        { nom: "Exide", image: "/assets/logo/5.svg" },
        { nom: "Yuasa", image: "/assets/logo/6.svg" },
        { nom: "Trojan", image: "/assets/logo/7.svg" },
        { nom: "Led Lenser", image: "/assets/logo/8.svg" },
        { nom: "Ctek", image: "/assets/logo/9.svg" },
         { nom: "Vitron Energy", image: "/assets/logo/11.svg" },
         { nom: "Varta", image: "/assets/logo/12.svg" },
         { nom: "Duracell", image: "/assets/logo/13.svg" },
         { nom: "Noco", image: "/assets/logo/14.svg" },
         { nom: "Franius", image: "/assets/logo/15.svg" },
         { nom: "Sonnenschein", image: "/assets/logo/16.svg" },
         { nom: "LP", image: "/assets/logo/18.svg" }
      ]

      const mainPArtner = [
        { nom: "Banner", image: "/assets/logo/17.svg" }
      ]




    return (
        <div  ref={sectionRef} 
          className={`${styles.partnersSection} ${isVisible ? styles.animate : ''}`}>
            <h2>Nos Fournisseurs</h2>         

              <div className={styles.gridWrapper}>
                {mainPArtner.map((item, index) => (
                  <div key={index} className={styles.mainPartnerCard}>
        <img src={item.image} alt={item.nom} className={styles.mainLogo} title={item.nom} />
      </div>
                ))}


              </div>

               




  <div className={styles.gridWrapper}>
    {partners.map((item, index) => (
      <div key={index} className={styles.partnerCard}>
        <img src={item.image} alt={item.nom} className={styles.logo} title={item.nom} />
      </div>
    ))}
  </div>
           
</div>
    )
}

export default Partenaires