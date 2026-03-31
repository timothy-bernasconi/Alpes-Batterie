import React from 'react'
import styles from './InfosContact.module.scss'

const InfosContact = ({customClass}) => {

    const phones = [
        { agence: "Annemasse", tel: "04 50 50 50 50" },
        { agence: "Thonon-les-Bains", tel: "04 50 50 50 50" },
        { agence : "Sallanches", tel : "04 50 50 50 50"}
       
    ]

  return (

    <div className={`${styles.wrapper} ${customClass || ''}`}>
        <h3 className={styles.title}>
        <i className="fa-solid fa-phone-volume"></i> Nos Agences </h3>

        {phones.map((item,index) => (
        <div key={index} className={styles.group}>
            <p>{item.agence}</p>
            <p>{item.tel}</p>
        </div>
        ))}


    </div>
  )
}

export default InfosContact