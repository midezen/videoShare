import styled from "styled-components";
import logo from "../img/logo.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

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
`;

const Img = styled.img`
  height: 25px;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Input = styled.input`
  width: 100%;
  outline: 0;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.textSoft};
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

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={logo} />
          MideTube
        </Logo>
        <Search>
          <Input type="text" placeholder="Search" />
          <SearchOutlinedIcon />
        </Search>
        <Button>
          <AccountCircleOutlinedIcon />
          SIGN IN
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
