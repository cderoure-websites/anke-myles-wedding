import React, { useState } from 'react';

import Button from '../Button';

import './index.scss';

const FORM_URL = 'https://script.google.com/macros/s/AKfycbzrGQdPLJERt3soksaYrM0-mH_ON-Po5SlcJ8Ty8bj67Zbmo6lJm1i5sxWZ-m_5h8D_/exec';
const RSVP = () => {
  // states
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // sections
  const [attending, setAttending] = useState(false);
  const [showMeals, setShowMeals] = useState(false);

  // form values
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [arrival, setArrival] = useState('');
  const [dietaryRequirements, setDietaryRequirements] = useState('');
  const [musicSuggestions, setMusicSuggestions] = useState('');

  const handleFirstNameChange = ({ target }) => {
    const { value } = target;
    setFirstName(value)
  };

  const handleLastNameChange = ({ target }) => {
    const { value } = target;
    setLastName(value)
  };

  const handleOnMealChange = ({ target }) => {
    const { value } = target;
    setDietaryRequirements(value)
  };

  const handleOnMusicChange =({ target }) => {
    const { value } = target;
    setMusicSuggestions(value)
  };

  const handleEmailChange =({ target }) => {
    const { value } = target;
    setEmail(value)
  };

  const handleUpdateAttending = ({ target }) => {
    setAttending(target.value === 'YES')
  };

  const handleUpdateSection = ({ target }) => {
    const { value } = target;
    setArrival(value);

    if (['reception', 'ceremony'].includes(value)) {
      setShowMeals(true);
    } else {
      setShowMeals(false);
    }
  }

  const submitForm = () => {
    // reset states:
    setSuccess(false);
    setError(false);
    setLoading(true);
    
    // prep the data:
    const data = {
      'Arrival': arrival,
      'Attending': attending ? 'Yes': 'No',
      'Dietary Requirements': dietaryRequirements,
      'Email': email,
      'First Name': firstName,
      'Last Name': lastName,
      'Music Suggestions': musicSuggestions,
    };

    // submit the form:
    fetch(FORM_URL, {
      method: 'POST',
      body: JSON.stringify(data),
    }).then(async (/*response*/) => {
      setSuccess(true);
      setLoading(false);
    }).catch((/*error*/) => {
      setError(true);
      setLoading(false);
    });
  };

  const handleResetForm = () => {
    setSuccess(false);
    setError(false);
  };

  return (
    <div className="rsvp">
      <h1>Please confirm your presence on our wedding day.</h1>
      {success ? (
        <div className="rsvp-success">
          <div className="rsvp-success-description">
            Thank you for your RSVP {firstName}!
          </div>
          <div className="rsvp-success-button">
            <Button onClick={handleResetForm} text="Submit another RSVP" />
          </div>
        </div>
      ) : (
        <div className="rsvp-form">
          <div className="rsvp-attendance">
            <div className="rsvp-form-info">Complete the below for each person in attendance as per the names on your invitation.</div>
            <div className="rsvp-form-info">Please note that we request only the children of our siblings on this day.</div>
        
            <div className="rsvp-form-field rsvp-form-field-text-box">
              <label>Name:</label>
              <input onChange={handleFirstNameChange} value={firstName} type="text"/>
            </div>
            <div className="rsvp-form-field rsvp-form-field-text-box">
              <label>Surname:</label>
              <input onChange={handleLastNameChange} value={lastName}  type="text"/>
            </div>
            <div className="rsvp-form-field rsvp-form-field-text-box">
              <label>Email:</label>
              <input onChange={handleEmailChange} value={email}  type="text"/>
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
                  <input onChange={handleUpdateSection} type="radio" id="invitation-arrival" name="invitation" value="ceremony"/>
                  <label for="ceremony">Ceremony</label>
                </div>
                <div className="rsvp-form-field">
                  <input onChange={handleUpdateSection} type="radio" id="invitation-arrival" name="invitation" value="reception"/>
                  <label for="reception">Reception</label>
                </div>
                <div className="rsvp-form-field">
                  <input onChange={handleUpdateSection} type="radio" id="invitation-arrival" name="invitation" value="evening"/>
                  <label for="evening">Evening</label>
                </div>
                <h1>Music</h1>
                <div className="rsvp-form-field rsvp-form-field-text-box">
                  <label for="music">Please let us know if you have any songs you would like us to play as we celebrate this special day:</label>
                  <input onChange={handleOnMusicChange} type="text" id="music" name="music" value={musicSuggestions} />
                </div>
                {showMeals && (
                  <>
                    <h1>Meals</h1>
                    <div className="rsvp-form-field">
                      <div className="rsvp-form-field rsvp-form-field-text-box">
                        <label for="meals">Please let us know if you have any dietary restrictions:</label>
                        <input onChange={handleOnMealChange} type="text" id="meals" name="meals" value={dietaryRequirements} />
                      </div>
                    </div>
                  </>
                )}

              </>
            )}
          </div>
          {error && (
            <div className="rsvp-error">
              Something has gone wrong. Please try again.
            </div>
          )}
          <Button loading={loading} onClick={submitForm} text="RSVP" />
        </div>
      )}
    </div>
  )
};

export default RSVP;
