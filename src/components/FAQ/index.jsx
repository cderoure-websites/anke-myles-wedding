import React from 'react';

import QR_CODE from '../../images/photos-qr-code.png';

import './index.scss';

const PHOTO_ALBUM = 'https://photos.app.goo.gl/3FaZgpJwpX1yjzeh9';
const EMAIL_ADDRESS = 'verlanderma@gmail.com';
const PHONE_NUMBER = '+44 7597 305593';

const FAQ = () => {
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
