"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import styles from './BlogDetail.module.scss'; 

export default function BlogDetail() {
  const params = useParams();
  const [article, setArticle] = useState(null);
  const [chargement, setChargement] = useState(true);


  const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRT8fepHOtR_owjS6ucip-5WP6gxTx8vcKu_F-SdQr-EhUegkIgX1mS2PH6dt5BYSkoZjIofB_K9FKm/pub?output=csv";

  useEffect(() => {
   
    const titreCherche = params.id ? decodeURIComponent(params.id) : "";

    Papa.parse(SHEET_URL, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
       
        const trouve = results.data.find(row => 
          row.Titre && row.Titre.trim() === titreCherche.trim()
        );
        
     
        if (trouve && trouve.Lien_Image) {
          if (trouve.Lien_Image.includes("drive.google.com")) {
            const fileId = trouve.Lien_Image.split('/d/')[1]?.split('/')[0] || trouve.Lien_Image.split('id=')[1]?.split('&')[0];
            if (fileId) {
              trouve.Lien_Image = `https://drive.google.com/uc?export=view&id=${fileId}`;
            }
          }
        }

        setArticle(trouve);
        setChargement(false);
      },
      error: (error) => {
        console.error("Erreur PapaParse:", error);
        setChargement(false);
      }
    });
  }, [params.id]);

 
  if (chargement) return <div className={styles.loader}>Chargement de l'article...</div>;
  if (!article) return <div className={styles.error}>Oups ! L'article "{decodeURIComponent(params.id)}" est introuvable dans notre base de données.</div>;

  return (
    <article className={styles.blogPostContainer}>
      <header className={styles.articleHeader}>

        <div className={styles.metaData}>
          <span className={styles.categorieTag}>{article.Categorie || "Actualité"}</span>
          <time className={styles.articleDate}>{article.Date}</time>
        </div>
        

        <h1 className={styles.mainTitle}>{article.Titre}</h1>
      </header>

   
      {article.Lien_Image && (
        <div className={styles.featuredImageWrapper}>
          <img src={article.Lien_Image} alt={`Image illustrative pour : ${article.Titre}`} className={styles.featuredImage} />
        </div>
      )}

    
      <section className={styles.articleContent}> 
        <p className={styles.paragraphs}>{article.Article}</p>
      </section>
      <footer className={styles.articleFooter}>
        <p>Merci de votre lecture. Restez connectés pour plus d'innovations.</p>
      </footer>
    </article>
  );
}