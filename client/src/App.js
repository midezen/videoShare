import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useEffect, useState } from "react";
import Video from "./pages/Video";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 5;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  padding: 22px 22px;
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkmode")) || false
  );

  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(darkMode));
  }, [darkMode]);

  const Layout = () => {
    return (
      <>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Container>
            <Menu />
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
        {
          path: "video/:id",
          element: <Video />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
