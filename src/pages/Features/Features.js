import React from 'react';
import "./Features.css"
import WorkflowSection from './components/WorkflowSection.js';

const Features = () => {
  return (
    <div className="features-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title fade-in">Funzionalità EnjoyCube per il Ricondizionato</h1>
          <p className="page-subtitle fade-in">Scopri le potenti capacità che rendono EnjoyCube la soluzione leader per la diagnostica, valutazione e gestione dei dispositivi ricondizionati</p>
        </div>
      </section>

      {/* Main Features */}
      <section className="main-features section">
        <div className="container">
          <h2 className="section-title">Funzionalità Principali</h2>
          
          <div className="feature-item fade-in">
            <div className="feature-image">
              <div className='img-diagnostica img'/>
            </div>
            <div className="feature-details">
              <h3>Diagnostica Automatizzata dei Dispositivi</h3>
              <p>Il nostro sistema di diagnostica alimentato da AI analizza le prestazioni dei dispositivi ricondizionati in modo standardizzato, identificando problemi e classificando lo stato del dispositivo. Il sistema fornisce:</p>
              <ul>
                <li>Valutazione completa dell'hardware</li>
                <li>Verifica dello stato della batteria e scheda madre</li>
                <li>Test funzionali completi</li>
                <li>Certificazione dello stato del dispositivo</li>
              </ul>
            </div>
          </div>

          {/*<div className="feature-item reverse fade-in">
            <div className="feature-image">
              {/* Placeholder for feature image }
            </div>
            <div className="feature-details">
              <h3>Gestione Inventario e Tracciabilità</h3>
              <p>Tieni traccia dell'intero ciclo di vita dei dispositivi ricondizionati con il nostro sistema di gestione dell'inventario. Le funzionalità includono:</p>
              <ul>
                <li>Tracciamento dei dispositivi da acquisizione a vendita</li>
                <li>Gestione del magazzino con filtri avanzati</li>
                <li>Storico completo delle riparazioni e test</li>
                <li>Reportistica dettagliata per modello, categoria, stato</li>
                <li>Integrazione con sistemi di vendita e marketplace</li>
              </ul>
            </div>
          </div>

          <div className="feature-item fade-in">
            <div className="feature-image">
              {/* Placeholder for feature image }
            </div>
            <div className="feature-details">
              <h3>Pannello di Assistenza e Supporto</h3>
              <p>Gestisci le chiamate di servizio e le riparazioni in modo efficiente con la nostra dashboard di assistenza completa:</p>
              <ul>
                <li>Sistema di gestione dei ticket</li>
                <li>Aggiornamenti di stato in tempo reale</li>
                <li>Tracciamento della cronologia di servizio</li>
                <li>Assegnazione dei tecnici</li>
                <li>Strumenti di comunicazione con i clienti</li>
                <li>Analisi delle prestazioni</li>
              </ul>
            </div>
          </div>*/}

          <div className="feature-item reverse fade-in">
            <div className="feature-image">
              <div className='img-logging img'/>
            </div>
            <div className="feature-details">
              <h3>Logging e Monitoraggio Centralizzato</h3>
              <p>Tieni traccia di tutto ciò che accade nel tuo ecosistema di dispositivi con il nostro sistema di logging avanzato:</p>
              <ul>
                <li>Integrazione con Grafana e Loki</li>
                <li>Streaming dei log in tempo reale</li>
                <li>Avvisi e notifiche personalizzabili</li>
                <li>Analisi dei dati storici</li>
                <li>Rilevamento delle anomalie</li>
              </ul>
            </div>
          </div>
        </div>
        
      </section>
      <section className='wf-section section'>
        <div className='wf-transition'/>
        <WorkflowSection/>
      </section>
      
      {/* Additional Features */}
      <section className="additional-features section">
        <div className="container">
          <h2 className="section-title">Funzionalità Aggiuntive</h2>
          
          <div className="features-grid">
            <div className="feature-card fade-in">
              <div className="feature-icon">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3>Sicurezza Avanzata</h3>
              <p>Protocolli di sicurezza multistrato per proteggere i tuoi dispositivi e dati dalle minacce</p>
            </div>

            <div className="feature-card fade-in">
              <div className="feature-icon">
                <i className="fa-solid fa-users"></i>
              </div>
              <h3>Gestione Multi-utente</h3>
              <p>Controllo di accesso basato sui ruoli con permessi personalizzabili per i membri del team</p>
            </div>

            <div className="feature-card fade-in">
              <div className="feature-icon">
                <i className="fa-solid fa-chart-pie"></i>
              </div>
              <h3>Dashboard Analitica</h3>
              <p>Reportistica completa e approfondimenti per ottimizzare le operazioni dei tuoi dispositivi</p>
            </div>

            <div className="feature-card fade-in">
              <div className="feature-icon">
                <i className="fa-solid fa-comments"></i>
              </div>
              <h3>Comunicazione In-app</h3>
              <p>Sistema di messaggistica integrato per una collaborazione fluida del team</p>
            </div>

            <div className="feature-card fade-in">
              <div className="feature-icon">
                <i className="fa-solid fa-plug"></i>
              </div>
              <h3>Integrazione API</h3>
              <p>Connetti con i tuoi strumenti esistenti attraverso la nostra API flessibile</p>
            </div>

            <div className="feature-card fade-in">
              <div className="feature-icon">
                <i className="fa-solid fa-file-export"></i>
              </div>
              <h3>Esportazione Dati</h3>
              <p>Esporta i tuoi dati in molteplici formati per ulteriori analisi</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-content fade-in">
            <h2>Pronto a sperimentare queste funzionalità?</h2>
            <p>Contattaci oggi per una dimostrazione personalizzata della piattaforma EnjoyCube.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn">Richiedi una Demo</a>
              <a href="./assets/pdfs/enjoycube-presentation.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" download="presentation.pdf">Scarica Brochure PDF</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );  
};

export default Features;