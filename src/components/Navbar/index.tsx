/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState, useRef, useEffect } from 'react';
import { UilUser, UilEstate, UilMultiply, UilApps } from '@iconscout/react-unicons';
import './styles.scss';

const NavItems = [
  {
    title: 'Home',
    href: '#',
    icon: <UilEstate />,
  },
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
    title: 'Skills',
    href: '#skills',
    icon: <UilUser />,
  },
  {
    title: 'Journey',
    href: '#journey',
    icon: <UilUser />,
  },
  {
    title: 'Contactme',
    href: '#contactme',
    icon: <UilUser />,
  },
];

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [_unMounted, _setUnMounted] = useState(false);
  const navMenu = useRef(null);

  const sections = document.body.querySelectorAll('section[id]');

  useEffect(() => {
    console.log('Sections : ', sections);
    // window.addEventListener('scroll', )
  }, []);

  const handleCollapseToggle = () => {
    if (collapsed) {
      (navMenu.current as any).classList.remove('bottom-0');
    } else {
      (navMenu.current as any).classList.add('bottom-0');
    }
    setCollapsed(!collapsed);
  };

  return (
    <>
      <header className="header" id="header">
        <nav className="nav d-flex justify-content-between align-items-center">
          <a href="#" className="nav__logo">Viet Nguyen</a>
          <div ref={navMenu} className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              {
                NavItems.map((item, index) => (
                  <li key={index} className="nav__list-item">
                    <a href={item.href} className="nav__link" role="button">
                      <div className="nav__link-icon">{item.icon}</div>
                      {item.title}
                    </a>
                  </li>
                ))
              }
              <a onClick={() => handleCollapseToggle()} className="nav__link nav__close" role="button">
                <UilMultiply width={18} height={18} />
              </a>
            </ul>
          </div>
          <a onClick={() => handleCollapseToggle()} className="nav__toggle" role="button">
            <UilApps />
          </a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
