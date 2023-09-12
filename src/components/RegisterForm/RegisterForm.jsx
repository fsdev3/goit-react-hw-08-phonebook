import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // form.reset();
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          type="name"
          name="name"
          value={name}
          required
          // id="outlined-required"
          placeholder="Enter your name"
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={email}
          required
          // id="outlined-required"
          placeholder="Enter your email"
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          required
          // id="outlined-required"
          placeholder="Enter your password"
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default RegisterForm;
