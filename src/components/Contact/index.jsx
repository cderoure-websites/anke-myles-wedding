import React from 'react';

import './index.scss';

const Contact = () => {
  const submitForm = () => {
    // TODO
  };
  
  return (
    <div className="contact">
      <div className="contact-title">
        Contact Us
      </div>
      <div className="contact-body">
        <b>Anke contact:</b> TBC
      </div>
      <div className="contact-body">
        <b>Myles contact:</b> TBC
      </div>
      <div className="contact-form">
        Something needs to be clarified? 
        If you have any question or if you want to leave a comment, do it here and we will receive it via e-mail. Thanks for your message!
        <div className="contact-form-field">
          <textarea rows="10" cols="40" id="form" />
        </div>
        <button onClick={submitForm} className="contact-submit">Submit</button>
      </div>

    </div>
  )
};

export default Contact;
