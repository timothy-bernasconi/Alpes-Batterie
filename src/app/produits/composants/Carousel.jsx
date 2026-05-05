"use client";

import { useState } from 'react';
import Image from 'next/image'; 
import styles from './Carousel.module.scss';

function Carousel({ data }) { 
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setActiveIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));

  return (
    <section className={styles.carouselContainer}>
          <h1>Nos Produits</h1>
      <div 
        className={styles.track} 
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
    
        {data.map((item) => (
          <div key={item.id} className={styles.slide}>
            <Image 
              src={item.img} 
              alt={item.title}
              fill
              priority={data.indexOf(item) === 0} 
              sizes="100vw"
              className={styles.image}
            />
          </div>
        ))}
      </div>

      <button className={`${styles.navButton} ${styles.prev}`} onClick={prevSlide}>❮</button>
      <button className={`${styles.navButton} ${styles.next}`} onClick={nextSlide}>❯</button>
    </section>
  );
}

export default Carousel;