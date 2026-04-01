import styles from "./Footer.module.scss";

const footerData = [

  { 
    title: "Navigation", 
    isLink: true, 
    items: ["Présentation", "Nos Agences", "Actualités", "Catalogue", "Nos compétences", "Professionnels", "Contact"] 
  },
  
  { 
    title: "Agence Annemasse", 
    isLink: false, 
    items: ["17 Rue de Montréal,", "74100 Ville-la-Grand", "04 50 37 62 85", "SARL Creveaux Chiris", "Capital : 352 313 €", "Siret : 795 047 828 000 12", " TVA : FR20 795 047 828"] 
  },
  { 
    title: "Agence Thonon-les-Bains", 
    isLink: false, 
    items: ["73 Route du Crêt Gojon,", "74200 Margencel", "04 50 16 28 53", "SARL Loel Chiris", "CAPITAL : 3000 €", "Siret : 832 706 279 000 11", "TVA : FR55 832 706 279"] 
  },

  { 
    title: "Agence Sallanches", 
    isLink: false, 
    items: ["1918 Avenue André Lasquin,", "74700 Sallanches", "04 50 90 97 16", "SARL Creveaux Chiris", "CAPITAL : 3000 €", "Siret : 795 047 828 000 12", "TVA : FR20 795 047 828"] 
  }
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        {footerData.map((section) => (
          <div key={section.title} className={styles.column}>
            <h2>{section.title}</h2>
            <ul>
              {section.items.map((item, index) => (
                <li key={index}>
                  {section.isLink ? (
                    <a href="#">{item}</a>
                  ) : (
                    <span className={styles.infoText}>{item}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} Site réalisé par AgirEnCom - Tous droits réservés.</p>
        
        <div className={styles.socials}>
          <p> <i className="fa-brands fa-facebook"></i></p>
          <p>    <i className="fa-brands fa-instagram"></i> </p>
          <p>       <i className="fa-brands fa-linkedin-in"></i> </p>
          <p>      <i className="fa-brands fa-youtube"></i> </p>
            
      
   
    
              </div>
        
      </div>
    </footer>
  );
}