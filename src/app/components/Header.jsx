'use client';
import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isRedPage = pathname === '/presentation' || pathname === '/competences';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);
  const isActive = (path) => pathname === path ? styles.activeLink : '';

  return (
    <nav className={`
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
        <li className={isActive('/')}>
          <Link href="/" onClick={closeMenu}>Accueil</Link>
        </li>
        
        <li className={isActive('/presentation')}>
          <Link href="/presentation" onClick={closeMenu}>Présentation</Link>
        </li>
        
        <li className={`${styles.hasDropdown} ${pathname.startsWith('/agences') ? styles.activeLink : ''}`}>
          <Link href="/agences" onClick={closeMenu}>Nos Agences <i className="fa-solid fa-caret-down"></i></Link>
          <ul className={styles.dropdown}>
            <li className={isActive('/agences/annemasse')}><Link href="/agences/annemasse" onClick={closeMenu}>Annemasse</Link></li>
            <li className={isActive('/agences/thonon')}><Link href="/agences/thonon" onClick={closeMenu}>Thonon</Link></li>
            <li className={isActive('/agences/sallanches')}><Link href="/agences/sallanches" onClick={closeMenu}>Sallanches</Link></li>
          </ul>
        </li>

        <li className={isActive('/fournisseurs')}><Link href="/fournisseurs" onClick={closeMenu}>Nos Fournisseurs</Link></li>
        <li className={isActive('/actualites')}><Link href="/actualites" onClick={closeMenu}>Actualités</Link></li>
        <li className={isActive('/produits')}><Link href="/produits" onClick={closeMenu}>Produits</Link></li>
        <li className={isActive('/contact')}><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Header;