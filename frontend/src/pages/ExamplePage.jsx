import axios from "axios";
import React, { useState } from 'react';
import {Dialog, 
  DialogActions, 
  DialogContent, 
  DialogTitle, 
  IconButton,  
  Button,
  CssBaseline,
  TextField,
  FormControl,
  FormHelperText,
  Grid,
  Box,
  Typography,
  Container,
  createTheme, 
  Modal,
  ThemeProvider} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBack from '@mui/icons-material/ArrowBack';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";


const FormHelperTexts = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700 !important;
  color: #d32f2f !important;
`;

const Boxs = styled(Box)`
  padding-bottom: 40px !important;
`;


export default function Signup() {
  const theme = createTheme();
  const [emailError, setEmailError] = useState('');
  const [passwordState, setPasswordState] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [aliasError, setaliasError] = useState('');
  const [registerError, setRegisterError] = useState('');
  const {replace}=useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alias, setalias] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();

  const data = new FormData(e.currentTarget);
  const joinData = {
    email: data.get('email'),
    alias: data.get('alias'),
    password: data.get('password'),
    rePassword: data.get('rePassword'),
  };
  const {email, alias, password, rePassword } = joinData;

  
  const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if (!emailRegex.test(email)) {
    setEmailError('올바른 이메일 형식이 아닙니다.');
  } else {
    setEmailError('');
  }


  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  if (!passwordRegex.test(password)) {
    setPasswordState('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
  } else {
    setPasswordState('');
  }


  if (password !== rePassword) {
    setPasswordError('비밀번호가 일치하지 않습니다.');
  } else {
    setPasswordError('');
  }

  
  const aliasRegex = /^[가-힣a-zA-Z]+$/;
  if (!aliasRegex.test(alias) || alias.length < 1) {
    setaliasError('올바른 닉네임을 입력해주세요.');
  } else {
    setaliasError('');
  }
  }
	const [inputInfo, setInputInfo] = useState({
		email: "",
		password: "",
    nickalias:"",
	});


	const submitOnClick = async () => {
    axios
		.post( "http://localhost:8080/v1/api/users/",{
      email: email,
      password: password,
      nickalias: alias,
    })
    .then((response)=>{
      console.log('Well done!');
      console.log('Userprofile', response.data.user);
      console.log('user token', response.data.joinData);
      localStorage.setItem('token',response.data.joinData);
      replace("/checkModal");
    })
    .catch((error)=>{console.log('회원가입에 실패하였습니다. 다시한번 확인해 주세요.',error.response);
    });
  };

	const textOnChange = (e) => {
		setInputInfo({
			...inputInfo,
			[e.target.alias]: e.target.value,
		});
	};

  
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height:300,
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #FFFFFF",
  borderRadius: '25px',
  boxShadow: 24,
  p: 4,
};


	// useEffect(() => {
	// 	console.log(signinResult);
	// }, [signinResult]);
  
	return (
		<ThemeProvider theme={theme}>
      <Container maxWidth="s">
        <div style={{textAlign: 'left'}}>
          <IconButton href="/loginpage">
            <ArrowBack fontWeight='300'/>
          </IconButton>
        </div>
      </Container>
        
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

        <Button href="/">
          <Typography 
            variant="h3"
            color="inherit" 
            fontStyle= "Inter"  
            fontWeight= "800"
            position= 'center' 
            sx={{color:'#FECD93'}}
          >
            IGE MOJI
          </Typography>
        </Button>

        <Typography 
          variant="h5" 
          fontStyle= "Inter"  
          fontWeight= "600"
          position= 'center'
        > 
          Sign Up 
        </Typography>
        <Boxs component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <FormControl component="fieldset" variant="standard">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  autoFocus
                  fullWidth
                  type="email"
                  id="email"
                  name="email"
                  label="Email"
                  error={emailError !== '' || false}
                  onChange={textOnChange}
                />
              </Grid>
              <FormHelperTexts>{emailError}</FormHelperTexts>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="password"
                  id="password"
                  name="password"
                  label="Password(숫자+영문자+특수문자 8자리 이상)"
                  error={passwordState !== '' || false}
                  onChange={textOnChange}
                />
              </Grid>
              <FormHelperTexts>{passwordState}</FormHelperTexts>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="password"
                  id="rePassword"
                  name="rePassword"
                  label="Check Your Password "
                  error={passwordError !== '' || false}
                />
              </Grid>
              <FormHelperTexts>{passwordError}</FormHelperTexts>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="alias"
                  name="Nickname"
                  label="Nickname"
                  error={aliasError !== '' || false}
                  onChange={textOnChange}
                />
              </Grid>
              <FormHelperTexts>{aliasError}</FormHelperTexts>
            </Grid>
      
          
            <Button 
          value="Upload"
          type="submit"
          fullWidth
          variant="contained"
          size="large" 
          alias= 'signup' 
          sx={{ mt: 3, 
          mb: 2, 
          color:'white', 
          bgcolor: '#FECD93'}}
          onClick={() => {
            submitOnClick();}}
        >
          Signup
        </Button>
        { 
          email&&
          password &&
          password === password &&
          alias === true
          ? <Modal
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
            >
				<Box sx={style}>
      <div>
      <Dialog open={open} onClose={handleClose}>
        <div style={{textAlign: 'right'}}>
          <IconButton href="/">
            <CloseIcon fontWeight='300'/>
          </IconButton>
        </div>
        <DialogTitle>
          <Typography variant="h5"
          color="inherit" 
          fontStyle= "Inter"  
          fontWeight= "800"
          align="center" 
          sx={{color:'#FECD93'}}>IGE MOJI</Typography></DialogTitle>
          <DialogContent>
            <Grid>
              <Typography variant="body1" 
                align="center" 
                sx={{ height: '20vh', 
                mt:'30%', 
                position: 'static', 
                fontWeight: '900', 
                fontStyle:'Inter',}}> IGE MOJI에 정상 가입되었습니다.</Typography>
            </Grid>

            <Grid>
              <Typography variant="body2" 
              align="center" 
              sx={{mt:'-30%',
              height:'15vh', 
              position: 'static', 
              fontWeight: '100', 
              fontStyle:'Inter',}}> IGE MOJI의 회원이 된 것을  환영합니다.<br/>
              자신의 표정을 이모지로 만들어보아요.</Typography>
            </Grid>

            <Button type='submit'
            fullWidth 
            variant= "contained" 
            color="inherit" 
            size="large" 
            sx={{ mt:3, 
              color:'white', 
              bgcolor: '#FECD93'}} 
              href="/loginpage" >로그인 바로가기</Button>
          </DialogContent>

          <DialogActions>
          </DialogActions>
                
        </Dialog>
      </div>
      </Box>
            </Modal>
          : null
            }
      </FormControl>
      </Boxs>
      </Box>
      </Container>
    </ThemeProvider>
  );
};