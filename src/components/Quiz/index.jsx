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
      Do you really think that you actually know everything about us? We have created a test, the one who gets most of them right will receive a prize on our wedding day. Do you want it?
      </div>
      <div className="quiz-form">
        <div className="quiz-form-field">
          <label className="quiz-form-field-label">
            Which coastal town on the East Coast of Australia did we meet?
          </label>
          <input id="" value=""/>
        </div>
        <div className="quiz-form-field">
          <label className="quiz-form-field-label">
            How did they get talking?
          </label>
          <input id="" value=""/>
        </div>
        <div className="quiz-form-field">
          <label className="quiz-form-field-label">
            Where did Myles propose?
          </label>
          <input id="" value=""/>
        </div>
        <div className="quiz-form-field">
          <label className="quiz-form-field-label">
            How many countries have we travelled together?
          </label>
          <input id="" value=""/>
        </div>
        <div className="quiz-form-field">
          <label className="quiz-form-field-label">
            What is their favourite type of holiday?
          </label>
          <input id="" value=""/>
        </div>
        <div className="quiz-form-field">
          <label className="quiz-form-field-label">
            Who plays more golf?
          </label>
          <input id="" value=""/>
        </div>
        <div className="quiz-form-field">
          <label className="quiz-form-field-label">
            Who said 'I love you' first?
          </label>
          <input id="" value=""/>
        </div>
        <div className="quiz-form-field">
          <label className="quiz-form-field-label">
            How did the bride ask the groom out?
          </label>
          <input id="" value=""/>
        </div>
        <div className="quiz-form-field">
          <label className="quiz-form-field-label">
            Who wanted to marry someone from an Island?
          </label>
          <input id="" value=""/>
        </div>
        <div className="quiz-form-field">
          <label className="quiz-form-field-label">
            Which are their dream holiday destinations?
          </label>
          <input id="" value=""/>
        </div>
      </div>
      <Button onClick={submitQuiz} text="Submit" />
    </div>
  )
};

export default Quiz;
