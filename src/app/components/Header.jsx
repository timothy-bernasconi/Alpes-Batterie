'use client';

import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

 
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`
      ${styles.header} 
      ${scrolled ? styles.scrolled : ''} 
      ${isOpen ? styles.menuOpen : ''}
    `}>
      <div className={styles.logo}>
        <img src="/assets/Logo-Alpes-BATTERIES_AGIR-sans-baseline-1.png" alt="" />
        </div>

 
      <div 
        className={`${styles.burger} ${isOpen ? styles.active : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

   
      <ul className={`${styles.navMenu} ${isOpen ? styles.open : ''}`}>
        <li><Link href="/" onClick={closeMenu}>Accueil</Link></li>
        <li><Link href="/presentation" onClick={closeMenu}>Présentation</Link></li>
        <li><Link href="/agences" onClick={closeMenu}>Nos Agences</Link></li>
        <li><Link href="/actualites" onClick={closeMenu}>Actualités</Link></li>
        <li><Link href="/catalogue" onClick={closeMenu}>Catalogue</Link></li>
        <li><Link href="/competences" onClick={closeMenu}>Nos Compétences</Link></li>
        <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Header;