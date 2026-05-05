import React from 'react'
import Carousel from './composants/Carousel'
import styles from './page.module.scss'

const catalogue = [ 
 { id: 1, title : "Page 1", img: "/assets/catalogue/cat-1.webp" },
 { id: 2, title : "Page 2", img: "/assets/catalogue/cat-2.webp" },
 { id: 3, title : "Page 3",  img: "/assets/catalogue/cat-3.webp" },
 {id : 4, title : "Page 4", img: "/assets/catalogue/cat-4.webp" },
 {id : 5, title : "Page 5", img: "/assets/catalogue/cat-5.webp" },
 {id : 6, title : "Page 6", img: "/assets/catalogue/cat-6.webp" },
 {id : 7, title : "Page 7", img: "/assets/catalogue/cat-7.webp" },
 {id : 8, title : "Page 8", img: "/assets/catalogue/cat-8.webp" },
 {id : 9, title : "Page 9", img: "/assets/catalogue/cat-9.webp" },
 {id : 10, title : "Page 10", img: "/assets/catalogue/cat-10.webp" },
 {id : 11, title : "Page 11", img: "/assets/catalogue/cat-11.webp" },
 {id : 12, title : "Page 12", img: "/assets/catalogue/cat-12.webp" },
 {id : 13, title : "Page 13", img: "/assets/catalogue/cat-13.webp" },
 {id : 14, title : "Page 14", img: "/assets/catalogue/cat-14.webp" },
 {id : 15, title : "Page 15", img: "/assets/catalogue/cat-15.webp" },
 {id : 16, title : "Page 16", img: "/assets/catalogue/cat-16.webp" },
 {id : 17, title : "Page 17", img: "/assets/catalogue/cat-17.webp" },
 {id : 18, title : "Page 18", img: "/assets/catalogue/cat-18.webp" },
 {id : 19, title : "Page 19", img: "/assets/catalogue/cat-19.webp" },
 {id : 20, title : "Page 20", img: "/assets/catalogue/cat-20.webp" },
 {id : 21, title : "Page 21", img: "/assets/catalogue/cat-21.webp" },
 {id : 22, title : "Page 22", img: "/assets/catalogue/cat-22.webp" },
 {id : 23, title : "Page 23", img: "/assets/catalogue/cat-23.webp" },
 {id : 24, title : "Page 24", img: "/assets/catalogue/cat-24.webp" },
 {id : 25, title : "Page 25", img: "/assets/catalogue/cat-25.webp" },
 {id : 26, title : "Page 26", img: "/assets/catalogue/cat-26.webp" },
 {id : 27, title : "Page 27", img: "/assets/catalogue/cat-27.webp" },
 {id : 28, title : "Page 28", img: "/assets/catalogue/cat-28.webp" },
 {id : 29, title : "Page 29", img: "/assets/catalogue/cat-29.webp" },
 {id : 30, title : "Page 30", img: "/assets/catalogue/cat-30.webp" },
 {id : 31, title : "Page 31", img: "/assets/catalogue/cat-31.webp" },
 {id : 32, title : "Page 32", img: "/assets/catalogue/cat-32.webp" }

];

const page = () => {
  return (
    <div className={styles.container}>
      <Carousel data={catalogue}/>
      <div className={styles.button}>   
        <a href='/assets/cat.pdf' download><button className={styles.downloadButton}>Télécharger le catalogue</button></a>
        </div>
   
    </div>
  )
}

export default page