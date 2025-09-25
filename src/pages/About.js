import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title fade-in">Chi Siamo</h1>
          <p className="page-subtitle fade-in">Scopri la storia dietro la nostra innovativa piattaforma per la gestione dei dispositivi ricondizionati</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story section">
        <div className="container">
          <div className="story-content">
            <div className="story-text fade-in">
              <h2 className="section-title">La Nostra Storia</h2>
              <p>
                EnjoyCube è nata da un'idea semplice ma potente: rendere la gestione dei dispositivi ricondizionati più intelligente, efficiente e sicura. Fondata nel 2020, il nostro team di appassionati di tecnologia ed esperti del settore si è unito con una visione condivisa: trasformare il modo in cui le aziende valutano, testano e gestiscono i dispositivi ricondizionati.
              </p>
              <p>
                Ciò che è iniziato come una soluzione per la diagnostica dei dispositivi su piccola scala si è evoluto in una piattaforma completa che serve laboratori e aziende di tutte le dimensioni in Italia e oltre. Il nostro percorso è stato caratterizzato da un'innovazione continua, mettendo sempre le esigenze dei professionisti del ricondizionato in primo piano.
              </p>
              <p>
                Oggi, EnjoyCube rappresenta una testimonianza del nostro impegno per l'eccellenza, offrendo una suite di potenti strumenti che standardizzano i processi di valutazione e certificazione, fornendo al contempo approfondimenti e controllo dettagliati per ottimizzare la gestione del laboratorio.
              </p>
            </div>
            <div className="story-image fade-in">
              {/* Will be styled with CSS background */}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="our-mission section">
        <div className="container">
          <h2 className="section-title text-center">La Nostra Missione</h2>
          <div className="mission-content fade-in">
            <p className="mission-statement">
              "Fornire ai professionisti del ricondizionato soluzioni intelligenti di testing e gestione che standardizzino i processi, aumentino la qualità e creino un'esperienza di acquisto più trasparente per il consumatore finale."
            </p>
          </div>
          <div className="values-grid">
            <div className="value-card fade-in">
              <div className="value-icon">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <h3>Innovazione</h3>
              <p>Spingiamo continuamente i confini di ciò che è possibile nella tecnologia di gestione dei dispositivi</p>
            </div>

            <div className="value-card fade-in">
              <div className="value-icon">
                <i className="fa-solid fa-users"></i>
              </div>
              <h3>Collaborazione</h3>
              <p>Crediamo nel potere del lavoro di squadra e nella partnership con i nostri clienti</p>
            </div>

            <div className="value-card fade-in">
              <div className="value-icon">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3>Affidabilità</h3>
              <p>Costruiamo soluzioni su cui puoi contare, giorno dopo giorno</p>
            </div>

            <div className="value-card fade-in">
              <div className="value-icon">
                <i className="fa-solid fa-chart-line"></i>
              </div>
              <h3>Eccellenza</h3>
              <p>Ci impegniamo per i più alti standard in tutto ciò che facciamo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section">
        <div className="container">
          <h2 className="section-title">Il Nostro Team</h2>
          <p className="team-intro fade-in">
            EnjoyCube è alimentata da un team appassionato di esperti di tecnologia, sviluppatori, designer e specialisti del successo del cliente che lavorano insieme per offrire eccellenza.
          </p>
          <div className="team-grid">
            <div className="team-member fade-in">
              <div className="member-photo">
                {/* Will be styled with CSS background */}
              </div>
              <h3>Alessandro Bianchi</h3>
              <p>Fondatore & CEO</p>
            </div>

            <div className="team-member fade-in">
              <div className="member-photo">
                {/* Will be styled with CSS background */}
              </div>
              <h3>Valentina Rossi</h3>
              <p>Direttore Tecnico</p>
            </div>

            <div className="team-member fade-in">
              <div className="member-photo">
                {/* Will be styled with CSS background */}
              </div>
              <h3>Marco Ferrari</h3>
              <p>Responsabile Sviluppo Prodotto</p>
            </div>

            <div className="team-member fade-in">
              <div className="member-photo">
                {/* Will be styled with CSS background */}
              </div>
              <h3>Sofia Marino</h3>
              <p>Direttore Successo Clienti</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-content fade-in">
            <h2>Vuoi far parte del nostro percorso?</h2>
            <p>Unisciti alla crescente comunità di aziende che si affidano a EnjoyCube per le loro esigenze di gestione dei dispositivi.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn">Contattaci</a>
              <a href="/features" className="btn btn-secondary">Esplora le Nostre Soluzioni</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;