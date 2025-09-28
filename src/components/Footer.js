import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-info">
              <div className="footer-logo">
                <Link to="/">
                  <span className="logo-text">EnjoyCube</span>
                </Link>
              </div>
              <p>
                Soluzioni innovative per la gestione, diagnostica e manutenzione dei dispositivi.
              </p>
              <div className="social-links">
                <a href="https://www.facebook.com/enjoyricondizionati.it" className="social-link" target='_blank' rel="noreferrer">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/enjoyricondizionati/" className="social-link" target='_blank' rel="noreferrer">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>

            {/*<div className="footer-links">
              <h3>Link Rapidi</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/features">Funzionalità</Link></li>
                <li><Link to="/products">Prodotti</Link></li>
                <li><Link to="/about">Chi Siamo</Link></li>
                <li><Link to="/contact">Contatti</Link></li>
              </ul>
            </div>*/}

            <div className="footer-links" style={{gridColumnStart:"3"}}>
              <h3>Link Rapidi</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/features">Funzionalità</Link></li>
                <li><Link to="/products">Prodotti</Link></li>
                <li><Link to="/about">Chi Siamo</Link></li>
                <li><Link to="/contact">Contatti</Link></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h3>Contattaci</h3>
              <address>
                <p><i className="fa-solid fa-location-dot"></i>
                  <a
                    href='https://share.google/0OxuINwgOee964Gtr'
                    target='_blank'
                    rel="noreferrer"
                    className='contact-links'
                  >
                    Corso Vittorio Emanuele II, 52 - 70122 Bari
                  </a>
                </p>
                <p><i className="fa-solid fa-phone"></i>
                  <a
                    href='tel:+39 02 213 5117'
                    target='_blank'
                    rel="noreferrer"
                    className='contact-links'
                  >
                    +39 02 213 5117
                  </a>
                </p>
                <p><i className="fa-solid fa-envelope"></i>
                  <a
                    href='mailto:info@enjoycube.it'
                    target='_blank'
                    rel="noreferrer"
                    className='contact-links'
                  >
                    info@enjoycube.it
                  </a> 
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Prestige Group Srl. Tutti i diritti riservati.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/privacy-policy">Termini di Servizio</Link>
            <Link to="/privacy-policy">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;