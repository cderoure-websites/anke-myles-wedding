import React from 'react';

import './index.scss';

const TheDay = () => {
  return (
    <div className="the-day">
      <div>
        <h1>Reception</h1>
        <div>
          <div className="the-day-key-info">13:30 - 14:15</div>
          <div className="the-day-key-info">The Mansion, 70 Church St, Leatherhead KT22 8DP</div>
          <p>Please arrive ahead of 13:30 to be seated, with the ceremony and celebrations starting at 13:30.</p>
          <p>Parking is available on site, however is limited so would recommend arriving by horse/carriage.</p>
        </div>
      </div>
      <div>
        <h1>Ceremony</h1>
        <div>
          <div className="the-day-key-info">15:00 - 00:00</div>
          <div className="the-day-key-info">Tyrrells Wood, Leatherhead KT22 8QP</div>
          <p>Please be mindful of golfers who will still be trying to make that final putt, and those making use of the Clubhouse for a cold pint!</p>
          <p>We request that no cars are left at the Clubhouse overnight. Please arrange carriages.</p>
        </div>
      </div>
      <div>
        <h1>Dress Code</h1>
        <div>
          <div className="the-day-key-info">Formal attire is requested.</div>
        </div>
      </div>
    </div>
  )
};

export default TheDay;
