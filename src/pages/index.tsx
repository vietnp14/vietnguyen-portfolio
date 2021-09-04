/* eslint-disable import/extensions */
import * as React from 'react';
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
  return (
    <>
      <title>Phuong Viet Portfolio</title>
      <Navbar />
      <main className="main">
        <Stories />
        <AboutMe />
        <Journey />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default IndexPage;
