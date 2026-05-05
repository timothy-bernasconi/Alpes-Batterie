import React from 'react'
import styles from "./Presentation.module.scss";

const Presentation = () => {
  return (
    
    <section className={styles.wrapper}>

      {/* <div className={styles.picture}>

      </div> */}
    



      <div className={styles.headerSection}>
        <h1>Alpes Batteries</h1>
        <p className={styles.introText}>
          Votre référence en matière d’énergie autonome implantée au cœur de la région annemassienne depuis 2007.
        </p>
      </div>

      <div className={styles.locations}>
  <a href="/agences/annemasse"><span>Annemasse</span></a>
  <a href="/agences/thonon"><span>Thonon-les-Bains</span></a>
  <a href="/agences/sallanches"><span>Sallanches</span></a>
</div>

     
      <div className={styles.gridServices}>
        <div className={styles.serviceCard}>
          <i className="fa-regular fa-star"></i>
          <h3>Notre expertise</h3>
          <p>Spécialistes en batteries, piles, accumulateurs et solutions solaires avec des partenaires de prestige comme Banner, Fulmen ou Yuasa.</p>
        </div>

        <div className={styles.serviceCard}>
          <i className="fa-solid fa-boxes-stacked"></i>
          <h3>Un choix vaste et qualitatif</h3>
          <p>Un assortiment vaste pour particuliers et professionnels, des piles classiques aux solutions techniques les plus complexes.</p>
        </div>

        <div className={styles.serviceCard}>
          <i className="fa-solid fa-people-group"></i>
          <h3>Une équipe à votre écoute</h3>
          <p>Une équipe formée aux dernières innovations pour vous guider vers le produit le plus adapté à votre projet.</p>
        </div>

        <div className={styles.serviceCard}>
          <i className="fa-solid fa-heart"></i>
          <h3>Présence forte en région</h3>
          <p>Un partenaire stratégique pour les entreprises de Haute-Savoie, de l’Ain et de Suisse, dédié à une expérience client d'excellence.</p>
        </div>

        <div className={styles.serviceCard}>
          <i className="fa-solid fa-dolly"></i>
          <h3>Livraison pro gratuite</h3>
          <p>Une logistique de proximité avec des livraisons gratuites couvrant le Genevois, la Vallée de l'Arve jusqu'au Pays du Mont-Blanc et au Chablais.</p>
        </div>

        <div className={styles.serviceCard}>
          <i className="fa-solid fa-battery-full"></i>
          <h3>Découvrez notre gamme</h3>
          <p>De l’énergie de démarrage (auto, moto, poids lourds) aux solutions techniques avancées, nous couvrons l’intégralité de vos besoins : piles, éclairage et équipements professionnels.</p>
        </div>




      </div>

          <div className={styles.button}>
            <a href="/fournisseurs"><button>Voir notre catalogue</button></a>
          </div>
         


      
    </section>
  )
}

export default Presentation;