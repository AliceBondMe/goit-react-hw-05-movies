import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AdditionalNav = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  margin-bottom: 24px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
`;

export const NavLinkStyled = styled(NavLink)`
  &.active {
    text-decoration: underline;
  }
`;
