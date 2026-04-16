import styles from "./Footer.module.scss";

const footerData = [
  {
    title: "Navigation",
    isLink: true,
    items: [
      { label: "Présentation", path: "/presentation" },
      { label: "Nos Agences", path: "/agences" },
      { label: "Actualités", path: "/actualites" },
      { label: "Catalogue", path: "/catalogue" },
      { label: "Nos compétences", path: "/competences" },
      { label: "Contact", path: "/contact" },
    ],
  },

  {
    title: "A.B Annemasse",
    isLink: false,
    items: ["17 Rue de Montréal,", "74100 Ville-la-Grand", "04 50 37 62 85"],
  },
  {
    title: "A.B Thonon",
    isLink: false,
    items: ["73 Route du Crêt Gojon,", "74200 Margencel", "04 50 16 28 53"],
  },
  {
    title: "A.B Sallanches",
    isLink: false,
    items: ["1918 Avenue André Lasquin,", "74700 Sallanches", "04 50 90 97 16"],
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

      <div className={styles.divLogo}>
        <div className={styles.logo}>
          <img 
            src="./assets/Logo-Alpes-BATTERIES_AGIR-sans-baseline-1.png" 
            alt="Logo Alpes Batteries" 
          />
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} — Site réalisé par <a href="https://www.agirencom.com/">AgirEnCom</a> — Tous droits réservés.</p>
        <div className={styles.socials}>
          <p><i className="fa-brands fa-facebook"></i></p>
          <p><i className="fa-brands fa-instagram"></i></p>
          <p><i className="fa-brands fa-linkedin-in"></i></p>
          <p><i className="fa-brands fa-youtube"></i></p>
        </div>
      </div>
    </footer>
  );
}