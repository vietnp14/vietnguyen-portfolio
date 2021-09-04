/* eslint-disable import/extensions */
import * as React from 'react';
import { useEffect } from 'react';
import { UilArrowUp } from '@iconscout/react-unicons';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Journey from '../components/Journey';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Stories from '../components/Stories';
import '../sass/index.scss';

/** Index Page */
const IndexPage = () => {
  const handleScrollActive = () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    if (scrollY > 80) {
      document.getElementById('header')?.classList.add('header__scroll');
      document.getElementById('btn-scroll-down')?.classList.add('d-none');
    } else {
      document.getElementById('header')?.classList.remove('header__scroll');
      document.getElementById('btn-scroll-down')?.classList.remove('d-none');
    }

    sections.forEach((section: any) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 50;

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.getElementById(`nav__#${section.id}`)?.classList.add('active');
      } else {
        document.getElementById(`nav__#${section.id}`)?.classList.remove('active');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollActive);

    return () => {
      window.removeEventListener('scroll', handleScrollActive);
    };
  });

  return (
    <>
      <title>Phuong Viet Portfolio</title>
      <Navbar />
      <main className="main">
        {/* Stories Section */}
        <Stories />

        {/* AboutMe Section */}
        <AboutMe />

        {/* Journey Section */}
        <Journey />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />

        <a href="#" className="btn btn-primary btn-scroll-up">
          <UilArrowUp />
        </a>
      </main>
    </>
  );
};

export default IndexPage;
