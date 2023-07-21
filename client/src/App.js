import styled from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Outlet from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

const Container = styled.div``;

const Main = styled.div``;

const App = () => {
  const Layout = () => {
    return (
      <>
        <Menu />
        <Main>
          <Navbar />
          <Outlet />
        </Main>
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

  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  );
};

export default App;
