import Navigation from 'components/Navigation/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';

const Layout = () => {
  return (
    <div>
      <Header>
        <Navigation />
      </Header>

      <Suspense fallback={<Loader />}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </div>
  );
};

export default Layout;
