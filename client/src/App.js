import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 6;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div``;

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const Layout = () => {
    return (
      <>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <Navbar />
          <Container>
            <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
            <Main>
              <Wrapper>
                <Outlet />
              </Wrapper>
            </Main>
          </Container>
        </ThemeProvider>
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
