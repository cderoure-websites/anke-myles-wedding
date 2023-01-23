import React from 'react';

import ENGAGEMENT_RING from '../../images/engagement-ring.jpeg';
import FAMILY_CHRISTMAS from '../../images/family-christmas.jpeg';
import FAMILY_HAPPY from '../../images/family-happy.jpeg';
import SYDNEY from '../../images/sydney-bridge.jpeg';
import VACATION_HEART from '../../images/vacation-heart.jpeg';
import VACATION_POOL from '../../images/vacation-pool.jpeg';

import './index.scss';

const Images = () => {
  return (
    <div className="images">
      <img src={ENGAGEMENT_RING} />
      <img src={FAMILY_CHRISTMAS} />
      <img src={FAMILY_HAPPY} />
      <img src={SYDNEY} />
      <img src={VACATION_HEART} />
      <img src={VACATION_POOL} />
    </div>
  )
};

export default Images;
