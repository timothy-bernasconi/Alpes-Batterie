import React from 'react'
import styles from './Equipe.module.scss'


const Equipe = ({titre, presentationEquipe, equipeAnnemasse}) => {
    
    return (
        <section className={styles.container}>
            <h2>{titre}</h2>
            <p>{presentationEquipe}</p>
            
            <div className={styles.group}>
                {equipeAnnemasse.map(membre => (
                    <div className={styles.card} key={membre.id}>
                        <div className={styles.wrapper}>
                            <img src={membre.image} alt={membre.nom} className={styles.photo} />
                        </div>
                                        </div>
                ))}
            </div>
        </section>
    )
}

export default Equipe