'use client';

import React, { useState, useEffect, useRef, forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import styles from './Catalogue.module.scss';

const PageElement = forwardRef(({ pdf, number, pdfjsLib }, ref) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const renderPage = async () => {
      if (pdf && canvasRef.current && pdfjsLib) {
        const page = await pdf.getPage(number);
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await page.render({ canvasContext: context, viewport }).promise;
      }
    };
    renderPage();
  }, [pdf, number, pdfjsLib]);

  return (
    <div className={styles.pageWrapper} ref={ref}>
      <canvas ref={canvasRef} className={styles.pdfCanvas} />
    </div>
  );
});

PageElement.displayName = 'PageElement';

export default function Catalogue() {
  const [pdf, setPdf] = useState(null);
  const [numPages, setNumPages] = useState(0);
  const [pdfjsLib, setPdfjsLib] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
    script.onload = async () => {
      const lib = window['pdfjs-dist/build/pdf'];
      lib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
      setPdfjsLib(lib);

      try {
        const loadingTask = lib.getDocument('/cat.pdf');
        const loadedPdf = await loadingTask.promise;
        setPdf(loadedPdf);
        setNumPages(loadedPdf.numPages);
      } catch (err) {
        console.error("Erreur lors du chargement du PDF:", err);
      }
    };
    document.head.appendChild(script);
  }, []);

  if (!pdf) return <div className={styles.loading}>Chargement du catalogue...</div>;

  return (
    <div className={styles.bookContainer}>
      <div className={styles.flipbookWrapper}>
        <HTMLFlipBook width={550} height={770} size="fixed" useMouseEvents={true}>
          {[...Array(numPages).keys()].map((n) => (
            <PageElement key={n} pdf={pdf} number={n + 1} pdfjsLib={pdfjsLib} />
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
}