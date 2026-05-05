import React from 'react'
import styles from './Livraison.module.scss'

const Livraison = () => {
  return (

    <div className={styles.container}>
       

        <div className={styles.wrapper}>
            
            <div className={styles.card}>
                <h3>Alpes Batteries Annemasse</h3>
                <span>Zones de livraison :</span>
                <p>Annemasse, Bonneville, Bons-en-Chablais, Cruseilles, Douvaine, La Roche-sur-Foron, Marignier, Reignier, St-Julien-en-Genevois, St-Pierre-en-Faucigny, Veigy-Foncenex</p>

            </div>

            <div className={styles.card}>
                <h3>Alpes Batteries Sallanches</h3>
                <span>Zones de livraison :</span>
                <p>
                    Abondance, Anthy-sur-Léman, Bellevaux, Bernex, Châtel, Évian-les-Bains, Excenevex, Perrignier, Sciez, Thonon-les-Bains, Vacheresse </p>

            </div>

             <div className={styles.card}>
                <h3>Alpes Batteries Thonon</h3>
                <span>Zones de livraison :</span>
                <p>Chamonix, Cluses, Contamines-Montjoie, Domancy, Magland, Megève, Passy, Samoëns, Sixt-Fer-à-Cheval, St-Gervais-les-Bains</p>

            </div>


            
        </div>


    </div>
  )
}

export default Livraison