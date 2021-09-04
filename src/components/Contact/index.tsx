import React, { useState, useRef, useEffect } from 'react';
import { UilOutgoingCall, UilEnvelopes, UilLocationPoint } from '@iconscout/react-unicons';
import { FloatingLabel, Form } from 'react-bootstrap';
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
];

const Contact = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleContactForm = (event: any) => {
    event.preventDefault();
    console.log(`Name: ${name} -- email: ${email} -- message: ${message}`);
    event.target.reset();
  };

  useEffect(() => {
    textareaRef.current?.addEventListener('keyup', (e: any) => {
      const scHeight = e.target.scrollHeight;
      if (textareaRef.current) {
        textareaRef.current.style.height = `${scHeight}px`;
      }
    });

    return () => {
      textareaRef.current?.removeEventListener('keyup', (e) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _e = e;
      });
    };
  }, []);

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

            <Form
              onSubmit={handleContactForm}
              className="contact__form d-grid"
            >
              <FloatingLabel label="Name">
                <Form.Control
                  className="contact__form-item"
                  name="name"
                  onChange={(event: any) => setName(event.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel label="Email">
                <Form.Control
                  className="contact__form-item"
                  type="email"
                  name="email"
                  onChange={(event: any) => setEmail(event.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel label="Message">
                <Form.Control
                  className="contact__form-item"
                  as="textarea"
                  type="message"
                  role="textbox"
                  ref={textareaRef}
                  onChange={(event: any) => setMessage(event.target.value)}
                />
              </FloatingLabel>

              <button className="btn btn-primary btn-contact-submit mt-1">
                Send Message
              </button>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
