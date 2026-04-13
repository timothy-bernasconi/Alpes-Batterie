import React from 'react';
import Partenaires from './components/Partenaires';
import Video from './components/Video';
import styles from './page.module.scss';
import HomePic from './components/HomePic';
import Services from './components/Services';



const page = () => {
  return (
    <div>
      <HomePic 
      titre = "alpes batteries"
      sousTitre="La référence en terme de batteries en Haute-Savoie"
      />

     
        <Partenaires />
        <Services />


     
    

      <div className={styles.videoGrid}>
  <Video videoId="mEYvAeREpZc" title="Mon titre" channel="Ma chaîne" />
  <Video videoId="Aln58MME1Z0" title="Mon titre" channel="Ma chaîne" />
</div>
  
   

    </div>
  )
}

export default page