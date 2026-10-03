import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Button from './Button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = ({ isActive }) =>
    isActive
      ? "block text-suppliDarkGreen font-bold border-b-2 border-suppliGreen pb-1 transition-all"
      : "block text-gray-600 font-semibold hover:text-suppliDarkGreen hover:border-b-2 hover:border-suppliGreen/50 pb-1 transition-all";

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out border-b ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md border-gray-200 shadow-sm py-3' 
          : 'bg-white border-gray-100 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img 
                className={`w-auto object-contain transition-all duration-500 ${scrolled ? 'h-10' : 'h-14 sm:h-16'}`} 
                src="logo.png" 
                alt="Supplimed Logo" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10" aria-label="Main Navigation">
            <NavLink to="/" className={navClass}>Home</NavLink>
            <NavLink to="/about" className={navClass}>About Us</NavLink>
            <NavLink to="/products" className={navClass}>Products</NavLink>
            <NavLink to="/contact" className={navClass}>Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center">
            <Link to="/contact">
              <Button variant="primary" className="shadow-sm hover:shadow-md hover:-translate-y-0.5 rounded-lg px-7 py-2.5 font-bold">
                Enquiry Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-suppliGreen focus:outline-none p-2"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`md:hidden transition-all duration-300 ease-in-out bg-white border-b border-gray-200 ${isMobileMenuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className="px-4 pt-4 pb-6 space-y-4 shadow-inner" aria-label="Mobile Navigation">
          <NavLink to="/" className={navClass}>Home</NavLink>
          <NavLink to="/about" className={navClass}>About Us</NavLink>
          <NavLink to="/products" className={navClass}>Products</NavLink>
          <NavLink to="/contact" className={navClass}>Contact</NavLink>
          <Link to="/contact" className="block mt-6">
            <Button variant="primary" className="w-full rounded-lg py-3 font-bold">Enquiry Now</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;