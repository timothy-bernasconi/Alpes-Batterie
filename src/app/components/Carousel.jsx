"use client";

import { useState } from 'react';
import Image from 'next/image'; 
import styles from './Carousel.module.scss';

const slides = [
  { id: 1, title: "Annemasse", desc: "17 Rue de Montréal, 74100 Ville-la-Grand", img: "/assets/alpes_annemasse.jpg" },
  { id: 2, title: "Thonon", desc: "73 Rte du Crêt Gojon, 74200 Margencel", img: "/assets/alpes_thonon.jpg" },
  { id: 3, title: "Sallanches", desc: "1918 Avenue André Lasquin, 74700", img: "/assets/alpes_sallanches.jpg" }
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className={styles.carouselContainer}>
      <div 
        className={styles.track} 
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.slide}>
          
            <Image 
              src={slide.img} 
              alt={`Agence de ${slide.title}`}
              fill
              priority={slide.id === 1}
              sizes="100vw"
              className={styles.image}
            />
      
      <div className={styles.wrapper}>
            <div className={styles.caption}>
              <h3>{slide.title}</h3>
              <p>{slide.desc}</p>
              <button className={styles.cta}>Visiter l'agence</button>
            </div>
            </div>
          </div>
        ))}
      </div>

      <button className={`${styles.navButton} ${styles.prev}`} onClick={prevSlide} aria-label="Précédent">❮</button>
      <button className={`${styles.navButton} ${styles.next}`} onClick={nextSlide} aria-label="Suivant">❯</button>
    </section>
  );
}