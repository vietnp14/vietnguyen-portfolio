import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Carousel } from 'react-bootstrap';
import './styles.scss';

const projects = [
  {
    title: 'BotStar Stripe V2',
    subtitle: '',
    img: <StaticImage
      className="carousel__image"
      src="../../images/botstar-stripe-payment.png"
      alt="Stripe V2"
      loading="eager"
    />,
  },
  {
    title: 'BotStar CMS Import',
    subtitle: '',
    img: <StaticImage
      className="carousel__image"
      src="../../images/botstar-csv-import.png"
      alt="Stripe V2"
      loading="eager"
    />,
  },
  {
    title: 'BotStar Public API',
    subtitle: '',
    img: <StaticImage
      className="carousel__image"
      src="../../images/botstar-public-api.png"
      alt="Public API"
      loading="eager"
    />,
  },
  {
    title: 'PsyCare',
    subtitle: '',
    img: <StaticImage
      className="carousel__image"
      src="../../images/psy-care.png"
      alt="PsyCare"
      loading="eager"
    />,
  },
];

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={1700}
      nextIcon={<></>}
    >
      {
        projects.map(({ title, subtitle, img }, i) => (
          <Carousel.Item key={i}>
            {img}

            <div className="carousel__content">
              <h3 className="carousel__content-title">{title}</h3>
              <span className="carousel__content-subtitle">{subtitle || 'Nulla vitae elit libero, a pharetra augue mollis interdum.'}</span>
            </div>
          </Carousel.Item>
        ))
      }
    </Carousel>
  );
};

const Projects = () => {
  return (
    <>
      <section className="section section__projects" id="projects">
        <div className="projects__content container grid">
          <h2 className="section__title">Projects</h2>
          <span className="section__subtitle">My Projects Experience</span>

          <ControlledCarousel />
        </div>
      </section>
    </>
  );
};

export default Projects;
