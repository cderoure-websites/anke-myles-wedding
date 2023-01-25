import React from 'react';

import './index.scss';

const FAQ = () => {
  return (
    <div className="faq">
      <div className="faq-title">
        FAQ
      </div>
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
          Do you have a gift registry?
        </div>
        <div className="faq-section-answer">
          The most important gift to us is to have you share our special day, but if you wish to contribute in some other way, we would love a few pennies to put in our pot, for our honeymoon trip after tying the knot.
        </div>
      </div>
    </div>
  )
};

export default FAQ;
