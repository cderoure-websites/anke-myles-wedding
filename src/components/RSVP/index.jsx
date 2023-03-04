import React, { useState } from 'react';

import Button from '../Button';
import RadioGroup from '../RadioGroup';

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
  const [starterChoice, setStarterChoice] = useState('');
  const [mainChoice, setMainChoice] = useState('');
  const [dessertChoice, setDessertChoice] = useState('');

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

  const handleUpdateStarters = ({ target }) => {
    const { value } = target;
    setStarterChoice(value);
  };

  const handleUpdateMains = ({ target }) => {
    const { value } = target;
    setMainChoice(value);
  };

  const handleUpdateDesserts = ({ target }) => {
    const { value } = target;
    setDessertChoice(value);
  };

  const handleUpdateSection = ({ target }) => {
    const { value } = target;
    setArrival(value);

    if (['Reception', 'Ceremony'].includes(value)) {
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
      'Starter Choice': starterChoice,
      'Main Choice': mainChoice,
      'Dessert Choice': dessertChoice,
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
              <input type="email" onChange={handleEmailChange} value={email} />
            </div>
            <RadioGroup
              name="attendance"
              onChange={handleUpdateAttending}
              items={[
                {label: "Yes, I would love to attend.", id: "YES"},
                {label: "No, unfortunately I cannot attend.", id: "NO"},
              ]}
            />
            {attending && (
              <>
                <h1>Arrival</h1>
                <RadioGroup
                  name="Invitation"
                  onChange={handleUpdateSection}
                  title="Please check your invitation as to which time you are requested to arrive:"
                  items={[
                    {label: "Ceremony", id: "Ceremony"},
                    {label: "Reception", id: "Reception"},
                    {label: "Evening", id: "Evening"},
                  ]}
                />

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
                    <div>
                      We have the following meal options:
                    </div>
                    <RadioGroup
                      name="starters"
                      title="Starters"
                      onChange={handleUpdateStarters}
                      items={[
                        {label: "White Devonshire crab and prawn crostini topped with crushed avocado and pomegranate", id: "crab"},
                        {label: "Smoked chicken liver parfait with a baby beetroot and rocket salad accompanied by an apple chutney.", id: "parfait"},
                      ]}
                    />
                    <RadioGroup
                      name="mains"
                      title="Mains"
                      onChange={handleUpdateMains}
                      items={[
                        {label: "8oz Beef fillet with roasted celiac puree and a pink peppercorn sauce", id: "beef"},
                        {label: "Corn Fed Chicken Supreme with creamed cabbage, gravy and honey glazed pig in blanket", id: "chicken"},
                      ]}
                    />
                    <RadioGroup
                      name="desserts"
                      title="Desserts"
                      onChange={handleUpdateDesserts}
                      items={[
                        {label: "Sticky toffee pudding topped with toffee sauce and Cornish vanilla ice cream", id: "toffee"},
                        {label: "Lemon and lime citrus cheesecake with blue berries and whipped Chantilly cream", id: "cheesecake"},
                      ]}
                    />
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
          <div className="rsvp-button">
            <Button loading={loading} onClick={submitForm} text="RSVP" />
          </div>
        </div>
      )}
    </div>
  )
};

export default RSVP;
