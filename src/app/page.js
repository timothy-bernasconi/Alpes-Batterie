import React from 'react';
import Partenaires from './components/Partenaires';
import styles from './page.module.scss';
import HomePic from './components/HomePic';
import ServicesTest from './components/ServicesTest';
import SectionTest from './components/SectionTest';
import Carousel from './components/Carousel';



const page = () => {
  return (
    <div>
      <HomePic 
      titre = "alpes batteries"
      sousTitre="La référence en terme de batteries en Haute-Savoie"
      />

        <ServicesTest />
        <Partenaires />
        <SectionTest />
        <Carousel />
        
  
   

    </div>
  )
}

export default page