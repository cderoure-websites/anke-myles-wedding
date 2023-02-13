import React from 'react';

import './index.scss';

const Button = ({ text, onClick, loading }) => {
  return loading ? (
    <div class="button-loading"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  ) : (
    <button className="button" onClick={onClick}>{text}</button>
  );
};

export default Button;
