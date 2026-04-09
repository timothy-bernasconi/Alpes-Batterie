import React from 'react'
import styles from "./Presentation.module.scss";

const Presentation = () => {
  return (
    <section className={styles.wrapper}>

      <div className={styles.picture}>

      </div>
    



      <div className={styles.headerSection}>
        <h1>Alpes Batteries</h1>
        <p className={styles.introText}>
          Votre référence en matière d’énergie autonome implantée au cœur de la région annemassienne depuis 2007.
        </p>
      </div>

      <div className={styles.locations}>
  <span>Annemasse</span>
  <span>Thonon-les-Bains</span>
  <span>Sallanches</span>
</div>

     
      <div className={styles.gridServices}>
        <div className={styles.serviceCard}>
          <h3><i className="fa-regular fa-star"></i>Notre expertise</h3>
          <p>Spécialistes en batteries, piles, accumulateurs et solutions solaires avec des partenaires de prestige comme Banner, Fulmen ou Varta.</p>
        </div>

        <div className={styles.serviceCard}>
          <h3><i className="fa-solid fa-boxes-stacked"></i>Un choix vaste et qualitatif</h3>
          <p>Un assortiment vaste pour particuliers et professionnels, des piles classiques aux solutions techniques les plus complexes.</p>
        </div>

        <div className={styles.serviceCard}>
          <h3><i className="fa-solid fa-people-group"></i>Une équipe à votre écoute</h3>
          <p>Une équipe formée aux dernières innovations pour vous guider vers le produit le plus adapté à votre projet.</p>
        </div>

        <div className={styles.serviceCard}>
          <h3><i className="fa-solid fa-heart"></i>Présence forte en région</h3>
          <p>Un partenaire stratégique pour les entreprises de Haute-Savoie, de l’Ain et de Suisse, dédié à une expérience client d'excellence.</p>
        </div>

        <div className={styles.serviceCard}>
          <h3><i className="fa-solid fa-dolly"></i>Livraison pro gratuite</h3>
          <p>Une logistique de proximité avec des livraisons hebdomadaires gratuites couvrant l'ensemble du Grand Genève, de la Vallée de l'Arve jusqu'au Pays du Mont-Blanc et au littoral Lémanique.</p>
        </div>

        <div className={styles.serviceCard}>
          <h3><i className="fa-solid fa-battery-full"></i>Découvrez notre gamme</h3>
          <p>De l’énergie de démarrage (auto, moto, poids lourds, marine) aux solutions techniques avancées, nous couvrons l’intégralité de vos besoins en stockage et conversion d’énergie : piles industrielles, éclairage haute performance et équipements de charge professionnels.</p>
        </div>




      </div>

      <div className={styles.deliverySection}>
        <h3>Votre magasin ALPES BATTERIES SALLANCHES vous livre toutes les semaines sur les communes suivantes:</h3>

        <p>SALLANCHES ; PASSY ; SAINT GERVAIS ; COMBLOUX ; CORDON ; MEGEVE ; PRAZ SUR ARLY ; LES HOUCHES ; CHAMONIX ; ARGENTIERES ; VALLORCINE ; MAGLAND ;  LES CARROZ ;  FLAINE ; CLUSES</p>

        <p>* Nous contacter pour connaître les jours de la livraison chez vous.</p>

    

      </div>

          <div className={styles.button}>
            <button>Voir notre catalogue</button>
          </div>
         


      
    </section>
  )
}

export default Presentation;