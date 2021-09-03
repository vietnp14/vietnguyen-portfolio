/* eslint-disable max-len */
import React from 'react';
import {
  UilLinkedinAlt,
  UilFacebookMessengerAlt,
  UilGithubAlt,
  UilMessage,
  UilMouseAlt,
  UilArrowDown,
} from '@iconscout/react-unicons';
import './styles.scss';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: <UilLinkedinAlt />,
    href: 'https://www.linkedin.com/in/viet-nguyen-a681321bb/',
  },
  {
    name: 'Facebook',
    icon: <UilFacebookMessengerAlt />,
    href: 'https://www.facebook.com/nguyenphuongviet14/',
  },
  {
    name: 'Github',
    icon: <UilGithubAlt />,
    href: 'https://github.com/vietnp14',
  },
];

const Stories = () => {
  return (
    <>
      <section className="section section-stories" id="stories">
        <div className="stories__content container">
          <div className="stories__content-social d-grid gap-0">
            {
              socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="social-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.icon}
                </a>
              ))
            }
          </div>

          <div className="stories__content-img">
            <svg className="stories__content-blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0" mask-type="alpha">
                <path d="M68.1,-19.5C77.1,5.5,65.5,39.9,42.9,55.5C20.3,71,-13.4,67.9,-36,51.1C-58.6,34.3,-70.2,3.8,-62.4,-19.6C-54.6,-43,-27.3,-59.3,1.1,-59.7C29.6,-60.1,59.1,-44.4,68.1,-19.5Z" transform="translate(100 100)" />
              </mask>
              <g mask="url(#mask0)">
                <path d="M68.1,-19.5C77.1,5.5,65.5,39.9,42.9,55.5C20.3,71,-13.4,67.9,-36,51.1C-58.6,34.3,-70.2,3.8,-62.4,-19.6C-54.6,-43,-27.3,-59.3,1.1,-59.7C29.6,-60.1,59.1,-44.4,68.1,-19.5Z" transform="translate(100 100)" />
                <image width={170} height={170} x="16" y="22" href="https://res.cloudinary.com/dljtsvoib/image/upload/v1630599178/246b772b64e500def8bf2ea7d90be5de_jqzj6y.jpg" />
              </g>
            </svg>
          </div>

          <div className="stories__content-text">
            <h1 className="stories__content-text-title">Hi, I'm Viet Nguyen.</h1>
            <h3 className="stories__content-text-subtitle">Fullstack developer</h3>
            <p className="stories__content-text-description">
              I’m a young and self-motivated individual looking to advance my future career as a software engineer.
            </p>
            <a className="btn btn-primary btn-contact-me" href="#contactme">
              Contact Me&nbsp;
              <UilMessage />
            </a>
          </div>

          <div className="stories__scroll">
            <a href="#" className="btn btn-scroll-down">
              <UilMouseAlt />&nbsp;
              <span>Scroll down&nbsp;</span>
              <UilArrowDown />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stories;
