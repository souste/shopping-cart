import "./styles.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top-email">
        <h2>Become one of our members</h2>
        <p>Enjoy 10% off your next purchase when you sign up</p>
        <input type="text" />
      </div>
      <div className="footer-middle-links">
        <ul className="footer-middle-links-lists">
          <li className="footer-middle-links-lists-title">COMPANY</li>
          <li>Our Story</li>
          <li>Locations</li>
          <li>In Store Shopping</li>
          <li>Fashion Trends</li>
          <li>Social Media</li>
        </ul>
        <ul className="footer-middle-links-lists">
          <li className="footer-middle-links-lists-title">BRAND</li>
          <li>Fashion Trends</li>
          <li>Tech Gadgets</li>
          <li>Electronics</li>
          <li>Assessories</li>
          <li>Blog</li>
        </ul>
        <ul className="footer-middle-links-lists">
          <li className="footer-middle-links-lists-title">HELP</li>
          <li>Shipping & Returns</li>
          <li>Repairs</li>
          <li>Warranty</li>
          <li>FAQ</li>
          <li>Contact us</li>
        </ul>
        <div className="footer-contact">
          <div className="footer-contact-title">
            <h2>ASK A SPECIALIST</h2>
            <p>We are here to help</p>
          </div>

          <div className="footer-contact-methods">
            <div>
              <div>[phone icon]</div>
              <div className="footer-phone">(000)-SOUSTE</div>
            </div>
            <div>
              <div>[email icon]</div>
              <div className="footer-email">support@souste.com</div>
            </div>
            <div>
              <div>[live chat icon]</div>
              <div className="footer-chat">Live Chat</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-copyright">
        <p className="footer-bottom-text">Developed by souste</p>
        <p>@ Copyright 2024 souste. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
