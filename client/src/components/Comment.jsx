import styled from "styled-components";
import Ayomide from "../img/Ayomide 2.png";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

const Container = styled.div`
  display: flex;
  gap: 15px;
  color: ${({ theme }) => theme.text};
`;

const Image = styled.img`
  width: 39px;
  height: 39px;
  object-fit: cover;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  gap: 6px;
`;

const DatePosted = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Text = styled.p`
  font-size: 15px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  font-size: 13px;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  border: none;
  cursor: pointer;
`;

const Comment = () => {
  return (
    <Container>
      <Image src={Ayomide} />
      <Details>
        <Top>
          @ayomide <DatePosted>1 year ago</DatePosted>
        </Top>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <Bottom>
          <Buttons>
            <Button>
              <ThumbUpAltIcon /> 30
            </Button>
            <Button>
              <ThumbDownAltIcon />
            </Button>
          </Buttons>
          Reply
        </Bottom>
      </Details>
    </Container>
  );
};

export default Comment;
