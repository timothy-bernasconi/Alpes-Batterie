import React from 'react';
import ServicesTest from './components/ServicesTest';
import SectionTest from './components/SectionTest';
import Carousel from './components/Carousel';
import HomePic from './components/HomePic';
import ReseauxSociaux from './components/ReseauxSociaux';


const imageEvent = [ { id: 1, title: "Team 1", img: "/assets/event/background.png" },
 { id: 2, title: "Team 2", img: "/assets/event/carouselTeam.jpg" },
 { id: 3, title: "Team 3", img: "/assets/event/carouselTeam1.jpg" },
 { id: 4, title: "Team 4",  img: "/assets/event/carouselTeam2.jpg" },
{id : 5, title : "Team 5", img : "/assets/event/carouselTeam3.jpg"} 

];



 


const page = () => {
  return (
    <div>
      <HomePic 
      titre = "Alpes Batteries"
      sousTitre="La référence en matière de batteries en Haute-Savoie"
      />
   
     

        <ServicesTest />
        <SectionTest />
        <Carousel data = {imageEvent}
        />
        <ReseauxSociaux />
        
  
   

    </div>
  )
}

export default page