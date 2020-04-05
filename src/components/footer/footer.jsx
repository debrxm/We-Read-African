import React from 'react';
import { Link } from 'react-router-dom';
import instagram from '../../assets/socials/instagram.svg';
import facebook from '../../assets/socials/facebook.svg';
import twitter from '../../assets/socials/twitter.svg';
// import footerPattern from '../../assets/footerPattern.svg';
import CustomForm from '../newsletter/custom-form';
import SmartNewsletter from '../smart-newsletter/smart-newsletter';
import './footer.scss';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {window.innerWidth <= 500 ? <SmartNewsletter /> : null}
        <div className="menu">
          <h2 className="heading">Quick Links</h2>
          <div className="menu-links">
            <Link to="/" className="menu-link">
              Home
            </Link>
            <Link to="/signup" className="menu-link">
              Log In / Register
            </Link>
            <Link to="/podcast" className="menu-link">
              Podcast
            </Link>
            <Link to="/blog" className="menu-link">
              Blog
            </Link>
            <Link to="/contact" className="menu-link">
              Contact
            </Link>
            <Link to="/about" className="menu-link">
              About
            </Link>
          </div>
        </div>

        {window.innerWidth <= 500 ? null : <CustomForm />}
        <div className="connect">
          <h2 className="heading">Connect</h2>
          <br />
          <div className="socials">
            <a href="https://www.instagram.com/">
              <img className="icon" src={instagram} alt="Instagram Logo" />
            </a>
            <a href="https://twitter.com/">
              <img className="icon" src={twitter} alt="Twitter Logo" />
            </a>
            <a href="https://web.facebook.com/">
              <img className="icon" src={facebook} alt="Facebook Logo" />
            </a>
          </div>
        </div>
      </div>
      {/* <img
        className="footer-pattern"
        src={footerPattern}
        alt="Footer Pattern"
      /> */}
    </footer>
  );
};

export default Footer;
