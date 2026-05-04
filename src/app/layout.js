import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import './globals.scss'; 

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title> Alpes Batteries </title> 
        
      </head>
    
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}