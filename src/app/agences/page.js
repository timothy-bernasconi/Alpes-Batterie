import React from 'react'
import HomePic from '../components/HomePic'
import Presentation from './components/Presentation'
import Carousel from '../components/Carousel'

const imageAgence = [ 
 { id: 1, title: "Agence Annemasse ", img: "/assets/alpes_annemasse.jpg" },
 { id: 2, title: "Agence Thonon", img: "/assets/alpes_thonon.jpg" },
 { id: 3, title: "Agence Sallanches",  img: "/assets/alpes_sallanches.jpg" }


];

const page = () => {
  return (
    <div> 
        <HomePic 
      titre = "Nos Agences"
      sousTitre="Un accompagnement sur mesure au cœur de nos 3 points de vente"
      img = "/assets/batterie.jpg"
      />
      <Presentation/>
      {/* <Carousel 
      data = {imageAgence}
      /> */}
    </div>
  )
}

export default page