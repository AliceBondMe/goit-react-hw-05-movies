import { LinkStyled, Nav } from './Navigation.styled';

const Navigation = () => {
  return (
    <Nav>
      <LinkStyled to="/">Home</LinkStyled>
      <LinkStyled to="movies">Movies</LinkStyled>
    </Nav>
  );
};

export default Navigation;
