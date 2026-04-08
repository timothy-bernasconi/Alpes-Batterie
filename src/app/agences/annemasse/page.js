import React from 'react'
import Equipe from '../components/Equipe'
import Hero from '../components/Hero'
import AvisAgence from '../components/AvisAgence'
import BentoActu from '../components/BentoActu'




const avisAnnemasse = [
  { id: 1, name: "Adiene A.", star: 5, text: "Équipe très investie, conseil au top. J'ai remplacé ma batterie chez eux, ils m'ont même proposé de revenir pour faire des tests pour être sûrs que ce n'est pas l'alternateur qui est défectueux.Ils ont un bon stock de tout type de batterie, j'y retournerai à coup sûr." },
  { id: 2, name: "Céline D.", star: 5, text: "C'est pas la première fois que je viens chez vous. Ayant une batterie un peu spéciale, chez vous je suis sûre de trouver. Changement rapide et test de l' alternateur fait. Super accueil, une fois de plus vous m'avez sauvé." },
  { id: 3, name: "Yoann L.", star: 5, text: "Prise en charge d'un remplacement d'une batterie rapide et efficace avec une superbe marque Banner. Ce n'est pas la première fois que je travaille avec cette équipe très sympathique. N'allez nul part ailleurs que ici car c'est moins cher et bien mieux." },
];


const actuAnnemasse = {
  titre: "L'actu fraîche de votre agence d'Annemasse",
  main: {
    image: "../assets/633521613_1501050662030339_6143588415833239173_n.jpg",
    alt: "Action solidaire",
    titre: "Une action solidaire",
    description: "967 € réunis pour les maladies auto-immunes."
  },
  kpi: {
    chiffre: "+15",
    texte: "nouveaux clients cette semaine à Annemasse.",
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

const equipeAnnemasse = [
        { id: 1, nom: "Virginie", image: '/assets/equipe/virginie.png' },
        { id: 2, nom: "Corentin", image: '/assets/equipe/corentin.png' },
        { id: 3, nom: "Fabien", image: '/assets/equipe/fabien.png' },
        { id: 4, nom: "Hugo", image: '/assets/equipe/hugo.png' },
        { id: 5, nom: "Edouard", image: '/assets/equipe/hugo.png' },
        { id: 6, nom: "Élodie", image: '/assets/equipe/elodie.png' },    
    ]

    const presentationEquipe = "Votre agence d'Annemasse vous ouvre ses portes du lundi au samedi. Passez nous voir, le café est offert ! ";

const Page = () => {
  return (
    <div>

    
      <Hero 
      videoSrc="/assets/video/annemasse.mp4" 
      fallbackImage="/assets/fallback-annemasse.jpg"
      titre = "Alpes Batteries Annemasse"
    />

      <Equipe 
       titre = "Notre équipe"
       presentationEquipe = {presentationEquipe}
       equipeAnnemasse={equipeAnnemasse}
      />
      
   
      <AvisAgence 
        titre="Ils nous font confiance à Annemasse" 
        listeAvis={avisAnnemasse} 
      />

      <BentoActu 
        titreSection={actuAnnemasse.titre}
        mainCard={actuAnnemasse.main}
        kpiCard={actuAnnemasse.kpi}
        eventCard={actuAnnemasse.event}
      />
    </div>
  )
}

export default Page;