import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useContext, useEffect, useState } from "react";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";
import { devices } from "./utils/devices";
import { ToggleContext } from "./utils/toggleContext";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: ${(props) => (props.toggle ? "15" : "5")};
  background-color: ${({ theme }) => theme.bg};

  @media ${devices.laptop} {
    flex: 10;
  }
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
    const { toggle } = useContext(ToggleContext);
    const location = useLocation();
    return (
      <>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Container>
            {location.pathname.split("/")[1] !== "video" && (
              <Menu toggle={toggle} />
            )}

            <Main toggle={toggle}>
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
        {
          path: "auth",
          element: <SignIn />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
