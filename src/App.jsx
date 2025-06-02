import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Preloader from './pages/Preloader'; 
import About from './pages/About'
import './pages/Preloader.css'; 
import Services from './pages/Services';
import Footer from './components/Footer'
import ScrollToTop from 'react-scroll-to-top';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About/>
          <Services/>
          <Footer/>
          <ScrollToTop smooth top={300}/>
        </>
      )}
    </>
  );
}

export default App;

