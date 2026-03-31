import React from 'react'
import styles from './Horaires.module.scss'

const Horaires = ({ customClass }) => {

    const planning = [
        { jour: "Lundi", matin: "8h30 - 12h", apresMidi: "14h - 18h30" },
        { jour: "Mardi", matin: "8h30 - 12h", apresMidi: "14h - 18h30" },
        { jour: "Mercredi", matin: "8h30 - 12h", apresMidi: "14h - 18h30" },
        { jour: "Jeudi", matin: "8h30 - 12h", apresMidi: "14h - 18h30" },
        { jour: "Vendredi", matin: "8h30 - 12h", apresMidi: "14h - 18h30" },
        { jour: "Samedi", matin: "8h30 - 12h", apresMidi: "14h - 17h30" }
    ]

    return (
        <div className={`${styles.wrapper} ${customClass || ''}`}>
              <h2>Nos horaires</h2>
              
            {planning.map((item, index) => (
                 
                <div key={index} className={styles.group}>  
                    <p className={styles.day}>{item.jour}</p>
                    <div className={styles.hours}>
                        <p>{item.matin}</p>
                        <p>{item.apresMidi}</p> 
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Horaires