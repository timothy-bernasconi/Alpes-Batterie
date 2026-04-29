import styles from "./Footer.module.scss";

const footerData = [
  {
    title: "Navigation",
    isLink: true,
    items: [
      { label: "Présentation", path: "/presentation" },
      { label: "Alpes Batteries Annemasse", path: "/agences/annemasse" },
      { label: "Alpes Batteries Thonon", path: "/agences/thonon" },
      { label: "Alpes Batteries Sallanches", path: "/agences/sallanches" },
      {label : "Nos Fournisseurs", path : "/fournisseurs"},
      { label: "Actualités", path: "/actualites" },
      { label: "Produits", path: "/produits" },
      { label: "Nos compétences", path: "/competences" },
      { label: "Contact", path: "/contact" },
    ],
  },

  {
    title: "Alpes Batterie Annemasse",
    isLink: false,
    items: ["17 Rue de Montréal,", "74100 Ville-la-Grand", "04 50 37 62 85", "annemasse@alpesbatteries.com"],
  },
  {
    title: "Alpes Batteries Thonon",
    isLink: false,
    items: ["73 Route du Crêt Gojon,", "74200 Margencel", "04 50 16 28 53", "thonon@alpesbatteries.com"],
  },
  {
    title: "Alpes Batteries Sallanches",
    isLink: false,
    items: ["1918 Avenue André Lasquin,", "74700 Sallanches", "04 50 90 97 16", "sallanches@alpesbatteries.com"],
  },
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
          
                    <a href={item.path}>{item.label}</a>
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
        <p>© {new Date().getFullYear()} — Site réalisé par <a href="https://www.agirencom.com/">AgirEnCom</a> — Tous droits réservés.</p>
        <div className={styles.socials}>
          <a href="https://www.facebook.com/alpesbatteries"><p><i className="fa-brands fa-facebook"></i></p></a>
          <a href="https://www.instagram.com/alpesbatteries/"><p><i className="fa-brands fa-instagram"></i></p></a>
          <a href="https://www.linkedin.com/company/alpes-batteries/"><p><i className="fa-brands fa-linkedin-in"></i></p></a>
          <a href="https://www.youtube.com/@AlpesBatteries"><p><i className="fa-brands fa-youtube"></i></p></a>
        </div>
      </div>
    </footer>
  );
}