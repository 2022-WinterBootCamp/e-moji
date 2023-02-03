import * as React from "react";
import { useEffect, useState } from "react";
import Api from "../components/common/customApi";
import axios from "axios";
import '../font/font.css';

import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  FormHelperText,
  Modal,
  Backdrop,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  styled,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#7F6F10",
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

const UserInfoTf = styled(TextField)(({}) => ({
  borderRadius: 5,
  textAlign: "center",
  "&:hover": {
    color: "#FFAB47",
  },

  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "#7F6F10",
    },
  },
}));

const FormHelperTexts = styled(FormHelperText)`
  width: 100%;
  padding: 6px;
  font-weight: 600;
  color: #c65959;
  font-size: 12px;
`;

const Register = ({setStepLogin, setHeight}) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const [passwordState, setPasswordState] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [email, setEmail] = useState("");
  const [alias, setAlias] = useState("");
  const [checkEmail, setCheckEmail] = useState("");
  const [checkAilas, setCheckAlias] = useState("");

  const emailRegex =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  const aliasRegex = /^[가-힣a-zA-Z0-9]+$/;

  //form 비교
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const user = {
      email: data.get("email"),
      password: data.get("password"),
      alias: data.get("alias"),
    };

    const userRegister = async () => {
      await axios({
        method: "POST",
        url: "/api/v1/users/",
        data: user,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => {
          // Handle success.
          handleOpen();

          console.log("Well done!");
        })
        .catch((error) => {
          // Handle error.
          console.log("An error occurred:", error.response);
        });
    };

    const passData = data.get("passData");
    // 비밀번호 유효성 체크
    if (!passwordRegex.test(passData)) {
      setPasswordState(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
    } else {
      setPasswordState("");
    }

    // 비밀번호 같은지 체크
    if (user.password !== passData)
      setPasswordError("비밀번호가 일치하지 않습니다.");
    else setPasswordError("");

    // 모두 통과되면 완료출력
    if (
      emailRegex.test(user.email) &&
      passwordRegex.test(user.password) &&
      user.password === passData &&
      aliasRegex.test(user.alias)
    ) {
      console.log(user);
      userRegister();
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onBlurInfo = async (props, event) => {
    const res = await Api.get(`/users/?case=${props[0]}&value=${props[1]}`);

    if (props[0] === "email") {
      if (!emailRegex.test(email)) {
        setCheckEmail("올바른 이메일 형식이 아닙니다.");
      } else {
        if (res.data.result === false)
          setCheckEmail("사용 중인 이메일 입니다.");
        else setCheckEmail("사용 가능한 이메일 입니다.");
      }
    }

    if (props[0] === "alias") {
      if (!aliasRegex.test(alias) || alias.length < 1) {
        setCheckAlias("올바른 이름을 입력해주세요.");
      } else {
        if (res.data.result === false)
          setCheckAlias("사용 중인 닉네임 입니다.");
        else setCheckAlias("사용 가능한 닉네임 입니다.");
      }
    }
  };

  useEffect(() => {
    setHeight(700);
  }, [])

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" sx={{ mt: -13 }}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
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
              sx={{ color: "#7F6F10" }}
              fontFamily='cookierun-bold'
            >
              Sign up
            </Typography>
            <Box
              textAlign="left"
              component="form"
              color="info.contrastText"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1, width: 396, marginTop: 5, height: 500 }}
            >
              <UserInfoTf
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                onBlur={(event) => {
                  onBlurInfo(["email", email], event);
                }}
              />

              <FormHelperTexts>{checkEmail}</FormHelperTexts>
              <UserInfoTf
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
              />
              <FormHelperTexts>{passwordState}</FormHelperTexts>
              <UserInfoTf
                margin="normal"
                required
                fullWidth
                name="passData"
                label="Password Confirm"
                type="password"
                id="passData"
              />
              <FormHelperTexts>{passwordError}</FormHelperTexts>

              <UserInfoTf
                margin="normal"
                required
                fullWidth
                name="alias"
                label="Your name"
                type="alias"
                id="alias"
                onChange={(e) => setAlias(e.target.value)}
                onBlur={(event) => {
                  onBlurInfo(["alias", alias], event);
                }}
              />
              <FormHelperTexts>{checkAilas}</FormHelperTexts>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                onHandle={handleClick}
                sx={{
                  mt: 3,
                  mb: 50,
                  height: 50,
                  fontWeight: "bold",
                  fontFamily: "Itim",
                  borderRadius: 5,
                  backgroundColor: "#FEDE29",
                  color: "#7F6F10",
                  "&:hover": {
                    backgroundColor: "#7F6F10",
                    color: "#FEDE29",
                  },
                }}
              >
                Sign Up
              </Button>

              <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 700,
                }}
              >
                <Box sx={style}>
                  <Typography
                    id="modal-title"
                    variant="h3"
                    fontWeight="bold"
                    sx={{ mt: 3,mb: 2, color: "#7F6F10"}}
                    fontFamily='cookierun-bold'
                  >
                    WELCOME!
                  </Typography>

                  {/* <Link sx={btnstyle} >
                    LOGIN &gt;
                  </Link> */}
                  <Button
                    fullWidth
                    variant="contained"
                    fontFamily='cookierun-bold'
                    sx={{
                      mt: 3,
                      mb: 2,
                      height: 50,
                      fontWeight: "bold",
                      borderRadius: 5,
                      backgroundColor: "#7F6F10",
                      color: "#FEDE29",
                      "&:hover": {
                        backgroundColor: "#FEDE29",
                        color: "#7F6F10",
                      },
                    }}
                    onClick={() => {setStepLogin(0)}}
                  >
                    LOGIN &gt;
                  </Button>
                </Box>
              </Modal>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Container>
  );
};

export default Register;
