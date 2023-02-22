import React from 'react';

import Button from '../Button';

import QR_CODE from '../../images/photos-qr-code.png';
import PREZOLA from '../../images/prezola.png';

import './index.scss';

const PREZOLA_LINK = 'https://prezola.com/wishlists/10272146/';
const PHOTO_ALBUM = 'https://photos.app.goo.gl/3FaZgpJwpX1yjzeh9';
const EMAIL_ADDRESS = 'verlanderma@gmail.com';
const PHONE_NUMBER = '+44 7597 305593';

const FAQ = () => {
  const openRegistry = () => {
    window.open(PREZOLA_LINK);
  };

  return (
    <div className="faq">
      <div className="faq-section">
      <div className="faq-section-question">
          I have a question. Who do I reach out to?
        </div>
        <div className="faq-section-answer">
          <div>
            <b>Email:</b> <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
          </div>
          <div>
            <b>Phone:</b> <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
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
        <div className="faq-section-answer">
          <a href={PREZOLA_LINK} className="registry-link">
            <img src={PREZOLA} alt="prezola" className="registry-link-img" />
          </a>
        </div>
        <div className="faq-section-answer">
          <Button onClick={openRegistry} text="View Registry" />
        </div>
      </div>
      <div className="faq-section">
        <div className="faq-section-question">
          Is there somewhere we can upload photos from the day?
        </div>
        <div className="faq-section-answer">
          Absolutely! Please upload any photos from the day to our album:

          <a href={PHOTO_ALBUM} className="qr-code">
            <img alt="google album" className="qr-code-img" src={QR_CODE} />
          </a>
        </div>
      </div>
    </div>
  )
};

export default FAQ;
