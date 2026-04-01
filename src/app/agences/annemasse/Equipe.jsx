import React from 'react'
import styles from './Equipe.module.scss'


const Equipe = () => {
    const equipeAnnemasse = [
        { id: 1, nom: "Virginie", image: '/assets/equipe/virginie.png' },
        { id: 2, nom: "Corentin", image: '/assets/equipe/corentin.png' },
        { id: 3, nom: "Fabien", image: '/assets/equipe/fabien.png' },
        { id: 4, nom: "Hugo", image: '/assets/equipe/hugo.png' },
        { id: 5, nom: "Edouard", image: '/assets/equipe/hugo.png' },
        { id: 6, nom: "Élodie", image: '/assets/equipe/elodie.png' },    
    ]

    return (
        <section className={styles.container}>
            <h2>Notre Équipe</h2>
            
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