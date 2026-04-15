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
    ];

  
    const planningGroupe = planning.reduce((acc, curr) => {
        const horairesCle = `${curr.matin}-${curr.apresMidi}`;
        const dernierGroupe = acc[acc.length - 1];

   
        if (dernierGroupe && dernierGroupe.horairesCle === horairesCle) {
            dernierGroupe.jours.push(curr.jour);
        } else {
        
            acc.push({
                jours: [curr.jour],
                horairesCle: horairesCle,
                matin: curr.matin,
                apresMidi: curr.apresMidi
            });
        }
        return acc;
    }, []);

    return (
        <div className={`${styles.wrapper} ${customClass || ''}`}>
            <h2>Nos horaires</h2>
            
            {planningGroupe.map((groupe, index) => {
                const labelJours = groupe.jours.length > 1 
                    ? `${groupe.jours[0]} au ${groupe.jours[groupe.jours.length - 1]}`
                    : groupe.jours[0];

                return (
                    <div key={index} className={styles.group}>  
                        <p className={styles.day}>{labelJours}</p>
                        <div className={styles.hours}>
                            <p>{groupe.matin}</p>
                            <p>{groupe.apresMidi}</p> 
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Horaires;