import React from 'react';

import HEART from '../../images/ma-heart.png';
import Button from '../Button';

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
      <img className="welcome-image" src={HEART} alt="heart" />
      
      <div className="welcome-date">
        19th August 2023
      </div>

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

      <div className="welcome-countdown">
        {calculateDaysToGo()} days to go!
      </div>

      <Button onClick={onClickRSVP} text="RSVP"/>
      
      <div className="welcome-rsvp-warning">
        Please RSVP by 31/03/2023
      </div>
      
    </div>
  );
};

export default Welcome;
