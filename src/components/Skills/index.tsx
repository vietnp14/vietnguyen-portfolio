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
    icon: <img src="https://img.icons8.com/color/96/000000/html-5--v1.png" alt="html" />,
  },
  {
    title: 'CSS',
    icon: <img src="https://img.icons8.com/color/96/000000/css3.png" alt="css" />,
  },
  {
    title: 'Angular2+',
    icon: <img src="https://img.icons8.com/color/96/000000/angularjs.png" alt="angular" />,
  },
  {
    title: 'Reactjs',
    icon: <img src="https://img.icons8.com/nolan/96/react-native.png" alt="reactjs" />,
  },
  {
    title: 'Nodejs',
    icon: <img src="https://img.icons8.com/color/96/000000/nodejs.png" alt="nodejs" />,
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
