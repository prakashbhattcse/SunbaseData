import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(loginId, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Login ID:
        <input
          type="text"
          value={loginId}
          onChange={(event) => setLoginId(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <input type="submit" value="Login" />
    </form>
  );
};

export default LoginPage;