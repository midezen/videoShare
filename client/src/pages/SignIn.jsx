import styled from "styled-components";

const Container = styled.div`
  color: ${({ theme }) => theme.text};
  height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  height: calc(70vh - 50px);
  background-color: ${({ theme }) => theme.bgLighter};
  width: 280px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 18px;
  font-weight: 500;
`;

const H2 = styled.h2`
  font-size: 17px;
  font-weight: 400;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  outline: 0;
  color: ${({ theme }) => theme.text};
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <H1>Sign in</H1>
        <H2>to continue to MideTube</H2>
        <Input placeholder="username" />
        <Input placeholder="password" type="password" />
        <Button>Sign in</Button>
        <H1>Or</H1>
        <Input placeholder="username" />
        <Input placeholder="email" type="email" />
        <Input placeholder="password" type="password" />
        <Button>Sign up</Button>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
