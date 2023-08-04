import styled from "styled-components";
import Comment from "./Comment";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => (props.drawer === "drawer" ? "0px" : "20px")};
  gap: 20px;
  overflow-y: ${(props) => props.drawer === "drawer" && "scroll"};
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
  padding: ${(props) => props.drawer === "drawer" && "20px 15px"};
`;

const Comments = ({ drawer }) => {
  return (
    <Container drawer={drawer}>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default Comments;
