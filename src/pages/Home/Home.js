import React from 'react';
import './Home.css';
import skyImage from "../../assets/images/enjoy-cube-skytg24-03.avif"
import SustainabilitySection from './components/SustainabilitySection';
import ImageCard from './components/ImageCard';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title fade-in">La tecnologia che potenzia il tuo business nel ricondizionato.</h1>
            <p className="hero-subtitle fade-in">
              Enjoy Cube è lo strumento avanzato di diagnostica e valutazione pensato per professionisti, laboratori e aziende del settore.
            </p>
            <div className="hero-buttons fade-in">
              <a href="/contact" className="btn">Richiedi una demo professionale</a>
              <a href="/features" className="btn btn-secondary">Scopri di più</a>
            </div>
          </div>
          <div className="hero-image fade-in">
            {/* Will be styled with CSS background */}
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="features-highlight section">
        <div className="container">
          <h2 className="section-title">Cos'è Enjoy Cube</h2>

          <p className="section-intro fade-in">
            Un Strumento Ai che semplifica e standardizza i processi di trade-in, buy-back, test funzionali, perizie e gestione dei dispositivi.
          </p>

          <div className="capabilities-row">
            <div className="capability-tag">Diagnosi software e hardware automatizzate</div>
            <div className="capability-tag">AutoGrading estetico basato su AI</div>
            <div className="capability-tag">Analisi intelligente dei parametri di ricarica</div>
            <div className="capability-tag">Oltre 200 test certificati(tra Android e IOS)</div>
            <div className="capability-tag">Analisi del panicfull su dispositivi IOS</div>
            <div className="capability-tag">Valutazione automatica</div>
            <div className="capability-tag">Certificazione qualità</div>
            <div className="capability-tag">Cancelazione certificata del Dato</div>
          </div>

          <div className="features-grid">
            <div className="feature-card fade-in">
              <div className="feature-icon">
                <i className="fa-solid fa-microchip"></i>
              </div>
              <h3>Diagnosi Automatizzate</h3>
              <p>
                Test completi hardware e software per garantire la qualità e sicurezza dei dispositivi
              </p>
            </div>

            <div className="feature-card fade-in">
              <div className="feature-icon">
                <i className="fa-solid fa-brain"></i>
              </div>
              <h3>Intelligenza Artificiale</h3>
              <p>
                Algoritmi AI driven per rilevare automaticamente difetti estetici e malfunzionamenti delle compenenti e ottimizzare le valutazioni dei dispositivi
              </p>
            </div>

            <div className="feature-card fade-in">
              <div className="feature-icon">
                <i className="fa-solid fa-certificate"></i>
              </div>
              <h3>Certificazione Completa</h3>
              <p>
                Oltre 200 test certificati(tra Android e IOS) per garantire la massima qualità e affidabilità nel processo di permuta e assistenza
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Funzionalità per il tuo laboratorio */}
      <section className="lab-features section">
        <div className="container">
          <h2 className="section-title">Funzionalità create per ottimizzare i processi della tua Azienda o del tuo Laboratorio</h2>

          <div className="lab-features-grid">
            <div className="lab-feature-card fade-in">
              <div className="feature-icon">
                <i className="fa-solid fa-list-check"></i>
              </div>
              <h3>Standardizzazione dei test</h3>
              <p>Procedure uguali per ogni device, senza errori umani</p>
            </div>

            <div className="lab-feature-card fade-in">
              <div className="feature-icon">
                <i className="fa-solid fa-certificate"></i>
              </div>
              <h3>Certificazione completa</h3>
              <p>Documentazione utile per clienti, fornitori e marketplace</p>
            </div>

            <div className="lab-feature-card fade-in">
              <div className="feature-icon">
                <i className="fa-solid fa-warehouse"></i>
              </div>
              <h3>Gestione inventario</h3>
              <p>Tracciamento automatico dei dispositivi acquistati e riparati</p>
            </div>

            <div className="lab-feature-card fade-in">
              <div className="feature-icon">
                <i className="fa-solid fa-chart-bar"></i>
              </div>
              <h3>Reportistica avanzata</h3>
              <p>Dati su valutazioni, riparazioni, vendite, margini</p>
            </div>

            <div className="lab-feature-card fade-in">
              <div className="feature-icon">
                <i className="fa-solid fa-plug"></i>
              </div>
              <h3>Integrazione con gestionali terzi</h3>
              <p>Compatibile con ERP e software già usati in azienda</p>
            </div>

            <div className="lab-feature-card fade-in">
              <div className="feature-icon">
                <i className="fa-solid fa-robot"></i>
              </div>
              <h3>Agent AI</h3>
              <p>Suggerimenti su trade-in, prezzi e strategie di vendita</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vantaggi per aziende e professionisti */}
      <section className="product-showcase section">
        <div className="container">
          <h2 className="section-title">Vantaggi per aziende e professionisti</h2>

          <div className="product-row">
            <div className="product-card fade-in">
              <div className="product-image tel-image"></div>
              <div className="product-content">
                <h3>Velocità operativa</h3>
                <p>Più dispositivi testati in meno tempo, aumentando l'efficienza del tuo laboratorio e riducendo i tempi di lavorazione.</p>
                <a href="/features" className="btn-text">Scopri di più <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>

            <div className="product-card reverse fade-in">
              <div className="product-image trasparenza-image"></div>
              <div className="product-content">
                <h3>Trasparenza</h3>
                <p>Certificazioni standardizzate e affidabili che aumentano la fiducia dei clienti e la trasparenza delle operazioni.</p>
                <a href="/features" className="btn-text">Scopri di più <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>

            <div className="product-card fade-in">
              <div className="product-image marginalita-image"></div>
              <div className="product-content">
                <h3>Marginalità</h3>
                <p>Nuovi ricavi da test, trade-in e rivendita, con ottimizzazione dei processi che porta a maggiori profitti.</p>
                <a href="/features" className="btn-text">Scopri di più <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>

            <div className="product-card reverse fade-in">
              <div className="product-image scalabilita-image"></div>
              <div className="product-content">
                <h3>Scalabilità</h3>
                <p>Soluzione modulare (Basic, Advance, Pro, Custom) per adattarsi a ogni dimensione aziendale e crescere insieme al tuo business.</p>
                <a href="/features" className="btn-text">Scopri di più <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Piani professionali */}
      <section className="plans-section section">
        <div className="container">
          <h2 className="section-title">Piani professionali</h2>

          <div className="plans-grid">
            <div className="plan-card fade-in">
              <div className="plan-header">
                <h3>Basic</h3>
                <p className="plan-description">Soluzione starter per piccoli laboratori</p>
              </div>
              <ul className="plan-features">
                <li><i className="fa-solid fa-check"></i> Diagnostica essenziale</li>
                <li><i className="fa-solid fa-check"></i> Report base</li>
                <li><i className="fa-solid fa-check"></i> Gestione inventario</li>
              </ul>
              <a href="/contact" className="btn">Richiedi informazioni</a>
            </div>

            <div className="plan-card highlighted fade-in">
              <div className="plan-header">
                <h3>Advance</h3>
                <p className="plan-description">Soluzioni per Indipendent Retail</p>
              </div>
              <ul className="plan-features">
                <li><i className="fa-solid fa-check"></i> Possibilità di Trade-in</li>
                <li><i className="fa-solid fa-check"></i> Reportistica completa</li>
                <li><i className="fa-solid fa-check"></i> Integrazione API</li>
              </ul>
              <a href="/contact" className="btn">Richiedi informazioni</a>
            </div>

            <div className="plan-card fade-in">
              <div className="plan-header">
                <h3>Pro</h3>
                <p className="plan-description">Soluzioni per Retailers</p>
              </div>
              <ul className="plan-features">
                <li><i className="fa-solid fa-check"></i> Tutte le funzionalità Advance</li>
                <li><i className="fa-solid fa-check"></i> Agent AI</li>
                <li><i className="fa-solid fa-check"></i> Integrazioni API</li>
                <li><i className="fa-solid fa-check"></i> Supporto prioritario</li>
              </ul>
              <a href="/contact" className="btn">Richiedi informazioni</a>
            </div>

            <div className="plan-card fade-in">
              <div className="plan-header">
                <h3>Custom</h3>
                <p className="plan-description">Personalizzato per le tue esigenze</p>
              </div>
              <ul className="plan-features">
                <li><i className="fa-solid fa-check"></i> Soluzione su misura</li>
                <li><i className="fa-solid fa-check"></i> Personalizzazione completa</li>
                <li><i className="fa-solid fa-check"></i> Formazione dedicata</li>
                <li><i className="fa-solid fa-check"></i> Account manager</li>
              </ul>
              <a href="/contact" className="btn">Richiedi informazioni</a>
            </div>
          </div>

          
          <ImageCard header={"Parlano di noi!"} icon='fa-solid fa-handshake' image={skyImage}>
            <p>clicca per vedere l'intervista di Sky tg24</p>
            <a href="https://tg24.sky.it/tecnologia/now/2025/04/23/enjoy-cube-come-funziona" className="btn-text" target='_blank'>Scopri di più <i className="fa-solid fa-arrow-right"></i></a>
          </ImageCard>
        </div>
      </section>


      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-content fade-in">
            <h2>Automatizza e scala i tuoi processi di ricondizionamento con Enjoy Cube.</h2>
            <p>Trasforma il tuo business con la nostra soluzione completa di diagnostica e gestione.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn">Richiedi una demo per la tua azienda</a>
              <a href="/contact" className="btn btn-secondary">Diventa partner Enjoy</a>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <SustainabilitySection/>
    </div>
  );
};

export default Home;