import { HeaderNavLink } from './AuthMene.styled';

const AuthMenu = () => {
  return (
    <>
      <HeaderNavLink to="/register">SIGN UP</HeaderNavLink>
      <HeaderNavLink to="/login">LOG IN</HeaderNavLink>
    </>
  );
};

export default AuthMenu;
