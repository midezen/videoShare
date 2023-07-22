import styled from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 6;
`;

const Wrapper = styled.div``;

const App = () => {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Container>
          <Menu />
          <Main>
            <Wrapper>
              <Outlet />
            </Wrapper>
          </Main>
        </Container>
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
