import React from 'react'
import Equipe from '../components/Equipe'
import Hero from '../components/Hero'
import AvisAgence from '../components/AvisAgence'
import BentoActu from '../components/BentoActu'

const avisSallanches = [
  { id: 1, name: "Sylvain B.", star: 5, text: "Accueil avec le sourire, à l’écoute, de vrais conseils, un suivi bref tout ce qu’on attend d’un professionnel mais qui se perd aujourd’hui alors on le souligne quand c’est top. Merci les gars la motoneige est fin prète pour la saison" },
  { id: 2, name: "Cecile P.", star: 5, text: "Bien reçue par un professionnel. On trouve tout : de la pile de montre jusqu aux batteries pour le BTP !" },
  { id: 3, name: "Jean F.", star: 5, text: "L'accueil sympathique et remplacement de batterie en qq minutes, vraiment top !" },
];


const actuSallanches = {
  titre: "L'actu fraîche de votre agence de Sallanches",
  main: {
    image: "../assets/633521613_1501050662030339_6143588415833239173_n.jpg",
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
    image: "../assets/650967906_1440159881231098_8297387572951408308_n.jpg",
    alt: "Car Alpes",
    badge: "Évènement",
    titre: "Car Alpes 2026",
    description: "10ème édition du Tour des Légendes"
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
    />

      <Equipe 
       titre = "Notre équipe"
       presentationEquipe = {presentationEquipe}
       equipeAnnemasse={equipeSallanches}
      />
      
   
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