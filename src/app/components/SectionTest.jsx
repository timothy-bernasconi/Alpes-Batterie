"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './SectionTest.module.scss';

const stats = [
  { id: 1, value: "+15", label: "Ans d'expertise", icon: "fa-solid fa-clock-rotate-left" },
  { id: 2, value: "5000+", label: "Références en stock", icon: "fa-solid fa-boxes-stacked" },
  { id: 3, value: "24/48h", label: "Délais de livraison", icon: "fa-solid fa-truck-fast" },
  { id: 4, value: "100%", label: "Conseils d'experts", icon: "fa-solid fa-user-check" }
];

const SectionTest = () => {
  return (
    <section className={styles.statsContainer}>
      <div className={styles.wrapper}>
        {stats.map((item, index) => (
          <motion.div 
            key={item.id}
            className={styles.statCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className={styles.iconBox}>
              <i className={item.icon}></i>
            </div>
            <h3 className={styles.number}>{item.value}</h3>
            <p className={styles.text}>{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionTest;