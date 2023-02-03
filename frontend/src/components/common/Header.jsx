import { useEffect } from "react";
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

import logo from "./logo2.png";

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
                    style={{marginLeft: 120, marginTop: 45, position:"absolute"}}
                    src={logo}
                  />
                </Button>
                <Box style={{marginLeft: 230, marginBottom: 17}}>
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
                      style={{margin: 10}}
                  >
                    템플릿
                  </Link>
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
            <Box sx={{ mb: 1.5 }}>
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
                {/* <IconButton color="inherit" sx={{ ml: 1, mb: 0.6 }}> */}
                  <PersonIcon style={{marginBottom: -4, marginRight: 5}}/>
                {/* </IconButton> */}
                {reduxToken.decodeInfo?.alias}님
              </Link>
              <Tooltip title="logout">
                <IconButton
                  onClick={logoutButton}
                  href="/"
                  style={{ color: "#6a6a6a" }}
                  sx={{ ml: 1, mb: 0 }}
                >
                  <LogoutIcon sx={{height: 23, "&:hover": {color: "#fede29"}}}/>
                </IconButton>
              </Tooltip>
            </Box>
          ) : (
            // if IsLogin is false
            <Link
              href="/login"
              sx={{
                textDecoration: "none",
                // fontFamily: "Itim",
                color: "gray",
                "&:hover": {color: "#fede29"},
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
    </ThemeProvider>
  );
}

export default Header;
