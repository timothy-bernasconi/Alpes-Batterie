import React from 'react'
import styles from './Partenaires.module.scss'

const Partenaires = () => {

   
    const partners = [
        { nom: "Optima Batterie", image: "/assets/logo/1.png" },
        { nom: "Fulmen", image: "/assets/logo/2.svg" },
        { nom: "Gys", image: "/assets/logo/4.svg" },
        { nom: "Exide", image: "/assets/logo/5.svg" },
        { nom: "Yuasa", image: "/assets/logo/6.svg" },
        { nom: "Trojan", image: "/assets/logo/7.svg" },
        { nom: "Led Lenser", image: "/assets/logo/8.svg" },
        { nom: "Ctek", image: "/assets/logo/9.svg" },
         { nom: "Crown Batterie", image: "/assets/logo/10.svg" },
         { nom: "Vitron Energy", image: "/assets/logo/11.svg" },
         { nom: "Varta", image: "/assets/logo/12.svg" },
         { nom: "Duracell", image: "/assets/logo/13.svg" },
         { nom: "Noco", image: "/assets/logo/14.svg" },
         { nom: "Franius", image: "/assets/logo/15.svg" },
         { nom: "Sonnenschein", image: "/assets/logo/16.svg" },
         { nom: "Banner", image: "/assets/logo/17.svg" },
         { nom: "LP", image: "/assets/logo/18.svg" }


       
    ]

    return (
        <div className={styles.partnersSection}>
            <h2>Nos Partenaires</h2>
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