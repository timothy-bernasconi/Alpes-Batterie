"use client";

import { useState } from 'react';
import Image from 'next/image'; 
import styles from './Carousel.module.scss';

const slides = [
  { id: 1, title: "Team 1", img: "/assets/background.png" },
  { id: 2, title: "Team 2", img: "/assets/carouselTeam.jpg" },
  { id: 3, title: "Team 3",  img: "/assets/carouselTeam2.jpg" },
  {id : 4, title : "Team 4", img : "/assets/carouselTeam3.jpg"}
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
      
    
          </div>
        ))}
      </div>

      <button className={`${styles.navButton} ${styles.prev}`} onClick={prevSlide} aria-label="Précédent">❮</button>
      <button className={`${styles.navButton} ${styles.next}`} onClick={nextSlide} aria-label="Suivant">❯</button>
    </section>
  );
}