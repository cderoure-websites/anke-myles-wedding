import React from 'react';

import './index.scss';

const calculateDaysToGo = () => {
  const today = new Date();
  const weddingDay = new Date("19-Aug-2023");

  const daysToGo = weddingDay - today;
  return Math.floor((daysToGo)/(24*3600*1000));;
};

const Welcome = ({ onClickRSVP }) => {
  return (
    <div className="welcome">
      <div className="welcome-lhs">
        <p className="welcome-content">
          Yes! We are getting married!
          We are so excited! We are in cloud nine and we want to share our love with you. We are planning a wedding that will make history, in which you will have lots of fun.
          As we wait for the big day to arrive, we have created this website with lots of sections to keep you up-to-date of everything and to share our love story.
          Just one important thing, in the attendance section you can confirm whether or not you will be at our wedding with us. Please, confirm as soon as possible, so we can arrange everything much faster.
          Enjoy the site and see you soon, lots of love!
        </p>

        <div className="welcome-signature">
          Myles & Anke
        </div>
      </div>

      <div className="welcome-rhs">
        <div className="welcome-countdown">
          {calculateDaysToGo()} days to go!
        </div>

        <div className="welcome-date">
          19th August 2023
        </div>
        
        <button className="welcome-rsvp" onClick={onClickRSVP}>
          RSVP
        </button>
        
        <div className="welcome-rsvp-warning">
          Please RSVP by 19/03/2023
        </div>
      </div>
      
    </div>
  );
};

export default Welcome;
