import { Link, NavLink } from 'react-router-dom';
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
  align-items: bottom;
  font-size: 24px;
  font-weight: bold;
`;

export const NavLinkStyled = styled(NavLink)`
  &.active {
    text-decoration: underline;
  }
`;

export const BackLink = styled(Link)`
  display: inline-block;
  text-decoration: underline;
  font-size: 20px;
  margin-bottom: 16px;
`;
