"use client"
import dynamic from 'next/dynamic';

const CatalogueSansSSR = dynamic(
  () => import('./composants/Catalogue'),
  { ssr: false } 
);

export default function Page() {
  return <CatalogueSansSSR />;
}