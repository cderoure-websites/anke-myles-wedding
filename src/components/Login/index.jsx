import React, { useState } from 'react';

import './index.scss';

const Login = ({ onLoginSuccess }) => {
  const [emailAddress, setEmailAddress] = useState('')

  const handleLogin = () => {
    // TODO: check email address is valid
    onLoginSuccess();
  };

  const updateEmailAddress = (e) => {
    setEmailAddress(e.target.value);
  };

  return (
    <div className="login">
      <div className="login-introduction">
        <div className="login-introduction-couple">
          <div className="login-introduction-name">Myles Verlander</div>
          <div className="login-introduction-and">&</div>
          <div className="login-introduction-name">Anke Lockhorst</div>
        </div>
      </div>

      <div className="login-content">
        request the pleasure of your company at their wedding.
      </div>

      <div className="login-email">
        <input
          placeholder="email address"
          id="email"
          value={emailAddress} 
          onChange={updateEmailAddress}
        />
      </div>
      <button onClick={handleLogin}>Enter</button>
    </div>
  );
};

export default Login;
