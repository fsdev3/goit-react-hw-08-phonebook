import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </nav>
      </header>
      <Suspense
      // fallback={<Loader />}
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Navigation;
