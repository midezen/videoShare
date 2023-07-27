import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 350px;
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: ${(props) => props.type === "sm" && "10px"};
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "100px" : "202px")};
  object-fit: cover;
  border-radius: 10px;
  flex: ${(props) => props.type === "sm" && "0.5"};
  position: relative;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => (props.type === "sm" ? "0px" : "16px")};
  gap: 12px;
  flex: ${(props) => props.type === "sm" && "0.5"};
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: ${(props) => (props.type === "sm" ? "15px" : "16px")};
  font-weight: ${(props) => (props.type === "sm" ? "400" : "500")};
  color: ${({ theme }) => theme.text};
  margin-bottom: ${(props) => (props.type === "sm" ? "15px" : "none")};
  width: ${(props) => (props.type === "sm" ? "100%" : "80%")};
`;

const ChannelName = styled.h2`
  font-size: ${(props) => (props.type === "sm" ? "13px" : "14px")};
  color: ${({ theme }) => theme.textSoft};
  margin-top: ${(props) => (props.type === "sm" ? "0px" : "8px")};
`;

const Info = styled.div`
  font-size: ${(props) => (props.type === "sm" ? "13px" : "14px")};
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
  return (
    <Link to="/video/1" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src="https://media.istockphoto.com/id/1398997991/photo/young-businesswoman-using-a-digital-tablet-focused-designer-standing-in-her-agency-creative.webp?b=1&s=170667a&w=0&k=20&c=2dqRV4jIr2Aumy6KvN1U3xkQOefjIY8erwIxDkDPWVc="
          />
          <Texts type={type}>
            <Title type={type}>
              This is a video with a very very very long title
            </Title>
            <ChannelName type={type}>MideZen</ChannelName>
            <Info type={type}>702k views · 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
