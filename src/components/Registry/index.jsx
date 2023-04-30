import React from 'react';

import Button from '../Button';

import PREZOLA from '../../images/prezola.png';

import './index.scss';

const PREZOLA_LINK = 'https://prezola.com/wishlists/10272146/';

const Registry = () => {
  const openRegistry = () => {
    window.open(PREZOLA_LINK);
  };

  return (
    <div className="registry">
      <div className="registry-section">
        <div className="registry-section-row">
          <a href={PREZOLA_LINK} className="registry-link">
            <img src={PREZOLA} alt="prezola" className="registry-link-img" />
          </a>
        </div>
        <div className="registry-section-row">
          The most important gift to us is to have you share our special day, but if you wish to contribute in some other way, we would love a few pennies to put in our pot, for our honeymoon trip to Mauritius after tying the knot.
        </div>
        <div className="registry-section-row">
          <Button onClick={openRegistry} text="View Registry" />
        </div>
      </div>
    </div>
  )
};

export default Registry;
