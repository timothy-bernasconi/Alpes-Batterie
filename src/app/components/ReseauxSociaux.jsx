import React from 'react'
import styles from './ReseauxSociaux.module.scss'

const Socials = [
  {id: 1, name : "Facebook", icon : 'fa-brands fa-facebook', url : 'https://www.facebook.com/alpesbatteries'},
  {id : 2, name : "Instagram", icon :'fa-brands fa-instagram', url : 'https://www.instagram.com/alpesbatteries/'},
  {id : 3, name : "LinkedIn", icon : 'fa-brands fa-linkedin', url : 'https://www.linkedin.com/company/alpes-batteries/'},
  {id : 4, name : "Youtube", icon : 'fa-brands fa-youtube', url : 'https://www.youtube.com/@AlpesBatteries'}
]


const ReseauxSociaux = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Suivez-nous sur nos réseaux !</h2> 
       <div className={styles.container}>

        

        {Socials.map((social) => (
  <a key={social.id} href={social.url} target="_blank" rel="noreferrer">
  
    <i className={social.icon}></i>
  </a>
))}
       </div>
    </div>
  )
}

export default ReseauxSociaux