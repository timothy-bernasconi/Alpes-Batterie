'use client';

import React, { useState, forwardRef, useMemo } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import HTMLFlipBook from 'react-pageflip';
import styles from './Catalogue.module.scss';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PageElement = forwardRef((props, ref) => {
  return (
  
    <div className={styles.pageWrapper} ref={ref} {...props}>
      <Page 
        pageNumber={props.number} 
        width={550}
        renderAnnotationLayer={false} 
        renderTextLayer={false}
        devicePixelRatio={1.5} 
        loading="" 
      />
    </div>
  );
});
PageElement.displayName = 'PageElement';

const Catalogue = () => {
  const [numPages, setNumPages] = useState(null);

  const pages = useMemo(() => {
    if (!numPages) return [];
    return [...Array(numPages).keys()].map((pNum) => (
      <PageElement key={`page-${pNum + 1}`} number={pNum + 1} />
    ));
  }, [numPages]);

  return (
    <div className={styles.bookContainer}>
        <h2>Notre Catalogue</h2>
        <p>Professionnels, vous souhaitez recevoir un exemplaire papier ?</p>
        <a href="/contact" className={styles.contactButton}>
          Demander le catalogue papier
        </a>
      <Document
        file="/cat.pdf"
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={<div className={styles.loading}>Chargement...</div>}
      >
        {numPages && (
          <div className={styles.flipbookWrapper}>
            <HTMLFlipBook 
              width={550} 
              height={770}
              size="fixed"
              showCover={true}
              className={styles.pdfFlipbook}
              showPageCorners={false}
              flippingTime={800}
              startZIndex={0}
              disableFlipByClick={false}
            >
              {pages}
            </HTMLFlipBook>
          </div>
        )}
      </Document>
    </div>
  );
};

export default Catalogue;