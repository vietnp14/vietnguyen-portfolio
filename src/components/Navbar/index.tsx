/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState, useRef, useEffect } from 'react';
import { UilUser, UilMultiply, UilApps, UilMoon, UilBrightness } from '@iconscout/react-unicons';
import './styles.scss';

const NavItems = [
  {
    title: 'Stories',
    href: '#stories',
    icon: <UilUser />,
  },
  {
    title: 'About Me',
    href: '#about',
    icon: <UilUser />,
  },
  {
    title: 'Journey',
    href: '#journey',
    icon: <UilUser />,
  },
  {
    title: 'Skills',
    href: '#skills',
    icon: <UilUser />,
  },
  {
    title: 'Project',
    href: '#projects',
    icon: <UilUser />,
  },
  {
    title: 'Contact Me',
    href: '#contactme',
    icon: <UilUser />,
  },
];

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [isDarkThem, setIsDarkTheme] = useState(true);
  const navMenu = useRef<HTMLDivElement>(null);

  const handleCollapseToggle = () => {
    if (collapsed) {
      navMenu.current?.classList.remove('bottom-0');
    } else {
      navMenu.current?.classList.add('bottom-0');
    }

    setCollapsed(!collapsed);
  };

  useEffect(() => {
    if (!isDarkThem) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [isDarkThem]);

  return (
    <>
      <header className="header" id="header">
        <nav className="nav d-flex justify-content-between align-items-center">
          <a onClick={(e) => { e.stopPropagation(); }} href="#" className="nav__logo">Viet Nguyen</a>
          <div ref={navMenu} className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              {
                NavItems.map(({ href, icon, title }, index) => (
                  <li key={index} className="nav__list-item">
                    <a
                      href={href}
                      className="nav__link"
                      id={`nav__${href}`}
                      onClick={() => handleCollapseToggle()}
                    >
                      <div className="nav__link-icon">{icon}</div>
                      {title}
                    </a>
                  </li>
                ))
              }
              <a
                onClick={(e) => {
                  e.stopPropagation();
                  handleCollapseToggle();
                }}
                className="nav__link nav__close"
                role="button"
              >
                <UilMultiply width={18} height={18} />
              </a>
            </ul>
          </div>

          <div>
            <a
              onClick={(e) => {
                e.stopPropagation();
                setIsDarkTheme(!isDarkThem);
              }}
              className="nav__theme"
              role="button"
            >
              { isDarkThem ? <UilMoon /> : <UilBrightness />}
            </a>

            <a
              onClick={(e) => {
                e.stopPropagation();
                handleCollapseToggle();
              }}
              className="nav__toggle"
            >
              <UilApps />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
