import React, { useState, useRef, useEffect } from 'react';
import { UilOutgoingCall, UilEnvelopes, UilLocationPoint, UilSpinnerAlt } from '@iconscout/react-unicons';
import { FloatingLabel, Form, Toast, ToastContainer } from 'react-bootstrap';
import './styles.scss';
import axios from 'axios';

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
    subtitle: 'Da Nang, Viet Nam.',
    icon: <UilLocationPoint />,
  },
];

const Contact = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFail, setShowFail] = useState(false);
  console.log('Show success : ', showSuccess);
  const toggleShowSuccess = () => setShowSuccess(!showSuccess);
  const toggleShowFail = () => setShowFail(!showFail);

  const handleContactForm = async (event: any) => {
    try {
      event.preventDefault();
      const info = await axios.post(
        'https://portforlio-backend.herokuapp.com/send-email',
        {
          from: email || '',
          subject: `${subject || ''} --- ${name || ''}`,
          text: message || '',
        },
      );

      setTimeout(() => {
        setLoading(false);
      }, 2500);
      console.log('Send message success : ', info.data);
      toggleShowSuccess();
      event.target.reset();
    } catch (err) {
      console.debug('Send Contact Error : ', err);
      toggleShowFail();
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    }
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
                  disabled={loading}
                  required
                  onChange={(event: any) => setName(event.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel label="Email">
                <Form.Control
                  className="contact__form-item"
                  type="email"
                  name="email"
                  required
                  disabled={loading}
                  onChange={(event: any) => setEmail(event.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel label="Subject">
                <Form.Control
                  className="contact__form-item"
                  name="subject"
                  disabled={loading}
                  required
                  onChange={(event: any) => setSubject(event.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel label="Message">
                <Form.Control
                  className="contact__form-item"
                  as="textarea"
                  type="message"
                  role="textbox"
                  required
                  disabled={loading}
                  ref={textareaRef}
                  onChange={(event: any) => setMessage(event.target.value)}
                />
              </FloatingLabel>

              <button disabled={loading} className="btn btn-primary btn-contact-submit mt-1">
                Send Message
              </button>
            </Form>
          </div>
        </div>

        {/* Show Toast Message */}
        <ToastContainer position="top-end" className="p-3">
          <Toast show={showSuccess} onClose={toggleShowSuccess} delay={2000}>
            <Toast.Header>
              <strong className="me-auto">Send message successfully!</strong>
            </Toast.Header>
            <Toast.Body>Hello {name}. Thank you for sending message. I will email you asap!</Toast.Body>
          </Toast>

          <Toast show={showFail} onClose={toggleShowFail} delay={2000}>
            <Toast.Header>
              <strong className="me-auto">Send message failed!</strong>
            </Toast.Header>
            <Toast.Body>Sorry {name}. Please try again after!</Toast.Body>
          </Toast>
        </ToastContainer>
      </section>
    </>
  );
};

export default Contact;
