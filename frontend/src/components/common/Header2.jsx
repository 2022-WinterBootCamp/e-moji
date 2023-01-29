import { useState, useRef, useEffect } from "react";
import {
  Button,
  Container,
  Box,
  Link,
  CssBaseline,
  Typography,
  Tooltip,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useSelector, useDispatch } from "react-redux";
import { fetchDecodeData } from "../../auth/DecodeActions";
import { deleteToken } from "../../auth/tokenManager";

const theme = createTheme({
  palette: {
    primary: {
      main: "# v",
    },
  },
});

function Header() {
  const navigate = useNavigate();
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
          width: "100%",
          maxWidth: "1920px",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-end"
          marginLeft="auto"
        >
          {token ? (
            <Button href="/mainpage">
              <Typography
                variant="h5"
                color="inherit"
                fontStyle="Inter"
                fontWeight="800"
                position="center"
                sx={{ mb: 1, color: "#ffffff" }}
              >
                IGE MOJI
              </Typography>
            </Button>
          ) : (
            <Button href="/">
              <Typography
                variant="h5"
                color="inherit"
                fontStyle="Inter"
                fontWeight="800"
                position="center"
                sx={{ mb: 1, color: "#ffffff" }}
              >
                IGE MOJI
              </Typography>
            </Button>
          )}

          {token ? (
            // if IsLogin is true
            <div style={{ width: "80%", textAlign: "right" }}>
              <Link
                sx={{ color: "#ffffff", fontWeight: "500" }}
                align="right"
                variant="h6"
                color="inherit"
                href="/mypage"
                underline="none"
              >
                <IconButton color="inherit" sx={{ mt: -0.6 }}>
                  <PersonIcon />
                </IconButton>
                {reduxToken.decodeInfo?.alias}님, 환영합니다!
              </Link>
              <Tooltip title="logout">
                <IconButton
                  onClick={logoutButton}
                  href="/"
                  color="inherit"
                  sx={{ ml: 2, mt: -0.6 }}
                >
                  <LogoutIcon />
                </IconButton>
              </Tooltip>
            </div>
          ) : (
            // if IsLogin is false
            <Button>
              <Link
                href="/login"
                sx={{
                  textDecoration: "none",
                  fontFamily: "Itim",
                  color: "#ffffff",
                  margin: 1,
                  fontSize: 20,
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
