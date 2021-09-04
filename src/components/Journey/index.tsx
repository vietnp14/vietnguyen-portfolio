import React from 'react';
import { UilGraduationCap, UilBriefcaseAlt, UilCalendarAlt } from '@iconscout/react-unicons';
import './styles.scss';

const educations = [
  {
    title: 'Software Engineer',
    subtitle: 'FPT University',
    calendar: '2017 - 2021',
  },
];

const works = [
  {
    title: 'Intern Developer',
    subtitle: 'BotStar',
    calendar: '11/2019 - 05/2020',
  },
  {
    title: 'Intern Automation Tester',
    subtitle: 'FPT Software',
    calendar: '5/2020 - 09/2020',
  },
  {
    title: 'Fullstack Developer',
    subtitle: 'BotStar',
    calendar: '9/2020 - 07/2021',
  },
];

const Journey = () => {
  return (
    <>
      <div className="section section__journey" id="journey">
        <div className="journey__content container d-grid">
          <h1 className="section__title">Journey</h1>
          <span className="section__subtitle">My Personal Journey</span>

          <div className="journey__content-data">
            <div className="journey__content-data-tabs d-grid">
              <div className="journey__tabs-button d-flex justify-content-end" style={{ marginRight: '1rem' }}>
                <UilGraduationCap />&nbsp;
                Education
              </div>

              <div style={{ width: '13px' }} />

              <div className="journey__tabs-button d-flex justify-content-start ml-1" style={{ marginLeft: '1rem' }}>
                <UilBriefcaseAlt />&nbsp;
                Work
              </div>
            </div>

            <div className="journey__content-data-content">
              <div className="journey__items">
                {
                  educations
                    .concat(works)
                    .map(({ title, subtitle, calendar }, index) => {
                      if (index !== 0) {
                        return (
                          <div key={index} className="journey__item">
                            <div />

                            <div>
                              <span className="journey__item-rounder" />
                              {
                                index !== educations.concat(works).length - 1
                                  ? <span className="journey__item-line" />
                                  : <></>
                              }
                            </div>

                            <div>
                              <h3 className="journey__item-title">{title}</h3>
                              <span className="journey__item-subtitle">{subtitle}</span>
                              <div className="journey__item-calendar">
                                <UilCalendarAlt />&nbsp;
                                {calendar}
                              </div>
                            </div>
                          </div>
                        );
                      }

                      return (
                        <div className="journey__item" style={{ textAlign: 'right' }}>
                          <div>
                            <h3 className="journey__item-title">{title}</h3>
                            <span className="journey__item-subtitle">{subtitle}</span>
                            <div className="journey__item-calendar">
                              <UilCalendarAlt />&nbsp;
                              {calendar}
                            </div>
                          </div>

                          <div>
                            <span className="journey__item-rounder" />
                            <span className="journey__item-line" />
                          </div>
                        </div>
                      );
                    })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Journey;
