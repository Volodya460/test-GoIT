import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import StyledLink, { Container, Header } from "./Layout.styled";

const Layout = () => {
  return (
    <Container>
      <Header>
        <div>
          <StyledLink to="/tweets">PageUser </StyledLink>
        </div>
      </Header>

      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </Container>
  );
};
export default Layout;
