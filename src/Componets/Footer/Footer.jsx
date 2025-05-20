import './Footer.css'

const Footer = () => {
    return (
            <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="company-section">
            <h2 className="section-title">Company Name</h2>
            <p className="company-description">
              Creating amazing digital experiences with cutting-edge technology solutions.
            </p>
            <div className="social-icons">
              <a href="https://facebook.com" className="social-link" aria-label="Facebook">
                FaceBook
              </a>
              <a href="https://instagram.com" className="social-link" aria-label="Instagram">
                Instagram 
              </a>
              <a href="https://twitter.com" className="social-link" aria-label="Twitter">
                Twitter
              </a>
              <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn">
                Linkedin
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="section-title">Quick Links</h3>
            <ul className="footer-links">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="section-title">Resources</h3>
            <ul className="footer-links">
              <li>Blog</li>
              <li>FAQ</li>
              <li>Support</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="section-title">Contact Us</h3>
            <address className="address">
              <p>123 Business Street</p>
              <p>San Francisco, CA 94103</p>
              <p>Email: contact@example.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-divider">
          <p className="copyright">
            © 2025 Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    );
};

export default Footer;