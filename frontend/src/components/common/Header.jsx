import { useEffect } from "react";
import {
  Button,
  Container,
  Box,
  Link,
  CssBaseline,
  Tooltip,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useSelector, useDispatch } from "react-redux";
import { fetchDecodeData } from "../../auth/DecodeActions";
import { deleteToken } from "../../auth/tokenManager";

import logo from "./logo.png";

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
      <Container
        style={{
          backgroundColor: "#FECD93",
          maxWidth: "100%",
          boxShadow:'2px 1px 5px 0px gray'
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
            <Box>
              <Button href="/mainpage">
                <img
                  height="60px"
                  position="center"
                  style={{margin: 1}}
                  src={logo}
                />
              </Button>
            </Box>
          ) : (
            <Button href="/">
              <img
                height="60px"
                position="center"
                style={{margin: 1}}
                src={logo}
              />
            </Button>
          )}

          {token ? (
            // if IsLogin is true
            <Box sx={{ mb: 0.5 }}>
              <Link
                sx={{ color: "#ffffff", fontWeight: "500", fontSize: "23px" }}
                align="right"
                variant="h5"
                href="/mypage"
                underline="none"
              >
                <IconButton color="inherit" sx={{ ml: 1, mb: 0.6 }}>
                  <PersonIcon />
                </IconButton>
                {reduxToken.decodeInfo?.alias}님, 환영합니다!
              </Link>
              <Tooltip title="logout">
                <IconButton
                  onClick={logoutButton}
                  href="/"
                  style={{ color: "#ffffff" }}
                  sx={{ ml: 1, mb: 1 }}
                >
                  <LogoutIcon />
                </IconButton>
              </Tooltip>
            </Box>
          ) : (
            // if IsLogin is false
            <Button sx={{ marginRight: 2.5, marginBottom: 0.5 }}>
              <Link
                href="/login"
                sx={{
                  textDecoration: "none",
                  fontFamily: "Itim",
                  color: "#ffffff",
                  fontSize: 25,
                  fontStyle: "bold",
                  fontWeight: "500",
                }}
              >
                Login
              </Link>
            </Button>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Header;
