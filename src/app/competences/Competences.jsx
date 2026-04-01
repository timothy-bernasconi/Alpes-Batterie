import React from 'react'
import styles from "./Competences.module.scss";

const Competences = () => {
  return (
    <section className={styles.wrapper}>

      <div className={styles.picture}>

      </div>
    
      <div className={styles.headerSection}>
        <h1>Nos compétences</h1>
        <p className={styles.introText}>
         Chez Alpes Batteries, nous croyons fermement que chaque client est unique et mérite une attention particulière. C’est la raison pour laquelle nous privilégions avant tout le rapport humain, en mettant l’accent sur un accompagnement personnalisé
        </p>
      </div>

      
      <div className={styles.gridServices}>
        <div className={styles.serviceCard}>
          <h3>Changement Batteries (tous types de véhicules) :</h3>
          <p>Quel que soit votre véhicule, de la moto à l'utilitaire, nos experts identifient et remplacent votre batterie avec rapidité et efficacité. Nous disposons d'un stock important pour répondre immédiatement à chaque besoin, du plus courant au plus spécifique.</p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Changement piles de montre </h3>
          <p>Plus qu'un simple objet, votre montre est souvent un souvenir ou un héritage précieux que nous traitons avec le plus grand soin. Notre service de remplacement utilise des piles de haute qualité pour préserver l'intégrité de votre pièce et lui redonner vie durablement.</p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Test de batteries et de circuit de charge :</h3>
          <p>Une équipe formée aux dernières innovations pour vous guider vers le produit le plus adapté à votre projet.</p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Une présence forte en région</h3>
          <p>Un partenaire stratégique pour les entreprises de Haute-Savoie, de l’Ain et de Suisse, dédié à une expérience client d'excellence.</p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Livraison gratuite pour les professionnels</h3>
          <p>Une logistique de proximité avec des livraisons hebdomadaires gratuites couvrant l'ensemble du Grand Genève, de la Vallée de l'Arve jusqu'au Pays du Mont-Blanc et au littoral Lémanique.</p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Découvrez notre gamme</h3>
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
            <button>Rechercher une batterie</button>
          </div>
         


      
    </section>
  )
}

export default Competences;