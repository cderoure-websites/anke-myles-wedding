import React from 'react';

import './index.scss';

const RadioGroup = ({ title, name, items, onChange }) => {
  const handleOnChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

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
            <input onChange={handleOnChange} id={id} type="radio" name={name} value={id} />
            <label htmlFor={id}>{label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;

