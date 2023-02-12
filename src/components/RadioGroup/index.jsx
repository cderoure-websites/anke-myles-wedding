import React from 'react';

import './index.scss';

const RadioGroup = ({ label, children, onChange, value }) => {
  const handleOnChange = ({ target }) => {
    onChange(target.value)
  };

  const radioItems = children.map((child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { 
        onChange: handleOnChange,
        checked: value === child.props.label,
      });
    }

    return null;
  });

  return (
    <div className="radio-group">
      {label && (
        <div className="radio-group-label">
          { label }
        </div>
      )}
      <div className="radio-group-inputs">
        {radioItems}
      </div>
    </div>
  );
};

const RadioItem = ({ onChange, label }) => {
  return (
    <div onChange={onChange} className="radio-item">
      <input type="radio" name={label} value={label}/>
      <label for={label}>{label}</label>
    </div>
  );
};

export default RadioGroup;
export { RadioItem };
