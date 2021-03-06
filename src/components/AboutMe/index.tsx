import React from 'react';
import { UilFileDownload } from '@iconscout/react-unicons';
import './styles.scss';

const aboutDescription = 'I enjoy development because of the satisfaction I get by overcoming challenges. Above all, I’m motivated by the fact that great software products can provide positive impacts on people\'s lives and can actually help solve real-life problems.';

const AboutMe = () => {
  return (
    <>
      <section className="section section-about" id="about">
        <div className="about__content container">
          <h2 className="section__title">About Me</h2>
          <span className="section__subtitle">My Introduction</span>

          <div className="about__content-data d-grid">
            <div className="d-flex justify-content-center align-items-center">
              <img
                className="about__content-data-img"
                src="https://res.cloudinary.com/dljtsvoib/image/upload/v1630599178/246b772b64e500def8bf2ea7d90be5de_jqzj6y.jpg"
                alt="Viet"
              />
            </div>

            <div className="about__content-data-description">
              <p className="about__description">
                {aboutDescription}
              </p>

              <div className="about__info">
                <div className="about__info-item">
                  <h3 className="about__info-title">2.5+</h3>
                  <span className="about__info-name">Fullstack Developer</span>
                </div>

                <div className="about__info-item">
                  <h3 className="about__info-title">4+</h3>
                  <span className="about__info-name">Projects</span>
                </div>

                <div className="about__info-item">
                  <h3 className="about__info-title">1</h3>
                  <span className="about__info-name">Project Leader</span>
                </div>
              </div>
            </div>

            <div className="about__content-button">
              <a download href="../../assets/CV-NguyenPhuongViet.pdf" className="btn btn-primary btn-download-cv">
                Download My CV&nbsp;
                <UilFileDownload />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
