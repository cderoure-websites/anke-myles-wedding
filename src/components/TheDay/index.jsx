import React from 'react';

import './index.scss';

const TheDay = () => {
  return (
    <div className="the-day">
      <div className="the-day-date">
        19th August 2023
      </div>
      <div>
        <div className="the-day-title">
          <h1>The Ceremony</h1>
        </div>
        <div>
          <div className="the-day-key-info">13:30 - 14:15</div>
          <div className="the-day-key-info">The Mansion, 70 Church St, Leatherhead KT22 8DP</div>
          <p>Please arrive no later than 13:00 to be seated ahead of the Bride and Groom's arrival, with the ceremony and celebrations starting at 13:30.</p>
          <p>Parking is available on site, however is limited so would recommend arriving by horse/carriage.</p>
          <p>Please arrange carriages departing from 14:20 to the Reception for further celebrations.</p>
        </div>
      </div>
      <div>
        <div className="the-day-title">
          <h1>The Reception</h1>
        </div>
        <div>
          <div className="the-day-key-info">15:00 - 00:00</div>
          <div className="the-day-key-info">Tyrrells Wood GC, Leatherhead KT22 8QP</div>
          <p>The newlyweds will meet you on the terrace at 15:00, so please arrive from 14:30 onwards and grab a nice cold drink in readiness for our arrival.</p>
          <p>Please be mindful of golfers who will still be trying to make that final putt, and those making use of the Clubhouse for a cold pint!</p>
          <p>We request that no cars are left at the Clubhouse overnight. Please arrange carriages.</p>
        </div>
      </div>
      <div>
        <div className="the-day-title">
          <h1>The Evening</h1>
        </div>
        <div>
          <div className="the-day-key-info">19:00 - 00:30</div>
          <div className="the-day-key-info">Tyrrells Wood GC, Leatherhead KT22 8QP</div>
          <p>Let's celebrate the newlyweds with some drinks and dancing!</p>
        </div>
      </div>
    </div>
  )
};

export default TheDay;
