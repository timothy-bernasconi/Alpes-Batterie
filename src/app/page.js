import Carousel from '@/app/components/Carousel'
import React from 'react';
import Hero from './components/Hero';
import Partenaires from './components/Partenaires';
import Video from './components/Video';



const page = () => {
  return (
    <div>
      <Hero />
      <Carousel />
      <Partenaires />
      <Video />
  
   

    </div>
  )
}

export default page