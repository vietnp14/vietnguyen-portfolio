/* eslint-disable import/extensions */
import * as React from 'react';
import AboutMe from '../components/AboutMe';
import Journey from '../components/Journey';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import Stories from '../components/Stories';
import '../sass/index.scss';

// Index Page
const IndexPage = () => {
  return (
    <>
      <title>Phuong Viet Portfolio</title>
      <Navbar />
      <main className="main">
        <Stories />
        <AboutMe />
        <Skills />
        <Journey />
        <div id="contactme">
          <Stories />
        </div>
        {/* <section className="section section-dark section__profile" id="profile">
          <div>
            Section
          </div>
        </section>
        <section className="section section__profile" id="profile">
          <div>
            Section
          </div>
        </section>
        <section className="section section-dark section__profile" id="profile">
          <div>
            Section
          </div>
        </section> */}
      </main>
    </>
  );
};

export default IndexPage;
