import React from 'react';

import Images from '../../components/Images';
import HEART from '../../images/heart-icon.png'

import './index.scss';

const Story = () => {
  return (
    <div className="story">
      <h1>The story of us...</h1>
      <ul>
        <li>
          <div><img className="story-heart" src={HEART} alt="heart"/></div>
          <div className="story-title">We first met</div>
          <div className="story-date">17th December 2016</div>
        </li>
        <li>
          <div><img className="story-heart" src={HEART} alt="heart"/></div>
          <div className="story-title">We got engaged</div>
          <div className="story-date">31st December 2021</div>
        </li>
        <li>
          <div><img className="story-heart" src={HEART} alt="heart"/></div>
          <div className="story-title">We had Arianna</div>
          <div className="story-date">11th October 2022</div>
        </li>
      </ul>
      <Images />
    </div>
  )
};

export default Story;
