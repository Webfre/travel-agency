import React from 'react';

import Header from '../../Components/Header/Header';
import image from '../../Image/ekaterina-dmitrienko-krym-priroda-peizazh-vesna-sevastopol-g.jpg';
import ContactForm from '../../Components/ContactInfo/ContactForm';

function Contact() {
  return (
    <>
      <Header
        name='header-mid'
        path={image}
        title='Contact'
      />
      <ContactForm />
    </>
  );
}

export default Contact;