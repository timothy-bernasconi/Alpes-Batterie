import React from 'react'
import styles from './Sponsors.module.scss'

const Sponsors = () => {

    const partenaires = [
       { nom: "Racing Rugby", image: "/assets/partenaires/1.jpg" },
       {nom : "CarAlpes", image : "/assets/partenaires/2.jpg"},
       {nom : "Black Panthers Thonon", image : "/assets/partenaires/3.png"},
       {nom : "The R5 Team", image : "/assets/partenaires/4.jpg"}

    ]

  return (


    <div className={styles.container}>
        <h2 className={styles.title}>Notre communauté </h2>
        <p style={{fontWeight : "600", fontSize : "1.3rem"}}>Alpes Batteries, votre partenaire de choix. </p>

      <div className={styles.imgWrapper}><img src="/assets/Logo-Alpes-BATTERIES_AGIR-sans-baseline-1.png" alt="" /></div>
        

        <p className={styles.paragraph}>Chez Alpes Batteries, nous propulsons les initiatives locales. Plus que du sponsoring, nous nouons des partenariats de confiance avec ceux qui font bouger notre territoire. Entreprises, sportifs ou associations : nous sommes fiers de soutenir vos projets et de partager avec vous notre exigence de performance.</p>

        <p style={{fontSize : "1rem", padding: "0 20px", marginTop : "30px"}}>Vous avez un projet ou un défi à relever ? Alpes Batteries sponsorise les initiatives de notre territoire. Contactez-nous pour faire équipe.</p>

       <div className={styles.button}>
       <a href="mailto:annemasse@alpesbatteries.com"><button>Devenir partenaire</button></a> 
       </div>

        <hr style={{marginTop: "2rem"}}/>

        <div className={styles.wrapper}>
            {partenaires.map((item, index) => (
                    <div key={index}>  
                    <img src={item.image} className={styles.logo} alt={item.nom} title={item.nom} />
                     </div>            ))}
        </div>
    </div>
  )
}

export default Sponsors