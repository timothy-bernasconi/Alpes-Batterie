import React from 'react'
import MyForm from './components/Form';
import styles from './page.module.scss'
import Partenaires from '../components/Partenaires';
import GoogleMaps from './components/GoogleMaps'


const page = () => {
  return (
    <div>
      <div className={styles.wrapper}> 
       
        <h1 className={styles.title}>Nous contacter</h1>
        <p className={styles.paragraph}>Une question technique ou besoin d'un conseil expert pour votre batterie ? Nos équipes vous accueillent dans nos trois points de vente en Haute-Savoie. Remplissez le formulaire ci-dessous ou rendez-nous visite directement pour bénéficier d'un diagnostic et de solutions adaptées à vos besoins.</p>  

          <div className={styles.buttons}>
        
        <div> 
          <h2>Annemasse</h2>
          <button>04 50 37 62 85</button> 
          </div>

        <div>
             <h2>Thonon</h2>
             <button>04 50 90 97 16</button>
        </div>

        <div>
         <h2>Sallanches</h2>
         <button>04 50 16 28 53</button>
        </div>
        
         </div>

 
      
         
  
        <div className={styles.flexContainer}>
          <div className={styles.group}>
             <MyForm /> 
          </div>

          <div className={styles.wrapper}>
  
  <div className={styles.group}>
   

    <GoogleMaps lat={46.2043} lng={6.2793} title="Alpes Batteries - Annemasse" /> <br/>
    
  </div>

  <div className={styles.group}>
   
  
    <GoogleMaps lat={46.3575} lng={6.4552} title="Alpes Batteries - Thonon" /> <br/>
  </div>

  <div className={styles.group}>
   

    <GoogleMaps lat={45.9443} lng={6.6341} title="Alpes Batteries - Sallanches" /> <br/>
  </div>

</div>
        </div>
      </div>  
      <Partenaires />
    </div>
  )
}

export default page;