import React from 'react'
import styles from './ReseauxSociaux.module.scss'

const ReseauxSociaux = () => {
  return (


    <div className={styles.wrapper}>

       <h2>Suivez-nous sur nos réseaux !</h2> 

       <div className={styles.container}>

        <a href="https://www.facebook.com/alpesbatteries"><p><i className="fa-brands fa-facebook"></i></p></a>
          <a href="https://www.instagram.com/alpesbatteries/"><p><i className="fa-brands fa-instagram"></i></p></a>
          <a href="https://www.linkedin.com/company/alpes-batteries/"><p><i className="fa-brands fa-linkedin-in"></i></p></a>
          <a href="https://www.youtube.com/@AlpesBatteries"><p><i className="fa-brands fa-youtube"></i></p></a>
       </div>



    </div>
  )
}

export default ReseauxSociaux