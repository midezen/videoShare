import styled from "styled-components";
import EmojiIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import Ayomide from "../img/Ayomide 2.png";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  gap: 15px;
`;

const ProfileImage = styled.img`
  width: 39px;
  height: 39px;
  object-fit: cover;
  border-radius: 50%;
`;

const InputSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
  padding: 7px 0px;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid ${({ theme }) => theme.textSoft};
  outline: 0;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
`;

const InputBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InputButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const InputButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 30px;
  font-weight: bold;
  background-color: ${(props) =>
    props.thereIsComment ? "#3ea6ff" : ({ theme }) => theme.bgLighter};
  color: ${(props) => {
    if (props.isdisabled) {
      return ({ theme }) => theme.textSoft;
    }
    if (props.thereIsComment) {
      return "white";
    } else {
      return ({ theme }) => theme.text;
    }
  }};
  padding: 10px 13px;
  gap: 2px;
  border: none;
  cursor: pointer;
`;

const AddComment = () => {
  const [isComment, setIsComment] = useState(true);
  return (
    <Container>
      <ProfileImage src={Ayomide} />
      <InputSection>
        <Input placeholder="Add a comment" />
        <InputBottom>
          <EmojiIcon style={{ cursor: "pointer" }} />
          <InputButtons>
            <InputButton>Cancel</InputButton>
            {isComment ? (
              <InputButton thereIsComment>Comment</InputButton>
            ) : (
              <InputButton isdisabled>Comment</InputButton>
            )}
          </InputButtons>
        </InputBottom>
      </InputSection>
    </Container>
  );
};

export default AddComment;
