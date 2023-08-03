import styled from "styled-components";
import logo from "../img/logo.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useContext, useState } from "react";
import { ToggleContext } from "../utils/toggleContext";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Menu2 from "./Menu2";
import { devices } from "../utils/devices";

const Container = styled.div`
  height: 50px;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  z-index: 999;
  // width: 100vw;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DIV = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: 22px;
  @media ${devices.mobileS} {
    margin-left: 12px;
  }
  @media ${devices.mobileS} {
    gap: 5px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  @media ${devices.mobileM} {
    font-size: 14px;
  }
`;

const Img = styled.img`
  height: 25px;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  justify-content: space-between;
  padding: 5px 20px;
  border: 1px solid #ccc;
  border-radius: 20px;
  @media ${devices.tablet} {
    width: 20%;
  }
  @media ${devices.mobileM} {
    width: 15%;
  }
  @media ${devices.mobileS} {
    width: fit-content;
    padding: 0;
    border: none;
  }
`;

const Input = styled.input`
  width: 100%;
  outline: 0;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  @media ${devices.mobileM} {
    font-size: 12px;
  }
  @media ${devices.mobileS} {
    display: none;
  }
`;

const SearchTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
  border: 1px solid #ccc;
  background-color: ${({ theme }) => theme.bgLighter};
`;

const InputTwo = styled.input`
  flex: 1;
  outline: 0;
  border: none;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
`;

const SearchIcon = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
`;

const Item = styled.div`
  cursor: pointer;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500px;
  cursor: pointer;
  margin-right: 26px;
  @media ${devices.mobileM} {
    padding: 2px 7px;
    font-size: 12px;
  }
  @media ${devices.mobileS} {
    margin-right: 16px;
  }
`;

const ButtonText = styled.div`
  @media ${devices.mobileS} {
    display: none;
  }
`;

const Drawer = styled.div``;

const Navbar = ({ darkMode, setDarkMode }) => {
  const handleTheme = () => {
    setDarkMode(!darkMode);
  };

  const location = useLocation();

  const { handleToggle, drawerToggle, setDrawerToggle, handleDrawerToggle } =
    useContext(ToggleContext);

  const [searchShow, setSearchShow] = useState(false);

  const handleSearchClick = () => {
    setSearchShow(!searchShow);
  };

  const screenWidth = window.innerWidth;

  const handleClick = () => {
    if (location.pathname.split("/")[1] === "video") {
      return handleDrawerToggle();
    }
    if (screenWidth <= 1312) {
      return handleDrawerToggle();
    } else {
      return handleToggle();
    }
  };

  return (
    <Container>
      <Drawer>
        <SwipeableDrawer
          anchor="left"
          open={drawerToggle}
          onClose={() => setDrawerToggle(false)}
          onOpen={() => setDrawerToggle(true)}
          PaperProps={{
            style: {
              width: "220px",
            },
          }}
        >
          <Menu2 />
        </SwipeableDrawer>
      </Drawer>

      {screenWidth <= 519 && (
        <Drawer>
          <SwipeableDrawer
            anchor="top"
            open={searchShow}
            onClose={() => setSearchShow(false)}
            onOpen={() => setSearchShow(true)}
          >
            <SearchTwo>
              <InputTwo type="text" placeholder="Search" />
              <SearchIcon>
                <SearchOutlinedIcon style={{ cursor: "pointer" }} />
              </SearchIcon>
            </SearchTwo>
          </SwipeableDrawer>
        </Drawer>
      )}

      <Wrapper>
        <DIV>
          <IconButton
            style={{ color: "inherit" }}
            onClick={() => handleClick()}
          >
            <MenuIcon />
          </IconButton>

          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo>
              <Img src={logo} />
              MideTube
            </Logo>
          </Link>
        </DIV>

        <Search>
          <Input type="text" placeholder="Search" />
          <SearchOutlinedIcon
            style={{ cursor: "pointer" }}
            onClick={handleSearchClick}
          />
        </Search>

        <Item onClick={handleTheme}>
          <SettingsBrightnessOutlinedIcon />
        </Item>

        <Link to="auth" style={{ textDecoration: "none" }}>
          <Button>
            <AccountCircleOutlinedIcon />
            <ButtonText>SIGN IN</ButtonText>
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
