import React from 'react';
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_mlgnajp',
        'template_1amqjrf',
        form.current,
        'N1ymStmtu-9LrVTQN'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2> Contact Me</h2>
      {/* <p>I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.</p> */}
      <div className='container contact_contianer'>
        <div className='contact_options'>
          <article className='contact_option'>
            <HiOutlineMail className='contact_option_icon' />
            <h4>Email</h4>
            <h5>milenalebel2@gmail.com</h5>
            <a href='mailto:milenalebel2@gmail.com'>Send a message</a>
          </article>

          <article className='contact_option'>
            <AiFillLinkedin className='contact_option_icon' />
            <h4>Linkdin</h4>
            <h5>milen alebel</h5>
            <a href='https://www.linkedin.com/in/milen-alebel/'>
              Send a message
            </a>
          </article>

          <article className='contact_option'>
            <FiTwitter className='contact_option_icon' />
            <h4>Twitter</h4>
            <h5>milenalebel2</h5>
            <a href='https://twitter.com/milenalebel2'>Send a message</a>
          </article>
        </div>
        {/* End of Contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input type='text' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            id=''
            rows='7'
            placeholder='Your Message'
            required
          ></textarea>
          <button type='Submit' value='Send' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default contact;
