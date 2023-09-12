import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // form.reset();
    setEmail('');
    setPassword('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input
          type="email"
          name="email"
          required
          value={email}
          // id="outlined-required" // required?
          placeholder="Enter your email"
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          required
          value={password}
          // id="outlined-required"
          placeholder="Enter your password"
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
