import React from 'react'
import styles from './Services.module.scss'

const Services = () => {


  return (


    <div className={styles.container}>

  <h2 className={styles.title}>Nos Services</h2>
   
    <div className={styles.wrapper}>
      

        <div className={styles.group}>
            <h3><i className="fa-solid fa-star"> </i> L'expertise au service de l'énergie</h3>
            <p>Spécialiste reconnu dans le stockage et la conversion d’énergie, votre enseigne propose une expertise pointue en batteries, piles et solutions solaires. En collaborant avec des partenaires de prestige tels que Banner, Fulmen ou Varta, vous garantissez des produits d’une fiabilité exceptionnelle.</p>
        </div>

        
        <div className={styles.group}>
            <h3><i className="fa-solid fa-people-group"></i> Un accompagnement technique et complet</h3>
            <p>Votre offre se distingue par un assortiment vaste, couvrant l’intégralité des besoins en énergie, du démarrage de véhicules (auto, moto) aux solutions industrielles et à l’éclairage de haute performance. Au-delà du produit, une équipe d’experts formée aux dernières innovations technologiques assure un conseil personnalisé pour chaque projet. </p>
        </div>

         <div className={styles.group}>
            <h3> <i className="fa-solid fa-thumbs-up"></i> Proximité et logistique de performance</h3>
            <p>Acteur stratégique dans la Haute-Savoie, vous placez l'expérience client au cœur de votre activité grâce à une logistique de proximité optimisée. Vous offrez ainsi un service de livraison professionnel gratuit et hebdomadaire sur l'ensemble du Grand Genève, de la Vallée de l'Arve jusqu'au littoral Lémanique.</p>
        </div>


    </div>
     </div>
  )
}

export default Services