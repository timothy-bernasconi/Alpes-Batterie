import React from 'react'
import styles from './HomePic.module.scss'

const HomePic = ({titre, sousTitre, test, img}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.mainTitle}>{titre}</h1>
        <h2 className={styles.secondTitle}>{sousTitre}</h2>
        <h3 className={styles.electricText}>{test}</h3>
        <img src={img} alt="" className={styles.bg}/>
        
        <div className={styles.group}>
                <div className={styles.wrapper}>
                  <i className="fa-solid fa-location-dot"></i>
                  <h3 className={styles.thirdTitle}>Alpes Batteries Annemasse</h3>
                  <p className={styles.agencyText}>17 Rue de Montréal <br />74100 Ville-la-Grand</p>
                  <a href="/agences/annemasse"><button className={styles.button}>Voir l'agence</button></a>
                </div>
        
                 <div className={styles.wrapper}>
                  <i className="fa-solid fa-location-dot"></i>
                  <h3 className={styles.thirdTitle}>Alpes Batteries Thonon</h3>
                  <p className={styles.agencyText}>73 Rte du Crêt Gojon <br />74200 Margencel</p>
                  <a href="/agences/thonon"><button className={styles.button}>Voir l'agence</button></a>   
                </div>
        
                <div className={styles.wrapper}>
                  <i className="fa-solid fa-location-dot"></i>
                  <h3 className={styles.thirdTitle}>Alpes Batteries Sallanches</h3>
                  <p className={styles.agencyText}>1918 Av André Lasquin <br />74700 Sallanches </p>
                  <a href="/agences/sallanches"><button className={styles.button}>Voir l'agence</button></a>
                </div>
              </div>

    </div>
  )
}

export default HomePic