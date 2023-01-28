import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Divider,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  Link,
  Grid,
} from "@mui/material";
import { setAccessToken } from "../auth/tokenManager";
import { decodeToken } from "../auth/tokenGetter";
import Api from "../components/common/customApi";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF900D",
    },
  },
  typography: {
    subtitle1: {
      fontSize: 72,
      fontWeight: 700,
      fontStyle: "Inter",
    },
    body1: {
      fontSize: 15,
      fontWeight: 50,
      fontStyle: "italic",
    },
    Button: {
      fontStyle: "italic",
    },
  },
});

function Login() {
  const userInfo = [];

  const [saveInfo, setSaveInfo] = useState(userInfo);
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    const userLogin = async () => {
      const result = await Api.post(`/users/auth`, {
        email: data.get("email"),
        password: data.get("password"),
      }).then((res) => res.data);
      setSaveInfo(result);
      console.log("받아온 토큰", result);

      if (result.access_token !== null) {
        setAccessToken(result.access_token, false);
        alert("로그인 성공");
        decodeToken(result.access_token);
        window.location.replace("/mainpage");
      } else {
        alert("아이디와 비밀번호를 다시 확인해주세요.");
        // Handle error.
        console.log("An error occurred:", result);
      }
    };
    userLogin();
  };
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" sx={{ mb: 25, mt: 20 }}>
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button href="/">
              <Typography
                variant="h2"
                color="inherit"
                fontStyle="Inter"
                fontWeight="800"
                position="center"
                sx={{ color: "#FECD93" }}
              >
                IGE MOJI
              </Typography>
            </Button>
            <Box
              component="form"
              color="info.contrastText"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="userId"
                label="email"
                name="email"
                autoComplete="name"
                autoFocus
                sx={{ borderRadius: 5, textAlign: "center" }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="PW"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  height: 50,
                  fontWeight: "bold",
                  fontFamily: "Itim",
                  borderRadius: 5,
                  backgroundColor: "#FFAB47",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#FF900D",
                    color: "#838383",
                  },
                }}
                onHandle={handleClick}
              >
                Sign In
              </Button>
            </Box>
            <Grid container>
              <Grid item xs>
                <Typography
                  variant="overline"
                  fontStyle="Inter"
                  fontWeight="550"
                >
                  {" "}
                  회원이 아니신가요?
                </Typography>
              </Grid>

              <Grid item>
                <Typography
                  variant="overline"
                  fontStyle="Inter"
                  fontWeight="550"
                >
                  <Button href="/Examplepage"> 회원가입</Button>{" "}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </Container>
  );
}

export default Login;
