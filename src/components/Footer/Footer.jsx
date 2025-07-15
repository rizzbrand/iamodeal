import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-row">
        <div className="footer-contact">
          <h3>
            Let’s Collaborate <br />
            admin<span>@</span>ovmbr.com
          </h3>

          <p className="secondary">
          Yooo, sign up now and get first access to exclusive drops, BTS content,
          tour updates and more!
          </p>

          <Link to="/contact" className="btn">
         Sign up
          </Link>
        </div>

        <div className="footer-nav">
          <Link to="/" className="footer-nav-item">
            <span>Home</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/work" className="footer-nav-item">
            <span>Work</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/about" className="footer-nav-item">
            <span>About</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/contact" className="footer-nav-item">
            <span>Contact</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/faq" className="footer-nav-item">
            <span>FAQ</span>
            <span>&#8594;</span>
          </Link>
        </div>
      </div>
      <div className="footer-row">
        <div className="footer-header">
          <h1>I am</h1>
          <h1>Odeal</h1>
        </div>

        <div className="footer-copyright-line">
          <p className="primary sm">&copy; Iam Odeal 2025</p>
          <p className="primary sm">Website Template by Rizzbrand.site</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
