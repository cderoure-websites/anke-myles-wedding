import React from 'react';

import Button from '../Button';

import QR_CODE from '../../images/photos-qr-code.png';

import './index.scss';

const FAQ = () => {
  const openRegistry = () => {
    window.open('https://prezola.com/wishlists/10272146/');
  };

  return (
    <div className="faq">
      <div className="faq-section">
      <div className="faq-section-question">
          I have a question. Who do I reach out to?
        </div>
        <div className="faq-section-answer">
          <div>
            <b>Email:</b> <a href="mailto:verlanderma@gmail.com">verlanderma@gmail.com</a>
          </div>
          <div>
            <b>Phone:</b> +44 7597 305593
          </div>
        </div>
      </div>
      <div className="faq-section">
        <div className="faq-section-question">
          What is the dress code?
        </div>
        <div className="faq-section-answer">
          Formal attire is requested.
        </div>
      </div>
      <div className="faq-section">
        <div className="faq-section-question">
          Do you have a gift registry?
        </div>
        <div className="faq-section-answer">
          The most important gift to us is to have you share our special day, but if you wish to contribute in some other way, we would love a few pennies to put in our pot, for our honeymoon trip after tying the knot.
        </div>
        <Button onClick={openRegistry} text="OPEN REGISTRY" />
      </div>
      <div className="faq-section">
        <div className="faq-section-question">
          Is there somewhere we can upload photos from the day?
        </div>
        <div className="faq-section-answer">
          Absolutely! Please upload any photos from the day to our album:

          <a href="https://photos.app.goo.gl/3FaZgpJwpX1yjzeh9" className="qr-code">
            <img alt="photo album" className="qr-code-img" src={QR_CODE} />
          </a>
        </div>
      </div>
    </div>
  )
};

export default FAQ;
