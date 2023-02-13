import React, { useState }  from 'react';

import Button from '../Button';
import RadioGroup from '../RadioGroup';
import './index.scss';

const answers = {
  1: '1A',
  2: '2B',
  3: '3B',
  4: '4B',
  5: '5C',
  6: '6B',
  7: '7A',
  8: '8C',
  9: '9B',
  10: '10A',
};

const Quiz = () => {
  const [results, setResults] = useState('');
  const submitQuiz = (e) => {
    e.preventDefault()

    const elements = e.target.elements;
    let correct = 0;
    Object.values(answers).forEach(item => {
      const { checked, name, id } = elements[item];
      if (checked && answers[name] === id) {
        correct = correct + 1;
      };
    });

    setResults(`You got ${correct}/10 answers correct!`);
    return false;
  };

  return (
    <div className="quiz">
      <div className="quiz-title">
        How well do you know us?
      </div>
      <div className="quix-description">
        Do you really think that you actually know everything about us?
      </div>
      <form onSubmit={submitQuiz} className="quiz-form">
        <RadioGroup 
          title="Which coastal town on the East Coast of Australia did we meet?"
          name="1"
          items={[
            {label: 'Noosa Heads', id: '1A'}, // correct answer
            {label: 'Bondi Beach', id: '1B'},
            {label: 'Cairns', id: '1C'},
            {label: 'Surfer\'s paradise, Gold Coast', id: '1D'},
          ]}
        />
        <RadioGroup 
          title="How did they get talking?"
          name="2"
          items={[
            {label: 'Joint winners of a surfing competition', id: '2A'},
            {label: 'Myles caught Anke in a nightclub', id: '2B'}, // correct answer
            {label: 'At the Ice-cream stand', id: '2C'},
            {label: 'Dance-off competition', id: '2D'},
          ]}
        />
        <RadioGroup 
          title="Where did Myles propose?"
          name="3"
          items={[
            {label: 'On a beach on holiday', id: '3A'},
            {label: 'In the New Forest at a Deer Sanctuary', id: '3B'}, // correct answer
            {label: 'In a restaurant in London', id: '3C'},
            {label: 'Underwater scuba-diving', id: '3D'},
          ]}
        />
        <RadioGroup 
          title="How many countries have we travelled together?"
          name="4"
          items={[
            {label: '12', id: '4A'},
            {label: '14', id: '4B'}, // correct answer
            {label: '16', id: '4C'},
            {label: '18', id: '4D'},
          ]}
        />
        <RadioGroup 
          title="What is their favourite type of holiday?"
          name="5"
          items={[
            {label: 'Camping in the wild', id: '5A'},
            {label: 'Combination of exploration and all-inclusive', id: '5B'},
            {label: 'Beach resort holiday', id: '5C'}, // correct answer
            {label: 'Skiing', id: '5D'},
          ]}
        />
        <RadioGroup 
          title="Who plays more golf?"
          name="6"
          items={[
            {label: 'Anke', id: '6A'},
            {label: 'Myles', id: '6B'}, // correct answer
            {label: 'Arianna', id: '6C'},
            {label: 'Golf is for losers', id: '6D'},
          ]}
        />
        <RadioGroup 
          title="Who said 'I love you' first?"
          name="7"
          items={[
            {label: 'Anke', id: '7A'}, // correct answer
            {label: 'Myles', id: '7B'},
          ]}
        />
        <RadioGroup 
          title="How did the bride ask the groom out?"
          name="8"
          items={[
            {label: 'Over WhatsApp', id: '8A'},
            {label: 'Sent a letter with a return stamp', id: '8B'},
            {label: 'Game of quiddler. She spelt out \'Will you be mine?\'', id: '8C'}, // correct answer
            {label: 'Through a riddle', id: '8D'},
          ]}
        />
        <RadioGroup 
          title="How many years have they been together?"
          name="9"
          items={[
            {label: '5 and a half years', id: '9A'},
            {label: '6 and a half years', id: '9B'}, // correct answer
            {label: '7 and a half years', id: '9C'},
            {label: '8 and a half years', id: '9D'},
          ]}
        />
        <RadioGroup 
          title="Which are their dream holiday destinations?"
          name="10"
          items={[
            {label: 'Bali and Japan', id: '10A'}, // correct answer
            {label: 'Anywhere new. Need to tick those countries off!', id: '10B'},
            {label: 'A cruise to the Northern lights', id: '10C'},
            {label: 'Anywhere with a good golf course', id: '10D'},
          ]}
        />
        <div className="quiz-form-button">
          <Button type="submit" text="Submit" />
        </div>
      </form>
      
      {results ? results : null}
    </div>
  )
};

export default Quiz;
