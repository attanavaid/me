import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        ATTA NAVAID
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#experience-education">Experience & Education</a>
        </li>

        <li>
          <a href="#projects">Portfolio</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div
        className="footer__socials"
        role="list"
        aria-label="Social media links"
      >
        <a
          href="https://facebook.com/attanavaid"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Atta Navaid's Facebook profile"
        >
          <BsFacebook aria-hidden="true" />
        </a>
        <a
          href="https://instagram.com/attanavaid"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Atta Navaid's Instagram profile"
        >
          <BsInstagram aria-hidden="true" />
        </a>
        <a
          href="https://twitter.com/attanavaid"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Atta Navaid's Twitter profile"
        >
          <BsTwitter aria-hidden="true" />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Atta Navaid. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
