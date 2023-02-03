import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Box,
  Link,
  CssBaseline,
  Tooltip,
  AppBar,
  Toolbar,
} from "@mui/material";
import "../../font/font.css";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useSelector, useDispatch } from "react-redux";
import { fetchDecodeData } from "../../auth/DecodeActions";
import { deleteToken } from "../../auth/tokenManager";

import logo from "./logo3.png";
import LoginModal from "../firstpage/LoginModal";
import NewEmojiModal from "./NewEmojiModal";
import HowToUseModal from "./HowToUseModal";

const theme = createTheme({
  palette: {
    primary: {
      main: "# v",
    },
  },
});

function Header() {
  const token = localStorage.getItem("access_token");

  const dispatch = useDispatch();

  const reduxToken = useSelector((state) => state.DecodeReducer);

  // 로그인 모달
  const [stepLogin, setStepLogin] = useState(0);
  const [openLogin, setOpenLogin] = useState(false);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => {
      setOpenLogin(false);
      setStepLogin(0);
  };

  // 이모지 템플렛 모달
  const [openCreate, setOpenCreate] = useState(false);
  const handleOpenCreate = () => setOpenCreate(true);
  const handleCloseCreate = () => {
      setOpenCreate(false);
  };

  // 사용방법 모달
  const [stepHow, setStepHow] = useState(0);
  const [openHow, setOpenHow] = useState(false);
  const handleOpenHow = () => setOpenHow(true);
  const handleCloseHow = () => {
      setOpenHow(false);
      setStepHow(0);
  };

  useEffect(() => {
    if (token) {
      dispatch(fetchDecodeData(token));
    } else {
      console.log("header.js not token");
    }
  }, []);

  const logoutButton = (event) => {
    alert("로그아웃 완료!");
    event.preventDefault();
    deleteToken(token);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar>
      <Container
        style={{
          backgroundColor: "#FFFFFF",
          maxWidth: "100%",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-end"
          marginLeft="auto"
          sx={{ height: "70px" }}
        >
          {token ? (
            <Toolbar>
              <Box>
                <Button href="/">
                  <img
                    height="60px"
                    style={{marginLeft: 119, marginTop: 102, position:"absolute"}}
                    src={logo}
                  />
                </Button>
                <Box style={{marginLeft: 230, marginBottom: -5}}>
                  <Button>
                    <Link
                      fontFamily= 'cookierun-bold'
                      sx={{ 
                        color: "#6a6a6a",
                        "&:hover": {
                        color: "#fede29"
                        },
                        fontWeight: "500", fontSize: "22px"}}
                        variant="h5"
                        href="/mainpage"
                        underline="none"
                        style={{margin: 20}}
                    >
                      템플렛
                  </Link>
                  </Button>
                  <Button>
                    <Link
                      fontFamily= 'cookierun-bold'
                      sx={{ 
                        color: "#6a6a6a",
                        "&:hover": {
                        color: "#fede29", cursor: 'pointer'
                        },
                        fontWeight: "500", fontSize: "22px"}}
                        variant="h5"
                        underline="none"
                        style={{margin: 20}}
                        onClick={() => {handleOpenCreate()}}
                    >
                      만들기
                    </Link>
                  </Button>
                  <Button>
                    <Link
                      fontFamily= 'cookierun-bold'
                      sx={{ 
                        color: "#6a6a6a",
                        "&:hover": {
                        color: "#fede29", cursor: 'pointer'
                        },
                        fontWeight: "500", fontSize: "22px"}}
                        variant="h5"
                        underline="none"
                        style={{margin: 20}}
                        onClick={() => {handleOpenHow()}}
                    >
                      사용방법
                    </Link>
                  </Button>
                </Box>
              </Box>
            </Toolbar>
            
          ) : (
            <Button href="/">
              <img
                height="60px"
                style={{marginLeft: 167, marginTop: -60, position:"absolute"}}
                src={logo}
              />
            </Button>
          )}

          {token ? (
            // if IsLogin is true
            <Box sx={{ mb: 1.3 }}>
              <Link
                fontFamily= 'cookierun-bold'
                sx={{ 
                  color: "#6a6a6a",
                  "&:hover": {
                  color: "#fede29"
                  },
                  fontWeight: "500", fontSize: "19px" }}
                  align="right"
                  variant="h5"
                  href="/mypage"
                  underline="none"
              >
                  <PersonIcon style={{marginBottom: -5, marginRight: 5}}/>
                {reduxToken.decodeInfo?.alias}님
              </Link>
              <Tooltip title="logout">
                <IconButton
                  onClick={logoutButton}
                  href="/"
                  style={{ color: "#6a6a6a" }}
                  sx={{ ml: 2, mb: 0.3 }}
                >
                  <LogoutIcon sx={{height: 23, "&:hover": {color: "#fede29"}}}/>
                </IconButton>
              </Tooltip>
            </Box>
          ) : (
            // if IsLogin is false
            <Link
              onClick={() => {handleOpenLogin()}}
              sx={{
                textDecoration: "none",
                // fontFamily: "Itim",
                color: "gray",
                "&:hover": {color: "#fede29",cursor: 'pointer'},
                fontSize: 25,
                fontStyle: "bold",
                fontWeight: "500",
                mb: 2, mr: 3
              }}
              fontFamily= 'cookierun-black'
            >
              Login
            </Link>
          )}
        </Box>
      </Container>
      </AppBar>
      {/* 이모지 생성 Modal */}
      <NewEmojiModal openCreate={openCreate} handleCloseCreate={handleCloseCreate} setOpenCreate={setOpenCreate}/>
      {/* 사용방법 Modal */}
      <HowToUseModal openHow={openHow} handleCloseHow={handleCloseHow} setOpenHow={setOpenHow} stepHow={stepHow} setStepHow={setStepHow}/>
      {/* 로그인 Modal */}
      <LoginModal openLogin={openLogin} handleCloseLogin={handleCloseLogin} setOpenLogin={setOpenLogin} stepLogin={stepLogin} setStepLogin={setStepLogin}/>
    </ThemeProvider>
  );
}

export default Header;
