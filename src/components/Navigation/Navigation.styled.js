import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.div`
  header {
    margin: 0 auto;
    width: 100%;
    max-width: 960px;
    height: 48px;
    background-color: #e1f1f8;
    box-shadow: 2px 2px 2px 1px rgba(10, 10, 10, 0.2);

    nav {
      padding: 14px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;

      div {
        display: flex;
        align-items: center;
        gap: 20px;
      }
    }
  }
`;
export const HeaderNavLink = styled(NavLink)`
  font-size: 22px;
  text-decoration: none;
`;
