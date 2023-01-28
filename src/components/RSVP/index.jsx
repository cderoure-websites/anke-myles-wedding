import React, { useState } from 'react';

import Button from '../Button';

import './index.scss';

const RSVP = () => {

  const [attending, setAttending] = useState(false);

  const handleUpdateAttending = ({ target }) => {
    setAttending(target.value === 'YES')
  };

  const submitForm = () => {
    // TODO: submit the fom
  };

  return (
    <div className="rsvp">
      <h1>Please confirm your presence on our wedding day.</h1>
      <div className="rsvp-form">
        <div className="rsvp-attendance">
          <div className="rsvp-form-info">Complete the below for each person in attendance as per the names on your invitation.</div>
          <div className="rsvp-form-info">Please note that we request only the children of our siblings on this day.</div>
      
          <div className="rsvp-form-field rsvp-form-field-text-box">
            <label>Name:</label>
            <input type="text"/>
          </div>
          <div className="rsvp-form-field rsvp-form-field-text-box">
            <label>Surname:</label>
            <input type="text"/>
          </div>
          <div className="rsvp-form-field">
            <input onChange={handleUpdateAttending} type="radio" id="attendance-yes" name="attendance" value="YES"/>
            <label for="attendance-yes">Yes, I would love to attend.</label>
          </div>
          <div className="rsvp-form-field">
            <input onChange={handleUpdateAttending} type="radio" id="attendance-no" name="attendance" value="NO"/>
            <label for="attendance-no">No, unfortunately I cannot attend.</label>
          </div>
          {attending && (
            <>
              <h1>Arrival</h1>
              <div className="rsvp-form-info">
                <b>Please check your invitation as to which time you are requested to arrive:</b>
              </div>
              <div className="rsvp-form-field">
                <input type="checkbox" id="invitation-ceremony" name="invitation" value="ceremony"/>
                <label for="invitation-ceremony">Ceremony</label>
              </div>
              <div className="rsvp-form-field">
                <input type="checkbox" id="invitation-reception" name="invitation" value="reception"/>
                <label for="invitation-reception">Reception</label>
              </div>
              <div className="rsvp-form-field">
                <input type="checkbox" id="invitation-evening" name="invitation" value="evening"/>
                <label for="invitation-evening">Evening</label>
              </div>
              <h1>Music</h1>
              <div className="rsvp-form-field rsvp-form-field-text-box">
                <label for="music">Please let us know if you have any songs you would like us to play as we celebrate this special day:</label>
                <input type="text" id="music" name="music" value=""/>
              </div>
              <h1>Transport</h1>
              <div className="rsvp-form-info">
               <b>Please advise if you would like transportation from the Ceremony to the reception?</b>
              </div>
              <div className="rsvp-form-field">
                <input type="radio" id="yes" name="transport" value="YES"/>
                <label for="yes">Yes</label>
              </div>
              <div className="rsvp-form-field">
                <input type="radio" id="no" name="transport" value="NO"/>
                <label for="no">No</label>
              </div>
              <div className="rsvp-form-field">
                <input type="radio" id="n/a" name="transport" value="NA"/>
                <label for="no">N/A - I am attending the Reception only.</label>
              </div>
              <h1>Meals</h1>
              <div className="rsvp-form-field">
                <div className="rsvp-form-field rsvp-form-field-text-box">
                  <label for="meals">Please let us know if you have any dietary restrictions:</label>
                  <input type="text" id="meals" name="meals" value=""/>
                </div>
              </div>
            </>
          )}
        </div>
        <Button onClick={submitForm} text="RSVP" />
      </div>
    </div>
  )
};

export default RSVP;
