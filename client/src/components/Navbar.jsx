import styled from "styled-components";
import logo from "../img/logo.png";

const Container = styled.div`
  height: 50px;
  position: sticky;
  top: 0;
  background-color: #202020;
  color: white;
`;

const Wrapper = styled.div``;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  padding: 18px 26px;
`;

const Img = styled.img`
  height: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={logo} />
          MideTube
        </Logo>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
