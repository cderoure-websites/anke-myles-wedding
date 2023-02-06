import React from 'react';

import ENGAGEMENT_RING from '../../images/engagement-ring.jpeg';
import FAMILY_CHRISTMAS from '../../images/family-christmas.jpeg';
import FAMILY_HAPPY from '../../images/family-happy.jpg';
import SYDNEY from '../../images/first-met.jpg';
import VACATION_HEART from '../../images/vacation-heart.jpeg';
import VACATION_POOL from '../../images/vacation-pool.jpeg';

import './index.scss';

const Images = () => {
  return (
    <div className="images">
      <img alt="sydney" src={SYDNEY} />
      <img alt="engagement" src={ENGAGEMENT_RING} />
      <img alt="happy" src={FAMILY_HAPPY} />
      <img alt="family" src={FAMILY_CHRISTMAS} />
      <img alt="heart" src={VACATION_HEART} />
      <img alt="pool" src={VACATION_POOL} />
    </div>
  )
};

export default Images;
