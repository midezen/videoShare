import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsBasketBallOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import SportsESportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../img/logo.png";
import { IconButton } from "@mui/material";
import { devices } from "../utils/devices";
import { useContext } from "react";
import { ToggleContext } from "../utils/toggleContext";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: calc(100vh - 50px);
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 50px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.track};
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.thumb};
  }
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const DIV = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: -5px;
  margin-top: -8px;
  margin-bottom: 8px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;
const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 2px;
  border-radius: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.bg};
  }
  display: flex;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;

const LoginText = styled.div`
  display: block;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500px;
  margin-top: 10px;
  cursor: pointer;
`;

const ButtonText = styled.div``;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu2 = () => {
  const { handleDrawerToggle, setDrawerToggle } = useContext(ToggleContext);
  return (
    <Container>
      <Wrapper>
        <DIV>
          <IconButton style={{ color: "inherit" }} onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>

          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo>
              <Img src={logo} />
              MideTube
            </Logo>
          </Link>
        </DIV>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Item onClick={() => setDrawerToggle(false)}>
            <HomeIcon />
            Home
          </Item>
        </Link>

        <Item>
          <ExploreOutlinedIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionOutlinedIcon />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          History
        </Item>
        <Hr />
        <Login>
          <LoginText>Sign in to like Videos, Comment and Subscribe.</LoginText>
          <Link to="auth" style={{ textDecoration: "none" }}>
            <Button>
              <AccountCircleOutlinedIcon />
              <ButtonText>SIGN IN</ButtonText>
            </Button>
          </Link>
        </Login>
        <Hr />
        <Title>BEST OF MIDETUBE</Title>
        <Item>
          <LibraryMusicOutlinedIcon />
          Music
        </Item>
        <Item>
          <SportsBasketBallOutlinedIcon />
          Sports
        </Item>
        <Item>
          <SportsESportsOutlinedIcon />
          Gaming
        </Item>
        <Item>
          <MovieOutlinedIcon />
          Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          News
        </Item>
        <Item>
          <LiveOutlinedIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu2;
