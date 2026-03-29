import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3 className="footer-title">TASSEL2TASSEL</h3>
          <p className="footer-subtitle">A Violet's Guide</p>
          
          <p className="footer-text">
            Made with ❤️ by Samantha<br />
            NYU Tandon '26
          </p>

          <div className="footer-social">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:your.email@nyu.edu" 
              className="social-link"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Tassel2Tassel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;