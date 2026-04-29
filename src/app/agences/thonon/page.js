import React from 'react'
import Equipe from '../components/Equipe'
import Hero from '../components/Hero'
import AvisAgence from '../components/AvisAgence'
import BentoActu from '../components/BentoActu'
import GoogleMaps from '../components/GoogleMaps'

const avisThonon = [
  { id: 1, name: "Anthony", star: 5, text: "Une équipe exceptionnelle ! Je recommande vivement ce magasin et ses employés. C'est la deuxième fois que j'achète une batterie ici. En plus de l'installation, je suis revenu deux fois en raison d'un souci (lié à mon véhicule, pas à leurs batteries), et ils ont gentiment effectué tous les diagnostics, même si ce n'était pas leur responsabilité. Un grand merci à eux !" },
  { id: 2, name: "Ezequiel S.", star: 5, text: "Excellent service ! Je suis venu avec ma voiture et ils ont remplacé la batterie immédiatement, sans rendez-vous. Équipe très sympa et efficace, prix corrects et travail professionnel. Je recommande vivement !" },
  { id: 3, name: "Aurelie D.", star: 5, text: "Excellent magasin. Monsieur Patrick très accueillant, courtois et patient. Je repasserais pour changer mes batteries. Merci Monsieur patrick" },
];


const actusThonon = {
   titre: "L'actu fraîche de votre agence de Thonon",
  main: {
    image: "../assets/bento.jpg",
    alt: "Action solidaire",
    titre: "Une action solidaire",
    description: "967 € réunis pour les maladies auto-immunes."
  },
  kpi: {
    chiffre: "+15",
    texte: "nouveaux clients cette semaine à Thonon.",
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

const equipeThonon = [
        { id: 1, nom: "Patrick", image: '/assets/equipe/patrick.jpeg' },
        { id: 2, nom: "Nicolas", image: '/assets/equipe/nicolas.jpeg' }, 
    ]

    const presentationEquipe = "Votre agence de Thonon vous ouvre ses portes du lundi au samedi. Passez nous voir, le café est offert ! ";

const Page = () => {
  return (
    <div>
     <Hero 
      videoSrc="/assets/video/thonon.mp4" 
      fallbackImage="/assets/fallback-annemasse.jpg"
      titre = "Alpes Batterie Thonon"
      phone = "04 50 16 28 53"
      email = "thonon@alpesbatteries.com"
    />


      <Equipe 
       titre = "Notre équipe"
       presentationEquipe = {presentationEquipe}
       equipeAnnemasse={equipeThonon}
      />

      <div style={{display : "flex", justifyContent : "center", alignItems:"center", background: "#902326", paddingTop : "2rem", paddingBottom : "2rem", height : "450px"}}>  <GoogleMaps lat={46.3575} lng={6.4552} title="Alpes Batteries - Thonon" /> <br/></div>
      
   
      <AvisAgence 
        titre="Ils nous font confiance à Annemasse" 
        listeAvis={avisThonon} 
      />

      <BentoActu 
        titreSection={actusThonon.titre}
        mainCard={actusThonon.main}
        kpiCard={actusThonon.kpi}
        eventCard={actusThonon.event}
      />
    </div>
  )
}

export default Page;