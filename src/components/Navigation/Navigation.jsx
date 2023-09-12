import AuthMenu from 'components/AuthMenu/AuthMenu';
import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Header } from './Navigation.styled';

const Navigation = () => {
  return (
    <>
      <Header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
          <AuthMenu />
        </nav>
      </Header>
      <Suspense
      // fallback={<Loader />}
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default Navigation;
