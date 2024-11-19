import "./styles.css";
import phoneIcon from "./assets/phone-icon.png";
import mailIcon from "./assets/mail-icon.png";
import liveChatIcon from "./assets/live-chat-icon.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top-email">
        <h2>Become one of our members</h2>
        <p>Enjoy 10% off your next purchase when you sign up</p>
        <div className="email-subscribe-container">
          <input type="email" className="subscribe-input" placeholder="Enter your email here" />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>
      <div className="footer-middle-links">
        <ul className="footer-middle-links-lists">
          <li className="footer-middle-links-lists-title">COMPANY</li>
          <li>Our Story</li>
          <li>Locations</li>
          <li>In Store Shopping</li>
          <li>Our Vision</li>
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
            <p className="contact-title">ASK A SPECIALIST</p>
            <p>Need help? Contact us by phone, email, or live chat. </p>
          </div>

          <div className="footer-contact-methods">
            <div className="icon-contact-container">
              <img src={phoneIcon} alt="phone-icon" />
              <div className="footer-phone">(000)-SOUSTE</div>
            </div>
            <div className="icon-contact-container">
              <img src={mailIcon} alt="mail-icon" />
              <div className="footer-email">support@souste.com</div>
            </div>
            <div className="icon-contact-container">
              <img src={liveChatIcon} alt="live-chat-icon" />
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
