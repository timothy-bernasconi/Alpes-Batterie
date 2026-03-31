import React from 'react'
import styles from './Partenaires.module.scss'

const Partenaires = () => {

   
    const partners = [
        { nom: "Optima Batterie", image: "/assets/logo/1.png" },
        { nom: "Fulmen", image: "/assets/logo/3.png" },
        { nom: "Gys", image: "/assets/logo/1.png" },
        { nom: "Exide", image: "/assets/logo/3.png" },
        { nom: "Yuasa", image: "/assets/logo/1.png" },
        { nom: "Trojan", image: "/assets/logo/3.png" },
        { nom: "Led Lenser", image: "/assets/logo/1.png" },
        { nom: "Ctek", image: "/assets/logo/3.png" },
        { nom: "Led Lenser", image: "/assets/logo/1.png" },
        { nom: "Ctek", image: "/assets/logo/3.png" },
        { nom: "Led Lenser", image: "/assets/logo/1.png" },
        { nom: "Ctek", image: "/assets/logo/3.png" },
    ]

    return (
        <div className={styles.partnersSection}>
            <h2>Nos Partenaires</h2>
  <div className={styles.gridWrapper}>
    {partners.map((item, index) => (
      <div key={index} className={styles.partnerCard}>
        <img src={item.image} alt={item.nom} className={styles.logo} />
      </div>
    ))}
  </div>
</div>
    )
}

export default Partenaires