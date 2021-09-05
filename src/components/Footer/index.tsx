import React from 'react';
import {
  UilLinkedinAlt,
  UilFacebookMessengerAlt,
  UilGithubAlt,
} from '@iconscout/react-unicons';
import './styles.scss';

const socialLinks = [
  {
    icon: <UilLinkedinAlt />,
    href: 'https://www.linkedin.com/in/viet-nguyen-a681321bb/',
  },
  {
    icon: <UilFacebookMessengerAlt />,
    href: 'https://www.facebook.com/nguyenphuongviet14/',
  },
  {
    icon: <UilGithubAlt />,
    href: 'https://github.com/vietnp14',
  },
];

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__bg">
          <div className="footer__content container d-grid">
            <div>
              <h1 className="footer__title">Viet Nguyen</h1>
              <span className="footer__subtitle">Fullstack Developer</span>
            </div>

            <ul className="footer__links">
              <li>
                <a href="#about" className="footer__link">About Me</a>
              </li>

              <li>
                <a href="#projects" className="footer__link">Projects</a>
              </li>

              <li>
                <a href="#contactme" className="footer__link">Contact</a>
              </li>
            </ul>

            <div className="footer__socials">
              {
                socialLinks.map(({ icon, href }, i) => (
                  <a key={i} className="footer__socials-item" href={href} target="_blank" rel="noreferrer">
                    {icon}
                  </a>
                ))
              }
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
