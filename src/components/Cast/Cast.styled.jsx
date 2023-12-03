import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
`;

export const PhotoWrap = styled.div`
  width: 120px;
  height: 160px;
  display: flex;
  align-content: center;
`;

export const Photo = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Info = styled.p`
  text-align: center;
`;

export const Name = styled.p`
  text-align: center;
  font-weight: bold;
`;
