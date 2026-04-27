'use client';
import { useEffect, useRef } from 'react';
import styles from './GoogleMaps.module.scss';

function GoogleMap({ lat, lng, title }) {
  const mapRef = useRef(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    // Éviter la double initialisation en mode Strict de React
    if (isInitialized.current) return;

    const latitude = parseFloat(lat);
    const longitude = parseFloat(lng);

    const renderMap = async () => {
      try {
      
        const { Map } = await window.google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await window.google.maps.importLibrary("marker");

        if (mapRef.current) {
          const map = new Map(mapRef.current, {
            center: { lat: latitude, lng: longitude },
            zoom: 15,
            mapId: "DEMO_MAP_ID", 
          });

          new AdvancedMarkerElement({
            map,
            position: { lat: latitude, lng: longitude },
            title: title,
          });
          
          isInitialized.current = true;
        }
      } catch (error) {
        console.error("Erreur Google Maps:", error);
      }
    };

    const handleLoad = () => {
      if (window.google) {
        renderMap();
      }
    };

   
    if (window.google && window.google.maps && window.google.maps.importLibrary) {
      renderMap();
    } 

    else if (document.getElementById('google-maps-script')) {
      const script = document.getElementById('google-maps-script');
      script.addEventListener('load', handleLoad);
      return () => script.removeEventListener('load', handleLoad);
    } 
   
    else {
      const script = document.createElement('script');
      script.id = 'google-maps-script';
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBdF8-Vfm68zJsSdqtDt6XXxtl3_FfrntA&libraries=marker`;
      script.async = true;
      script.defer = true;
      script.addEventListener('load', handleLoad);
      document.head.appendChild(script);
    }
  }, [lat, lng, title]);

  return <div ref={mapRef} className={styles.wrapper} />;
}

export default GoogleMap;