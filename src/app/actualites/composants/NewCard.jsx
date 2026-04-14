import React from 'react';

const NewCard = ({ data }) => {
  if (!data) return null;

  const getImageUrl = (url) => {
    if (!url) return "https://via.placeholder.com/400x250?text=Pas+d'image";

    if (url.includes("drive.google.com")) {

      const fileId = url.split('/d/')[1]?.split('/')[0] || url.split('id=')[1]?.split('&')[0];
      
      if (fileId) {
        
        return `https://lh3.googleusercontent.com/u/0/d/${fileId}`;
      }
    }
    return url;
  };

  return (
    <div className="news-card" style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      backgroundColor: '#fff',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      height: '100%' 
    }}>
      <div style={{ height: '200px', overflow: 'hidden', backgroundColor: '#eee' }}>
        <img 
          src={getImageUrl(data.Lien_Image)} 
          alt={data.Titre || "Actualité"} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => { 
          
            if (!e.target.src.includes('placeholder')) {
              e.target.src = "https://via.placeholder.com/400x250?text=Image+Introuvable"; 
            }
          }}
        />
      </div>
      
      <div style={{ padding: '15px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#666' }}>
          <span>{data.Date}</span>
          <span style={{ fontWeight: 'bold', color: '#902326' }}>{data.Categorie}</span>
        </div>
        <h3 style={{ margin: '10px 0', fontSize: '1.2rem', color: '#333' }}>{data.Titre}</h3>
        <p style={{ 
          fontSize: '0.9rem', 
          color: '#444', 
          lineHeight: '1.4',
          display: '-webkit-box',
          WebkitLineClamp: '3', 
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {data.Contenu}
        </p>
      </div>
    </div>
  );
};

export default NewCard;