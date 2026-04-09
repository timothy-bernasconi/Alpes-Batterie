'use client';
import { useEffect, useRef } from 'react';
import styles from './GoogleMaps.module.scss';

function GoogleMap({ lat, lng, title }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const latitude = parseFloat(lat);
    const longitude = parseFloat(lng);

    const loadMap = async () => {
      if (mapRef.current && window.google) {
        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

        const map = new Map(mapRef.current, {
          center: { lat: latitude, lng: longitude },
          zoom: 15,
          mapId: "DEMO_MAP_ID",
        });

        new AdvancedMarkerElement({
          map,
          position: { lat: latitude, lng: longitude },
          title,
        });
      }
    };

    if (!document.getElementById('google-maps-script')) {
      const script = document.createElement('script');
      script.id = 'google-maps-script';
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBdF8-Vfm68zJsSdqtDt6XXxtl3_FfrntA&callback=initMap&loading=async&libraries=marker`;
      script.async = true;
      window.initMap = loadMap;
      document.head.appendChild(script);
    } else if (window.google) {
      loadMap();
    }
  }, [lat, lng, title]);

  return <div ref={mapRef} className={styles.wrapper} />;
}

export default GoogleMap;