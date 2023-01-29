import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Container, Grid, createTheme, Typography } from "@mui/material";
import { setAccessToken } from "../auth/tokenManager";
import { decodeToken } from "../auth/tokenGetter";
import Api from "../components/common/customApi";

export default function Login() {
  const theme = createTheme({
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

  const userInfo = [];

  const [saveInfo, setSaveInfo] = useState(userInfo);

  const handleSubmit = (event) => {
    const data = new FormData(event.currentTarget);
    console.log({
      event,
      name: data.get("name"),
      password: data.get("password"),
    });

    const userLogin = async () => {
      const result = await Api.post(`/users/auth`, {
        name: data.get("name"),
        password: data.get("password"),
      }).then((res) => res.data);
      setSaveInfo(result);
      console.log("받아온 결과1", result);

      if (result.access_token !== null) {
        setAccessToken(result.access_token, false);
        alert("로그인 성공♻️");

        decodeToken(result.access_token);
        window.location.replace("/login/welcome");
      } else {
        alert("아이디와 비밀번호를 다시 확인해주세요.");
        // Handle error.
        console.log("An error occurred:", result);
      }
    };
    userLogin();
  };

  return (
    <Container fixed>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onSubmit={handleSubmit}
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
          <Typography
            variant="h4"
            fontStyle="Inter"
            fontWeight="600"
            position="center"
            sx={{ mb: 5, mt: 3 }}
          >
            {" "}
            Login{" "}
          </Typography>
          <TextField
            label="Email"
            autoFocus
            fullWidth
            margin="nomal"
            autoComplete="email"
            sx={{ mt: 3, width: 500 }}
          />{" "}
          <br />
          <TextField
            label="Password"
            fullWidth
            type="password"
            sx={{ mt: 3, width: 500 }}
          />
          <br />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="inherit"
            size="large"
            sx={{ mt: 3, color: "white", bgcolor: "#FECD93", width: 500 }}
          >
            sign in
          </Button>
          <Grid container>
            <Grid item xs>
              <Typography variant="overline" fontStyle="Inter" fontWeight="550">
                {" "}
                회원이 아니신가요?
              </Typography>
            </Grid>

            <Grid item>
              <Typography variant="overline" fontStyle="Inter" fontWeight="550">
                <Button href="/Examplepage"> 회원가입</Button>{" "}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Container>
  );
}
