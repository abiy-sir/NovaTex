import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
// import Portfolio from './components/Portfolio'; // Removed Portfolio import
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Cta from './components/Cta';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './animation.css';

function App() {
  useEffect(() => {
    // Update the page title
    document.title = "NovaTex - Digital Marketing Agency | Addis Ababa, Ethiopia";
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Account for fixed header
          behavior: 'smooth'
        });
      });
    });
    
    // Cleanup event listeners on unmount
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Services />
      <About />
      {/* <Portfolio /> */} {/* Removed Portfolio section */}
      <Testimonials />
      <Team />
      <Cta />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;