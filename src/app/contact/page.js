import React from 'react'
import MyForm from './components/Form';
import styles from './page.module.scss'


const page = () => {
  return (
    <div>
      <div className={styles.wrapper}> 
       
        <h1 className={styles.title}>Nous contacter</h1>
        <p className={styles.paragraph}>Une question technique ou besoin d'un conseil expert pour votre batterie ? Nos équipes vous accueillent dans nos trois points de vente en Haute-Savoie. Remplissez le formulaire ci-dessous ou rendez-nous visite directement pour bénéficier d'un diagnostic et de solutions adaptées à vos besoins.</p>  

          <div className={styles.buttons}>
        
        <div> 
          <h2>Annemasse</h2>
          <img src={"/assets/Logo-Alpes-BATTERIES_AGIR-sans-baseline-1.png"} />
          <span> annemasse@alpesbatteries.com</span>
           <span>04 50 37 62 85</span>
           
        
          </div>

        <div>
             <h2>Thonon-les-Bains</h2>
             <img src={"/assets/Logo-Alpes-BATTERIES_AGIR-sans-baseline-1.png"} />
             <span> thonon@alpesbatteries.com</span>
             <span>04 50 90 97 16</span>
             
        </div>

        <div>
         <h2>Sallanches</h2>
         <img src={"/assets/Logo-Alpes-BATTERIES_AGIR-sans-baseline-1.png"} />
         <span>sallanches@alpesbatteries.com</span>
         <span>04 50 16 28 53</span>
         
        </div>
        
         </div>

 
      
         
  
        <div className={styles.flexContainer}>
          <div className={styles.group}>
             <MyForm /> 
          </div>
        </div>
      </div>  
     
    </div>
  )
}

export default page;