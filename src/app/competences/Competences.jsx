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
          <p>Plus qu'un simple objet, votre montre est souvent un souvenir ou un héritage précieux que nous traitons avec le plus grand soin. Notre service de remplacement utilise des piles de haute qualité pour préserver l'intégrité de votre pièce et lui redonner vie.</p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Test de batteries et de circuit de charge :</h3>
          <p>Une équipe formée aux dernières innovations pour vous guider vers le produit le plus adapté à votre projet.</p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Mise en place d’un coupe-circuit </h3>
          <p>Le coupe-circuit est une mesure de sécurité cruciale pour tout véhicule qui n’est pas utilisé au quotidien. Il permet d’éviter les risques de fuites électriques susceptibles de décharger votre batterie prématurément. </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Batterie de démarrage (Camion)</h3>
          <p>Nous offrons des batteries de démarrage solides, conçues pour délivrer une puissance optimale et garantir une longévité accrue, même dans les situations les plus exigeantes.</p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Camping-Car : </h3>
          <p>Un camping-car est une maison sur roues, nécessitant une alimentation constante pour tout, de l’éclairage aux appareils électroménagers. Nos batteries pour camping-cars sont conçues pour fournir une puissance stable et fiable</p>
        </div>




      </div>

          <div className={styles.button}>
            <a href="/catalogue"><button>Voir notre catalogue</button></a>
           <a href="https://www.bannerbatterien.com/fr/Affectations-batteries/VL-VUL"><button>Rechercher une batterie</button></a>
          </div>
         


      
    </section>
  )
}

export default Competences;