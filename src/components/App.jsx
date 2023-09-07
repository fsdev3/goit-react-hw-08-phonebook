import React from 'react';
import { Container } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Home from 'pages/Home/Home';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';
import Contacts from 'pages/Contacts/Contacts';
import NotFound from 'pages/NotFound/NotFound';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Container>
  );
};
