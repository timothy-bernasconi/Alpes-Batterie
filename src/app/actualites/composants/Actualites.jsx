"use client";

import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import NewCard from './NewCard';

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
        // Nettoyage des clés (enlève les caractères invisibles de Google et les espaces)
        const cleanData = results.data.map(row => {
          const newRow = {};
          for (let key in row) {
            const cleanKey = key.replace(/^\ufeff/, "").trim();
            newRow[cleanKey] = row[key];
          }
          return newRow;
        });

        // Filtrage pour ne garder que les lignes avec un titre
        const dataValide = cleanData.filter(item => item.Titre && item.Titre.trim() !== "");
        
        // On inverse pour avoir les plus récents en haut
        setArticles(dataValide.reverse());
        setChargement(false);
      },
      error: (error) => {
        console.error("Erreur de chargement CSV:", error);
        setChargement(false);
      }
    });
  }, []);

  if (chargement) return <div className="loader">Chargement des actualités...</div>;

  return (
    <section className="actualites-section" style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Nos Actualités</h1>
      <div className="actualites-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px'
      }}>
        {articles.length > 0 ? (
          articles.map((actu, index) => (
            <NewCard key={index} data={actu} />
          ))
        ) : (
          <p>Aucune actualité pour le moment.</p>
        )}
      </div>
    </section>
  );
};

export default Actualites;