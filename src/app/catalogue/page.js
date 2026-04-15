"use client"// Dans src/app/catalogue/page.js
import dynamic from 'next/dynamic';

const CatalogueSansSSR = dynamic(
  () => import('./composants/Catalogue'),
  { ssr: false } // <--- C'est ça qui empêche le bug DOMMatrix
);

export default function Page() {
  return <CatalogueSansSSR />;
}