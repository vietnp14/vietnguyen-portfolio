import React from 'react';
import { UilOutgoingCall, UilEnvelopes, UilLocationPoint } from '@iconscout/react-unicons';
import './styles.scss';

const contactInfo = [
  {
    title: 'Call Me',
    subtitle: '(+84) 775 530 555',
    icon: <UilOutgoingCall />,
  },
  {
    title: 'Email',
    subtitle: 'vietnp14@gmail.com',
    icon: <UilEnvelopes />,
  },
  {
    title: 'Location',
    subtitle: 'Da Nang, Viet Nam ',
    icon: <UilLocationPoint />,
  },
  {
    title: '',
    subtitle: '',
    icon: '',
  },
];

const Contact = () => {
  return (
    <>
      <section className="section section__contact" id="contactme">
        <div className="contact__content container">
          <h2 className="section__title">Contact Me</h2>
          <span className="section__subtitle">Get In Touch</span>

          <div className="contact__content-data container d-grid">
            <div>
              {
                contactInfo.map(({ title, subtitle, icon }, i) => (
                  <div key={i} className="contact__information">
                    <div>
                      {icon}
                    </div>
                    <div>
                      <h3 className="contact__information-title">{title}</h3>
                      <span className="contact__information-subtitle">{subtitle}</span>
                    </div>
                  </div>
                ))
              }
            </div>

            <form action="" className="contact__form d-grid">
              asdasd
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
