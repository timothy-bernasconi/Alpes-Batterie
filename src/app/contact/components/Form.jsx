'use client';

import { useState, useEffect } from 'react';
import styles from './Form.module.scss';

function MyForm() {

  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("technical");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phone,setPhone] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [securityNum, setSecurityNum] = useState({ a: 0, b: 0 });


  useEffect(() => {
    setSecurityNum({
      a: Math.floor(Math.random() * 10),
      b: Math.floor(Math.random() * 5)
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (honeypot !== "") return;


    if (parseInt(captchaAnswer) !== securityNum.a + securityNum.b) {
      setStatus("Le résultat du calcul est incorrect.");
      return;
    }

    setLoading(true);
    setStatus("Envoi en cours...");

    const formData = { name, firstName, company, email, phone, type, subject, message };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message envoyé avec succès !");
  
        setName(""); setFirstName(""); setCompany(""); 
        setEmail(""); setEmail(""); setMessage(""); setCaptchaAnswer("");
      } else {
        setStatus("Erreur lors de l'envoi du message.");
      }
    } catch (error) {
      setStatus("Erreur de connexion au serveur.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.group}>
      <form className={styles.wrapper} onSubmit={handleSubmit}>
        
   
        <div style={{ display: 'none' }} aria-hidden="true">
          <input 
            type="text" 
            value={honeypot} 
            onChange={(e) => setHoneypot(e.target.value)} 
            tabIndex="-1" 
            autoComplete="off" 
          />
        </div>

        <label className={styles.input}>Nom *
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>

        <label className={styles.input}>Prénom *
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </label>

        <label className={styles.input}>Société 
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
        </label>

        <label className={styles.input}>Email *
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>

           <label className={styles.input}>Téléphone *
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </label>

        <div className={styles.radioGroup}>
          <span className={styles.radioTitle}>Objet du message</span>
          <div className={styles.radioOptions}>
            <label className={styles.radioItem}>
              <input type="radio" value="technical" checked={type === "technical"} onChange={(e) => setType(e.target.value)} />
              <span>Renseignements techniques</span>
            </label>
            <label className={styles.radioItem}>
              <input type="radio" value="commands" checked={type === "commands"} onChange={(e) => setType(e.target.value)} />
              <span>Suivi commande</span>
            </label>
            <label className={styles.radioItem}>
              <input type="radio" value="sav" checked={type === "sav"} onChange={(e) => setType(e.target.value)} />
              <span>Suivi SAV</span>
            </label>
          </div>
        </div>

        <label className={styles.label}> Magasins
          <select className={styles.selectField} value={subject} onChange={(e) => setSubject(e.target.value)}>
            <option value="annemasse">Annemasse</option>
            <option value="thonon">Thonon</option>
            <option value="sallanches">Sallanches</option>
          </select>
        </label>

        <label className={styles.fieldLabel}> Votre message *
          <textarea className={styles.textareaField} value={message} onChange={(e) => setMessage(e.target.value)} rows="3" required></textarea>
        </label>

        <label className={styles.input} style={{ marginTop: '10px', borderTop: '1px solid #eee', paddingTop: '15px' }}>
          Sécurité : Combien font {securityNum.a} + {securityNum.b} ? *
          <input 
            type="number" 
            value={captchaAnswer} 
            onChange={(e) => setCaptchaAnswer(e.target.value)} 
            required 
            placeholder="Réponse"
          />
        </label>

        <button type="submit" className={styles.btn} disabled={loading}>
          {loading ? "Envoi..." : "Envoyer"}
        </button>
        
        {status && (
          <p className={`${styles.statusMessage} ${status.includes('succès') ? styles.success : ''}`}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
}

export default MyForm;