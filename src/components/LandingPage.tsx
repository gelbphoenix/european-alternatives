import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <motion.div
        className="landing-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="landing-eu-flag"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          aria-hidden="true"
        >
          <span className="fi fi-eu landing-flag-icon"></span>
        </motion.div>

        <motion.h1
          className="landing-headline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          European Alternatives
        </motion.h1>

        <motion.p
          className="landing-subtext"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Discover European and open-source alternatives to US tech giants.
          Support digital sovereignty, data privacy, and local innovation.
          Take control of your digital life with software built in Europe.
        </motion.p>

        <motion.div
          className="landing-features"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="feature-item">
            <div className="feature-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
              </svg>
            </div>
            <div className="feature-text">
              <strong>GDPR Compliant</strong>
              <span>European services built with privacy-first principles</span>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <div className="feature-text">
              <strong>Digital Sovereignty</strong>
              <span>Keep your data in Europe, under European law</span>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="feature-text">
              <strong>Open Source Options</strong>
              <span>Transparent, auditable, and community-driven software</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="landing-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/browse" className="cta-button">
              Browse Alternatives
              <svg className="cta-arrow" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        <motion.p
          className="landing-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Community-curated catalogue. Contributions welcome.
        </motion.p>
      </motion.div>
    </div>
  );
}
