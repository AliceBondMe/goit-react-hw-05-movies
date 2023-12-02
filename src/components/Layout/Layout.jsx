import Navigation from 'components/Navigation/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <Header>
        <Navigation />
      </Header>

      <Suspense fallback={<div>Loading...</div>}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </div>
  );
};

export default Layout;
