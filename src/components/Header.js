import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location]);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''} noselect`}>
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <img 
              src="/logo.png" 
              alt="EnjoyCube - AI Diagnostics Platform" 
              className="logo-image"
            />
          </Link>
        </div>
        
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}></span>
        </button>
        
        <nav className={`main-nav ${mobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === '/features' ? 'active' : ''}>
              <Link to="/features">Soluzioni</Link>
            </li>
            <li className={location.pathname === '/products' ? 'active' : ''}>
              <Link to="/products">Prodotti</Link>
            </li>
            <li className={location.pathname === '/about' ? 'active' : ''}>
              <Link to="/about">Chi Siamo</Link>
            </li>
          </ul>
          <div className="nav-buttons">
            <a href="https:/enjoycube.it/admin" className="btn btn-secondary">Accedi</a>
            <a href="/contact" className="btn">Contattaci</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;