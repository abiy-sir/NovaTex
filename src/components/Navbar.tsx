import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/src/assets/Nov.png" alt="NovaTex Logo" className="h-8" />
            <h1 className="text-xl font-bold text-gray-800 md:text-3xl">NovaTex</h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks textColor={isScrolled ? 'text-gray-800' : 'text-white'} />
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-lg flex items-center font-medium hover:shadow-lg transition duration-300">
              Get Started
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} focus:outline-none`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } transition-all duration-300 overflow-hidden bg-white`}
      >
        <div className="px-4 py-6 space-y-4">
          <MobileNavLinks closeMenu={() => setIsOpen(false)} />
          <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-3 rounded-lg flex items-center justify-center font-medium">
            Get Started
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </nav>
  );
};

interface NavLinksProps {
  textColor: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ textColor }) => {
  return (
    <>
      <a href="#home" className={`${textColor} hover:text-indigo-600 font-medium transition duration-200`}>
        Home
      </a>
      <a href="#services" className={`${textColor} hover:text-indigo-600 font-medium transition duration-200`}>
        Services
      </a>
      <a href="#about" className={`${textColor} hover:text-indigo-600 font-medium transition duration-200`}>
        About
      </a>
      <a href="#portfolio" className={`${textColor} hover:text-indigo-600 font-medium transition duration-200`}>
        Portfolio
      </a>
      <a href="#testimonials" className={`${textColor} hover:text-indigo-600 font-medium transition duration-200`}>
        Testimonials
      </a>
      <a href="#contact" className={`${textColor} hover:text-indigo-600 font-medium transition duration-200`}>
        Contact
      </a>
    </>
  );
};

interface MobileNavLinksProps {
  closeMenu: () => void;
}

const MobileNavLinks: React.FC<MobileNavLinksProps> = ({ closeMenu }) => {
  return (
    <>
      <a 
        href="#home" 
        className="block text-gray-800 hover:text-indigo-600 font-medium py-2 transition duration-200"
        onClick={closeMenu}
      >
        Home
      </a>
      <a 
        href="#services" 
        className="block text-gray-800 hover:text-indigo-600 font-medium py-2 transition duration-200"
        onClick={closeMenu}
      >
        Services
      </a>
      <a 
        href="#about" 
        className="block text-gray-800 hover:text-indigo-600 font-medium py-2 transition duration-200"
        onClick={closeMenu}
      >
        About
      </a>
      <a 
        href="#portfolio" 
        className="block text-gray-800 hover:text-indigo-600 font-medium py-2 transition duration-200"
        onClick={closeMenu}
      >
        Portfolio
      </a>
      <a 
        href="#testimonials" 
        className="block text-gray-800 hover:text-indigo-600 font-medium py-2 transition duration-200"
        onClick={closeMenu}
      >
        Testimonials
      </a>
      <a 
        href="#contact" 
        className="block text-gray-800 hover:text-indigo-600 font-medium py-2 transition duration-200"
        onClick={closeMenu}
      >
        Contact
      </a>
    </>
  );
};

export default Navbar;