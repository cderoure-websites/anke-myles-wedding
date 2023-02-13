import React from 'react';

import './index.scss';

const Button = ({ text, onClick, loading, type }) => {
  return loading ? (
    <div className="button-loading">
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      </div>
  ) : (
    <button
      type={type || "button"}
      className="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
