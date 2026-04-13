"use client";

import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Link from 'next/link';
import NewCard from './NewCard'; 
import styles from './Actualites.module.scss';

const Actualites = () => {
  const [articles, setArticles] = useState([]);
  const [chargement, setChargement] = useState(true);

  const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRT8fepHOtR_owjS6ucip-5WP6gxTx8vcKu_F-SdQr-EhUegkIgX1mS2PH6dt5BYSkoZjIofB_K9FKm/pub?output=csv";

  useEffect(() => {
    Papa.parse(SHEET_URL, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const cleanData = results.data.map(row => {
          const newRow = {};
          for (let key in row) {
            const cleanKey = key.replace(/^\ufeff/, "").trim();
            let value = row[key];
            if (cleanKey === "Lien_Image" && value && value.includes("drive.google.com")) {
              const fileId = value.split('/d/')[1]?.split('/')[0] || value.split('id=')[1]?.split('&')[0];
              if (fileId) value = `https://drive.google.com/uc?export=view&id=${fileId}`;
            }
            newRow[cleanKey] = value;
          }
          return newRow;
        });

        const dataValide = cleanData.filter(item => item.Titre && item.Titre.trim() !== "");
        setArticles(dataValide.reverse());
        setChargement(false);
      }
    });
  }, []);

  if (chargement) return <div className={styles.loader}>Chargement du blog...</div>;

  return (
    <section className={styles.actualitesSection}>
      <h1 className={styles.title}>Notre Blog & Actualités</h1>
      <div className={styles.actualitesGrid}>
        {articles.map((actu, index) => (
        
          <Link 
            href={`/actualites/${encodeURIComponent(actu.Titre)}`} 
            key={index} 
            className={styles.cardLink}
          >
            <NewCard data={actu} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Actualites;