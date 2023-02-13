import React from 'react';

import './index.scss';

const RadioGroup = ({ title, name, items }) => {
  return (
    <div className="radio-group">
      {title && (
        <div className="radio-group-label">
          { title }
        </div>
      )}
      <div className="radio-group-inputs">
        {items.map(({ label, id }) => (
          <div className="radio-item">
            <input id={id} type="radio" name={name} value={id} />
            <label htmlFor={id}>{label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;

