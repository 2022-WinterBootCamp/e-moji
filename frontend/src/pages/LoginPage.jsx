import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
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
      fontStyle: "Inter",
    },
    Button: {
      fontStyle: "Inter",
    },
  },
});

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    const userLogin = async () => {
      try {
        const result = await Api.post(`/users/auth`, {
          email: data.get("email"),
          password: data.get("password"),
        }).then((res) => res.data);
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
      } catch {
        alert("아이디와 비밀번호를 다시 확인해주세요.");
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
            <Typography
              variant="h2"
              color="inherit"
              fontStyle="Inter"
              fontWeight="800"
              position="center"
              sx={{ color: "#FECD93" }}
            >
              Login
            </Typography>
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
                label="Email"
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
                label="Password"
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
              >
                Login
              </Button>
            </Box>
            <Grid container>
              <Grid item xs>
                <Typography
                  variant="overline"
                  fontStyle="Inter"
                  fontWeight="550"
                  sx={{ fontWeight: "bold", fontFamily: "Itim" }}
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
                  <Button href="/register"> 회원가입</Button>{" "}
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
