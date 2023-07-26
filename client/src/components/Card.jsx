import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 350px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  object-fit: cover;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 4px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = () => {
  return (
    <Link to="/video/1" style={{ textDecoration: "none" }}>
      <Container>
        <Image src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        <Details>
          <ChannelImage src="https://media.istockphoto.com/id/1398997991/photo/young-businesswoman-using-a-digital-tablet-focused-designer-standing-in-her-agency-creative.webp?b=1&s=170667a&w=0&k=20&c=2dqRV4jIr2Aumy6KvN1U3xkQOefjIY8erwIxDkDPWVc=" />
          <Texts>
            <Title>This is a Video</Title>
            <ChannelName>MideZen</ChannelName>
            <Info>702, 503 views · 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
