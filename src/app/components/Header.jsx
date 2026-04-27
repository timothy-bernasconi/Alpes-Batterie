'use client';
import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const isRedPage = pathname === '/presentation' || pathname === '/competences'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
   <nav 
      className={`
        ${styles.header} 
        ${scrolled ? styles.scrolled : ''} 
        ${isOpen ? styles.menuOpen : ''} 
        ${isRedPage ? styles.isRed : ''}
      `}
    >
      <div className={styles.logo}>
        <img src="/assets/Logo-Alpes-BATTERIES_AGIR-sans-baseline-1.png" alt="Logo" />
      </div>

      <div className={`${styles.burger} ${isOpen ? styles.active : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

      <ul className={`${styles.navMenu} ${isOpen ? styles.open : ''}`}>
        <li><Link href="/" onClick={closeMenu}>Accueil</Link></li>
        <li><Link href="/presentation" onClick={closeMenu}>Présentation</Link></li>
        
        <li className={styles.hasDropdown}>
          <Link href="/agences" onClick={closeMenu}>Nos Agences <i className="fa-solid fa-caret-down"></i></Link>
          <ul className={styles.dropdown}>
            <li><Link href="/agences/annemasse" onClick={closeMenu}>Annemasse</Link></li>
            <li><Link href="/agences/thonon" onClick={closeMenu}>Thonon</Link></li>
            <li><Link href="/agences/sallanches" onClick={closeMenu}>Sallanches</Link></li>
          </ul>
        </li>

        <li><Link href="/fournisseurs" onClick={closeMenu}>Nos Fournisseurs</Link></li>
        <li><Link href="/actualites" onClick={closeMenu}>Actualités</Link></li>
        <li><Link href="/produits" onClick={closeMenu}> Produits</Link></li>
        <li><Link href="/competences" onClick={closeMenu}>Nos Compétences</Link></li>
        <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Header;