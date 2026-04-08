'use client';

import { useState } from 'react'
import styles from './Form.module.scss'

function MyForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("Renseignements techniques");
  const [subject, setSubject] = useState("Annemasse");
  const [message, setMessage] = useState("");

  return (

    <div className={styles.group}>

        <h1 className={styles.title}>Espace Professionnel</h1>
        <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum et deleniti quidem perspiciatis voluptatum magni, hic, enim ut eligendi nesciunt ea corporis in. Soluta, temporibus consequuntur in non illum eum?</p>

        <form className={styles.wrapper}>

      <label className={styles.input}>Nom *
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
 
       <label className={styles.input}>Société *
        <input
          type="text" 
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </label>

       <label className={styles.input}>Email *
        <input
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

        
        <label className={styles.radioLabel}> Objet :
            <div></div>
          <input
            type="radio"
            value="technical"
            checked={type === "technical"}
            onChange={(e) => setType(e.target.value)}
          />
           Renseignements techniques


          <input
            type="radio"
            value="commands"
            checked={type === "commands"}
            onChange={(e) => setType(e.target.value)}
          />
           Suivi commande

          <input
            type="radio"
            value="sav"
            checked={type === "sav"}
            onChange={(e) => setType(e.target.value)}
          />
           Suivi SAV
        </label>

        <label className={styles.label}>
       Magasins
        <select 
          className={styles.selectField}
          value={subject} 
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="annemasse">Annemasse</option>
          <option value="thonon">Thonon</option>
          <option value="sallanches">Sallanches</option>
       
        </select>
      </label>

      <label className={styles.fieldLabel}>
        Votre message *
        <textarea
          className={styles.textareaField}
          placeholder="Votre message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="2" 
          required
        ></textarea>

      </label>

      <button type="submit" className={styles.btn}>Envoyer</button>


  
    </form></div>   
    
    
  )
}

export default MyForm