import React from 'react';

import Button from '../Button';

import './index.scss';

const Quiz = () => {
  const submitQuiz = () => {
    // TODO
  };

  return (
    <div className="quiz">
      <div className="quiz-title">
        How well do you know us?
      </div>
      <div className="quix-description">
        Do you really think that you actually know everything about us?
      </div>
      <div className="quiz-form">
        <div className="quiz-form-field">
          <label className="quiz-form-field-label">
            Which coastal town on the East Coast of Australia did we meet?
          </label>
          <div className="quiz-form-field-options">
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="A" name="1" value="A"/>
              <label for="A">Noosa Heads</label>
              {/* correct answer */}
            </div>
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="B" name="1" value="B"/>
              <label for="B">Bondi Beach</label>
            </div>
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="C" name="1" value="C"/>
              <label for="C">Cairns</label>
            </div>
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="D" name="1" value="D"/>
              <label for="D">Surfer's paradise, Gold Coast</label>
            </div>
          </div>
        </div>
        <div className="quiz-form-field">
          <label className="quiz-form-field-label">
            How did they get talking?
          </label>
          <div className="quiz-form-field-options">
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="A" name="2" value="A"/>
              <label for="A">Joint winners of a surfing competition</label>
            </div>
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="B" name="2" value="B"/>
              <label for="B">Myles caught Anke in a nightclub</label>
              {/* correct answer */}
            </div>
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="C" name="2" value="C"/>
              <label for="C">At the Ice-cream stand</label>
            </div>
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="D" name="2" value="D"/>
              <label for="D">Dance-off competition</label>
            </div>
          </div>
        </div>
        <div className="quiz-form-field">
          <label className="quiz-form-field-label">
            Where did Myles propose?
          </label>
          <div className="quiz-form-field-options">
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="A" name="3" value="A"/>
              <label for="A">On a beach on holiday</label>
            </div>
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="B" name="3" value="B"/>
              <label for="B">In the New Forest at a Deer Sanctuary</label>
              {/* correct answer */}
            </div>
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="C" name="3" value="C"/>
              <label for="C">In a restaurant in London</label>
            </div>
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="D" name="3" value="D"/>
              <label for="D">Underwater scuba-diving</label>
            </div>
          </div>
        </div>
        <div className="quiz-form-field">
          <label className="quiz-form-field-label">
            How many countries have we travelled together?
          </label>
          
          <div className="quiz-form-field-options">
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="A" name="4" value="A"/>
              <label for="A">12</label>
            </div>
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="B" name="4" value="B"/>
              <label for="B">14</label>
              {/* correct answer */}
            </div>
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="C" name="4" value="C"/>
              <label for="C">16</label>
            </div>
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="D" name="4" value="D"/>
              <label for="D">18</label>
            </div>
          </div>
        </div>
        <div className="quiz-form-field">
          <label className="quiz-form-field-label">
            What is their favourite type of holiday?
          </label>
          
          <div className="quiz-form-field-options">
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="A" name="5" value="A"/>
              <label for="A">Camping in the wild</label>
            </div>
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="B" name="5" value="B"/>
              <label for="B">Combination of exploration and all-inclusive</label>
            </div>
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="C" name="5" value="C"/>
              <label for="C">Beach resort holiday</label>
              {/* correct answer */}
            </div>
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="D" name="5" value="D"/>
              <label for="D">Skiing</label>
            </div>
          </div>
        </div>
        <div className="quiz-form-field">
          <label className="quiz-form-field-label">
            Who plays more golf?
          </label>
          
          <div className="quiz-form-field-options">
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="A" name="6" value="A"/>
              <label for="A">Anke</label>
            </div>
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="B" name="6" value="B"/>
              <label for="B">Myles</label>
              {/* correct answer */}
            </div>
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="C" name="6" value="C"/>
              <label for="C">Arianna</label>
            </div>
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="D" name="6" value="D"/>
              <label for="D">Golf is for losers</label>
            </div>
          </div>
        </div>
        <div className="quiz-form-field">
          <label className="quiz-form-field-label">
            Who said 'I love you' first?
          </label>
          
          <div className="quiz-form-field-options">
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="A" name="7" value="A"/>
              <label for="A">Anke</label>
              {/* correct answer */}
            </div>
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="B" name="7" value="B"/>
              <label for="B">Myles</label>
            </div>
          </div>
        </div>
        <div className="quiz-form-field">
          <label className="quiz-form-field-label">
            How did the bride ask the groom out?
          </label>
          
          <div className="quiz-form-field-options">
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="A" name="8" value="A"/>
              <label for="A">Over WhatsApp</label>
            </div>
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="B" name="8" value="B"/>
              <label for="B">Sent a letter with a return stamp</label>
            </div>
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="C" name="8" value="C"/>
              <label for="C">Game of quiddler. I spelt out 'Will you be mine?'</label>
              {/* correct answer */}
            </div>
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="D" name="8" value="D"/>
              <label for="D">Through a riddle</label>
            </div>
          </div>
        </div>
        <div className="quiz-form-field">
          <label className="quiz-form-field-label">
            How many years have they been together?
          </label>
          <div className="quiz-form-field-options">
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="A" name="9" value="A"/>
              <label for="A">5 and a half years</label>
            </div>
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="B" name="9" value="B"/>
              <label for="B">6 and a half years</label>
              {/* correct answer */}
            </div>
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="C" name="9" value="C"/>
              <label for="C">7 and a half years</label>
            </div>
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="D" name="9" value="D"/>
              <label for="D">8 and a half years</label>
            </div>
          </div>
        </div>
        <div className="quiz-form-field">
          <label className="quiz-form-field-label">
            Which are their dream holiday destinations?
          </label>
          <div className="quiz-form-field-options">
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="A" name="10" value="A"/>
              <label for="A">Bali and Japan</label>
              {/* correct answer */}
            </div>
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="B" name="10" value="B"/>
              <label for="B">Anywhere new. Need to tick those countries off!</label>
            </div>
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="C" name="10" value="C"/>
              <label for="C">A cruise to the Northern lights</label>
            </div>
            <div className="quiz-form-field-options-radio">
              <input type="radio" id="D" name="10" value="D"/>
              <label for="D">Anywhere with a good golf course</label>
            </div>
          </div>
        </div>
      </div>
      <Button onClick={submitQuiz} text="Submit" />
    </div>
  )
};

export default Quiz;
