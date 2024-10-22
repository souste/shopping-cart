import "./styles.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top-email">
        <p>Subscribe for top deals</p>
        <p>Enjoy 10% off your next purchase when you sign up</p>
        <input type="text" />
      </div>
      <div className="footer-bottom-copyright">
        <p className="footer-bottom-text">Developed by souste</p>
        <p>@ Copyright 2024 Souste. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
