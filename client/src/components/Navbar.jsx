import styled from "styled-components";
import logo from "../img/logo.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 50px;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-left: 26px;
  color: ${({ theme }) => theme.text};
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
`;

const Input = styled.input`
  width: 100%;
  outline: 0;
  border: none;
  background-color: transparent;
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
`;

const Navbar = ({ darkMode, setDarkMode }) => {
  const handleTheme = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo>
            <Img src={logo} />
            MideTube
          </Logo>
        </Link>
        <Search>
          <Input type="text" placeholder="Search" />
          <SearchOutlinedIcon style={{ cursor: "pointer" }} />
        </Search>

        <Item onClick={handleTheme}>
          <SettingsBrightnessOutlinedIcon />
        </Item>

        <Button>
          <AccountCircleOutlinedIcon />
          SIGN IN
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
