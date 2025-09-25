import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    subject: 'Richiesta Generale'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
      subject: 'Richiesta Generale'
    });

    // Reset submission status after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title fade-in">Contattaci</h1>
          <p className="page-subtitle fade-in">Richiedi una demo professionale o informazioni sui nostri servizi per laboratori e aziende nel settore del ricondizionato</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info fade-in">
              <h2>Mettiti in Contatto</h2>
              <p>Ci piacerebbe sentirti. Contattaci per ulteriori informazioni sui nostri servizi di diagnostica e certificazione per il ricondizionato, per programmare una demo professionale o per discutere come EnjoyCube può migliorare i processi del tuo laboratorio.</p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="method-details">
                    <h3>Vieni a Trovarci</h3>
                    <p>Corso Vittorio Emanuele II, 52 - 70122 Bari</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="method-details">
                    <h3>Chiamaci</h3>
                    <p>+39 02 213 5117</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="method-details">
                    <h3>Scrivici</h3>
                    <p>info@enjoycube.it</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="social-link">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>

            <div className="contact-form-container fade-in">
              <h2>Inviaci un Messaggio</h2>

              {submitted ? (
                <div className="success-message">
                  <i className="fa-solid fa-circle-check"></i>
                  <p>Grazie per il tuo messaggio! Ti risponderemo al più presto.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Nome Completo</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Indirizzo Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="company">Azienda</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Numero di Telefono</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Oggetto</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="Richiesta Generale">Richiesta Generale</option>
                      <option value="Informazioni Piani">Informazioni sui Piani</option>
                      <option value="Demo Professionale">Richiedi Demo Professionale</option>
                      <option value="Supporto Tecnico">Supporto Tecnico</option>
                      <option value="Partnership">Diventa Partner Enjoy</option>
                      <option value="Integrazione">Integrazione con Sistemi Esistenti</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Messaggio</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn submit-btn">Invia Messaggio</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          {/* In a real implementation, you would integrate Google Maps or another mapping service */}
          <div className="map-placeholder">
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;