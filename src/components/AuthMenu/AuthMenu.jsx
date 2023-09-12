import { NavLink } from 'react-router-dom';

const AuthMenu = () => {
  return (
    <>
      <NavLink to="/register">SIGN UP</NavLink>
      <NavLink to="/login">LOG IN</NavLink>
    </>
  );
};

export default AuthMenu;
