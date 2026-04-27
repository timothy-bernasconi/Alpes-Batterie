import React from 'react'
import Equipe from '../components/Equipe'
import Hero from '../components/Hero'
import AvisAgence from '../components/AvisAgence'
import BentoActu from '../components/BentoActu'
import GoogleMaps from '../components/GoogleMaps'

const avisSallanches = [
  { id: 1, name: "Sylvain B.", star: 5, text: "Accueil avec le sourire, à l’écoute, de vrais conseils, un suivi bref tout ce qu’on attend d’un professionnel mais qui se perd aujourd’hui alors on le souligne quand c’est top. Merci les gars la motoneige est fin prète pour la saison" },
  { id: 2, name: "Cecile P.", star: 5, text: "Bien reçue par un professionnel. On trouve tout : de la pile de montre jusqu aux batteries pour le BTP !" },
  { id: 3, name: "Jean F.", star: 5, text: "L'accueil sympathique et remplacement de batterie en qq minutes, vraiment top !" },
];


const actuSallanches = {
   titre: "L'actu fraîche de votre agence de Sallanches",
  main: {
    image: "../assets/bento.jpg",
    alt: "Action solidaire",
    titre: "Une action solidaire",
    description: "967 € réunis pour les maladies auto-immunes."
  },
  kpi: {
    chiffre: "+15",
    texte: "nouveaux clients cette semaine à Sallanches.",
    merci: "Merci !"
  },
  event: {
    image: "../assets/promotion.webp",
    alt: "Car Alpes",
    badge: "Promotion",
    titre: "Produit du mois",
    description: "Pour le mois de mai, le produit du mois est la batterie Banner AGM 530 30"
  }
};

const equipeSallanches = [
        { id: 1, nom: "John", image: '/assets/equipe/john.png' },
        { id: 2, nom: "Jeremy", image: '/assets/equipe/jeremy.png' }, 
    ]

    const presentationEquipe = "Votre agence de Sallanches vous ouvre ses portes du lundi au samedi. Passez nous voir, le café est offert ! ";

const Page = () => {
  return (
    <div>
       <Hero 
      videoSrc="/assets/video/sallanches.mp4" 
      fallbackImage="/assets/fallback-annemasse.jpg"
      titre = "Alpes Batterie Sallanches"
      phone = "04 50 90 97 16"
      email = "sallanches@alpesbatteries.com"
      
    />

      <Equipe 
       titre = "Notre équipe"
       presentationEquipe = {presentationEquipe}
       equipeAnnemasse={equipeSallanches}
       
      />
      
         <div style={{display : "flex", justifyContent : "center", alignItems:"center", background: "#902326", paddingTop : "2rem", paddingBottom : "2rem", height : "450px"}}>  <GoogleMaps lat={45.9443} lng={6.6341} title="Alpes Batteries - Sallanches" /> <br/></div>
      
   
      <AvisAgence 
        titre="Ils nous font confiance à Annemasse" 
        listeAvis={avisSallanches} 
      />

      <BentoActu 
        titreSection={actuSallanches.titre}
        mainCard={actuSallanches.main}
        kpiCard={actuSallanches.kpi}
        eventCard={actuSallanches.event}
      />
    </div>
  )
}

export default Page;