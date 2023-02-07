import React from 'react';
import './contactform.scss';

function ContactForm() {
  return (
    <section className='contact-form'>
      <h2>Send a message to us!</h2>
      <form action=''>
        <input type='text' placeholder='Name' />
        <input type='email' placeholder='Email' />
        <input type='phone' placeholder='Phone' />
        <input type='phone' placeholder='Subject' />
        <textarea rows='4' placeholder='Message'></textarea>
        <button>Send Message</button>
      </form>
    </section>
  );
}

export default ContactForm;