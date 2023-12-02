import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  color: #113835;
`;

export const CardLink = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  width: 224px;
  transition: transform 300ms ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`;

export const Image = styled.img`
  border-radius: 8px;
  margin: 0 auto;
`;

export const Title = styled.h3`
  text-align: center;
`;

export const Rating = styled.div`
  position: absolute;
  top: 16px;
  right: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  background-color: ${({ $color }) => $color};
  color: #ffffff;
  box-shadow: rgba(193, 193, 193, 0.766) 0px 2px 4px 0px,
    rgba(225, 225, 225, 0.682) 0px 2px 16px 0px;
`;
