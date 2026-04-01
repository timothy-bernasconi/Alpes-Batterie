import Carousel from '@/app/components/Carousel'
import React from 'react';
import Hero from './components/Hero';
import Partenaires from './components/Partenaires';
import Video from './components/Video';
import styles from './page.module.scss';


const page = () => {
  return (
    <div>
      <Hero />
      <Carousel />
      <Partenaires />
      <div className={styles.videoGrid}>
  <Video videoId="mEYvAeREpZc" title="Mon titre" channel="Ma chaîne" />
  <Video videoId="Aln58MME1Z0" title="Mon titre" channel="Ma chaîne" />
</div>
  
   

    </div>
  )
}

export default page