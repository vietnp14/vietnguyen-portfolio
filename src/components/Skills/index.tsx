import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import './styles.scss';

const technicalSkills = [
  {
    title: 'Javascript',
    icon: <StaticImage src="../../images/javascript.svg" alt="javascript" loading="eager" />,
  },
  {
    title: 'HTML',
    icon: <StaticImage src="../../images/javascript.svg" alt="javascript" loading="eager" />,
  },
  {
    title: 'CSS',
    icon: <StaticImage src="../../images/javascript.svg" alt="javascript" loading="eager" />,
  },
  {
    title: 'Angular2+',
    icon: <StaticImage src="../../images/javascript.svg" alt="javascript" loading="eager" />,
  },
  {
    title: 'Reactjs',
    icon: <StaticImage src="../../images/javascript.svg" alt="javascript" loading="eager" />,
  },
  {
    title: 'Nodejs',
    icon: <StaticImage src="../../images/javascript.svg" alt="javascript" loading="eager" />,
  },
];

const Skills = () => {
  return (
    <>
      <div className="section section-skills" id="skills">
        <div className="skills__content container d-grid">
          <h2 className="section__title">Skills</h2>
          <span className="section__subtitle">Technical Skills</span>

          <div className="skills__content-data d-grid gap-2">
            {
              technicalSkills.map((skill, index) => (
                <div role="button" key={index} className="skills__content-data-item">
                  <div className="item__icon">{skill.icon}</div>
                  <div className="item__title">{skill.title}</div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
