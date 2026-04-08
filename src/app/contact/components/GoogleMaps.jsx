'use client';
import { useEffect, useRef } from 'react';
import styles from './GoogleMaps.module.scss';

function GoogleMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    const position = { lat: 46.2043569, lng: 6.2793355 };

  
    window.initMap = () => {
      if (mapRef.current && window.google) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: position,
          zoom: 15, 
          mapId: "DEMO_MAP_ID", 
        });

    
        new window.google.maps.Marker({
          position: position,
          map: map,
          title: "Alpes Batteries",
          animation: window.google.maps.Animation.DROP
        });
      }
    };

    
    if (!document.getElementById('google-maps-script')) {
      const script = document.createElement('script');
      script.id = 'google-maps-script';
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBdF8-Vfm68zJsSdqtDt6XXxtl3_FfrntA&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    } else if (window.google) {
      window.initMap();
    }


    return () => {

    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      className={styles.wrapper}
    
      style={{ minHeight: '400px', width: '100%' }} 
    />
  );
}

export default GoogleMap;