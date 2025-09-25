import React from 'react';
import './Products.css';

const Products = () => {
  return (
    <div className="products-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title fade-in">Soluzioni EnjoyCube per il Ricondizionato</h1>
          <p className="page-subtitle fade-in">Scopri le nostre soluzioni hardware e software dedicate ai professionisti, laboratori e aziende nel settore dei dispositivi ricondizionati</p>
        </div>
      </section>

      {/* Cubes Overview */}
      <section className="cubes-overview section">
        <div className="container">
          <h2 className="section-title">Stazioni di Test e Diagnostica</h2>
          <p className="section-intro fade-in">
            I nostri cubi hardware sono progettati specificamente per laboratori di ricondizionamento, fornendo test standardizzati e certificati per ogni dispositivo.
          </p>
          
          <div className="product-grid">
            <div className="product-item fade-in">
              <div className="product-image"></div>
              <div className="product-details">
                <h3>EnjoyCube Diagnostic Pro</h3>
                <p className="product-description">
                  La nostra soluzione hardware avanzata equipaggiata con AI per la diagnostica completa, valutazione e certificazione dei dispositivi ricondizionati.
                </p>
                <ul className="product-features">
                  <li><i className="fa-solid fa-microchip"></i> Test hardware completi</li>
                  <li><i className="fa-solid fa-brain"></i> Analisi della scheda madre</li>
                  <li><i className="fa-solid fa-battery-full"></i> Valutazione stato batteria</li>
                  <li><i className="fa-solid fa-bolt"></i> Test di ricarica avanzati</li>
                  <li><i className="fa-solid fa-certificate"></i> Certificazione automatica</li>
                </ul>
                <div className="product-actions">
                  <a href="/contact" className="btn">Richiedi Informazioni</a>
                </div>
              </div>
            </div>
            
            <div className="product-item reverse fade-in">
              <div className="product-image"></div>
              <div className="product-details">
                <h3>EnjoyCube Mini</h3>
                <p className="product-description">
                  Una soluzione compatta per piccoli laboratori e negozi, che offre funzionalità diagnostiche essenziali in un design più economico e compatto.
                </p>
                <ul className="product-features">
                  <li><i className="fa-solid fa-microchip"></i> Test hardware essenziali</li>
                  <li><i className="fa-solid fa-battery-full"></i> Controllo batteria</li>
                  <li><i className="fa-solid fa-mobile-screen"></i> Test touchscreen</li>
                  <li><i className="fa-solid fa-camera"></i> Test fotocamera base</li>
                  <li><i className="fa-solid fa-file-pdf"></i> Report semplificati</li>
                </ul>
                <div className="product-actions">
                  <a href="/contact" className="btn">Richiedi Informazioni</a>
                </div>
              </div>
            </div>
            
            <div className="product-item fade-in">
              <div className="product-image"></div>
              <div className="product-details">
                <h3>EnjoyCube Enterprise</h3>
                <p className="product-description">
                  La nostra soluzione hardware più potente per grandi laboratori e catene con alto volume di dispositivi da ricondizionare e necessità di gestione avanzata.
                </p>
                <ul className="product-features">
                  <li><i className="fa-solid fa-server"></i> Test multipli in parallelo</li>
                  <li><i className="fa-solid fa-brain"></i> Analisi avanzata con AI</li>
                  <li><i className="fa-solid fa-database"></i> Gestione inventario integrata</li>
                  <li><i className="fa-solid fa-chart-bar"></i> Reportistica completa</li>
                  <li><i className="fa-solid fa-shield-halved"></i> Integrazione con sistemi ERP</li>
                </ul>
                <div className="product-actions">
                  <a href="/contact" className="btn">Richiedi Informazioni</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technical Specifications 
      <section className="tech-specs section">
        <div className="container">
          <h2 className="section-title">Specifiche Tecniche</h2>
          
          <div className="specs-container fade-in">
            <div className="specs-table-container">
              <table className="specs-table">
                <thead>
                  <tr>
                    <th>Caratteristica</th>
                    <th>EnjoyCube Mini</th>
                    <th>EnjoyCube Diagnostic</th>
                    <th>EnjoyCube Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Unità di Elaborazione</td>
                    <td>Raspberry Pi Compact</td>
                    <td>Raspberry Pi Standard</td>
                    <td>Raspberry Pi Enhanced</td>
                  </tr>
                  <tr>
                    <td>Processori AI</td>
                    <td>1× IMX500</td>
                    <td>2× IMX500</td>
                    <td>4× IMX500</td>
                  </tr>
                  <tr>
                    <td>Display</td>
                    <td>7" Touch Display</td>
                    <td>10" HD Touch Display</td>
                    <td>15" 4K Touch Display</td>
                  </tr>
                  <tr>
                    <td>Connettività</td>
                    <td>Wi-Fi, Bluetooth</td>
                    <td>Wi-Fi, Bluetooth, Ethernet</td>
                    <td>Wi-Fi 6, Bluetooth 5.2, Dual Ethernet</td>
                  </tr>
                  <tr>
                    <td>Capacità Diagnostica</td>
                    <td>Fino a 100 dispositivi/giorno</td>
                    <td>Fino a 500 dispositivi/giorno</td>
                    <td>1000+ dispositivi/giorno</td>
                  </tr>
                  <tr>
                    <td>Alimentazione</td>
                    <td>Standard (60W)</td>
                    <td>Potenziata (120W)</td>
                    <td>Professionale (200W)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Software Solutions */}
      <section className="software-solutions section">
        <div className="container">
          <h2 className="section-title">Ecosistema Software EnjoyCube</h2>
          <p className="section-intro fade-in">
            Il nostro hardware è alimentato da sofisticate soluzioni software che consentono una gestione completa del ciclo di vita dei dispositivi.
          </p>
          
          <div className="solutions-grid">
            <div className="solution-card fade-in">
              <div className="solution-icon">
                <i className="fa-solid fa-magnifying-glass-chart"></i>
              </div>
              <h3>Piattaforma Diagnostica</h3>
              <p>
                Valutazione completa dei dispositivi utilizzando algoritmi potenziati dall'AI per identificare problemi hardware e software con alta precisione.
              </p>
            </div>
            
            <div className="solution-card fade-in">
              <div className="solution-icon">
                <i className="fa-solid fa-arrows-rotate"></i>
              </div>
              <h3>Gestione Aggiornamenti</h3>
              <p>
                Sistema di distribuzione degli aggiornamenti software senza interruzioni con capacità di rollback e opzioni di distribuzione programmata.
              </p>
            </div>
            
            <div className="solution-card fade-in">
              <div className="solution-icon">
                <i className="fa-solid fa-headset"></i>
              </div>
              <h3>Gestione Servizi</h3>
              <p>
                Sistema completo di ticketing e supporto per monitorare le riparazioni dei dispositivi, le richieste di servizio e la manutenzione.
              </p>
            </div>
            
            <div className="solution-card fade-in">
              <div className="solution-icon">
                <i className="fa-solid fa-chart-line"></i>
              </div>
              <h3>Dashboard Analitica</h3>
              <p>
                Approfondimenti in tempo reale sulla salute dei dispositivi, modelli di utilizzo e indicatori di manutenzione predittiva.
              </p>
            </div>
            
            <div className="solution-card fade-in">
              <div className="solution-icon">
                <i className="fa-solid fa-link"></i>
              </div>
              <h3>Hub di Integrazione</h3>
              <p>
                Connessione con i sistemi aziendali esistenti attraverso la nostra robusta API e integrazioni precostituite.
              </p>
            </div>
            
            <div className="solution-card fade-in">
              <div className="solution-icon">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3>Centro Sicurezza</h3>
              <p>
                Gestione completa della sicurezza con rilevamento delle minacce in tempo reale e reportistica di conformità.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="case-studies section">
        <div className="container">
          <h2 className="section-title">Storie di Successo</h2>
          
          <div className="case-studies-grid">
            <div className="case-study-card fade-in">
              <div className="case-study-image"></div>
              <div className="case-study-content">
                <h3>Intervista a Sky tg24</h3>
                <p className="case-study-result">Enjoy Cube, la rivoluzione degli smartphone usati</p>
                <p className="case-study-text">
                  Un “cubotto” realizzato in Italia grazie ad algoritmi di intelligenza artificiale è in grado, in pochi istanti, di analizzare da cima a fondo uno smartphone offrendo poi una valutazione chiara, onesta e oggettiva. L’abbiamo provato in anteprima, ecco come funziona e a chi è rivolto
                </p>
                <a href="https://tg24.sky.it/tecnologia/now/2025/04/23/enjoy-cube-come-funziona" className="btn-text" target='_blank'>Leggi la storia completa <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
            
            {/*<div className="case-study-card fade-in">
              <div className="case-study-image"></div>
              <div className="case-study-content">
                <h3>Fornitore Servizi Mobili</h3>
                <p className="case-study-result">30% di aumento nel tasso di riparazione al primo tentativo</p>
                <p className="case-study-text">
                  Un fornitore di servizi mobili nazionale ha integrato EnjoyCube nei propri centri di riparazione, migliorando significativamente la precisione diagnostica e i tassi di successo delle riparazioni.
                </p>
                <a href="#" className="btn-text">Leggi la storia completa <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>*/}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-content fade-in">
            <h2>Trova la soluzione EnjoyCube più adatta alle tue esigenze</h2>
            <p>Contatta il nostro team per una consulenza personalizzata e una dimostrazione</p>
            <a href="/contact" className="btn">Mettiti in Contatto</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
