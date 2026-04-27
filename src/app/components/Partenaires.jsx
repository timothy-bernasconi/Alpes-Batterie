import React from 'react'
import styles from './Partenaires.module.scss'

const Partenaires = () => {

   
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
        <div className={styles.partnersSection}>
            <h2>Nos Fournisseurs</h2>

            <p style={{fontSize : "1.3rem"}}>Chez Alpes Batteries, nous croyons qu'une solution d'énergie ne vaut que par la qualité des composants qui la constituent. C'est pourquoi nous avons tissé des relations de confiance avec les leaders mondiaux et européens de la fabrication d'accumulateurs.</p>

            <p style={{color : "#9f9f9f", paddingTop:"2rem", fontSize : "1.1rem"}}>Nous ne nous contentons pas de distribuer des produits ; nous sélectionnons des partenaires qui partagent nos exigences en matière de durabilité et de performance. Nos fournisseurs sont choisis selon des critères stricts : </p>

            <div className={styles.container}>
              <span>Disponibilité</span>
              <span>Fiabilité</span>
              <span>Efficacité</span>
            </div>

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