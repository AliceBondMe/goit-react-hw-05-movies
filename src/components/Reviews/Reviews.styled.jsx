import styled from 'styled-components';

export const Item = styled.li`
  text-align: justify;
  margin-bottom: 16px;
`;

export const Author = styled.p`
  font-weight: bold;
`;

export const Url = styled.a`
  font-weight: bold;
  text-decoration: underline;
  &:hover {
    color: #0b615a;
  }
`;
