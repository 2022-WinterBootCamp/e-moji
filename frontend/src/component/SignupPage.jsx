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
  ThemeProvider} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBack from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import styled from 'styled-components';

const FormHelperTexts = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700 !important;
  color: #d32f2f !important;
`;

const Boxs = styled(Box)`
  padding-bottom: 40px !important;
`;

const SignupPage = () => {
  const theme = createTheme();
  const [checked, setChecked] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordState, setPasswordState] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const [registerError, setRegisterError] = useState('');


  const handleAgree = (event) => {
    setChecked(event.target.checked);
  };

  const onhandlePost = async (data) => {
    const { email, name, password } = data;
    const postData = { email, name, password };

   //post
    await axios
      .post('/member/join', postData)
      .then(function (response) {
        console.log(response, '성공');
      })
      .catch(function (err) {
        console.log(err);
        setRegisterError('회원가입에 실패하였습니다. 다시한번 확인해 주세요.');
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const joinData = {
      email: data.get('email'),
      name: data.get('name'),
      password: data.get('password'),
      rePassword: data.get('rePassword'),
    };
    const {email, name, password, rePassword } = joinData;

  
    const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!emailRegex.test(email)) {setEmailError('올바른 이메일 형식이 아닙니다.');
   } else {setEmailError('');}

   
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegex.test(password))
      {setPasswordState('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
   } else {setPasswordState('');}

   
    if (password !== rePassword) {setPasswordError('비밀번호가 일치하지 않습니다.');
  }else {setPasswordError('');}

    
    const nameRegex = /^[가-힣a-zA-Z]+$/;
    if (!nameRegex.test(name) || name.length < 1) {setNameError('올바른 닉네임을 입력해주세요.');
  }else {setNameError('');}

  

    if (
      emailRegex.test(email) &&
      passwordRegex.test(password) &&
      password === rePassword &&
      nameRegex.test(name)
    ) {
      onhandlePost(joinData);
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="s">
        <div style={{textAlign: 'left'}}>
           <IconButton href="/LoginPage">
             <ArrowBack fontWeight='300'/>
           </IconButton>
         </div></Container>
         
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

          <Typography variant="h3"
          color="inherit" 
          fontStyle= "Inter"  
          fontWeight= "800"
          position= 'center' 
          sx={{color:'#FECD93'}}>IGE MOJI</Typography></Button>

          <Typography variant="h5" 
          fontStyle= "Inter"  
          fontWeight= "600"
          position= 'center'> Sign Up </Typography>

          <Boxs component="form" 
          noValidate onSubmit={handleSubmit} 
          sx={{ mt: 3 }}>

            <FormControl component="fieldset" 
            variant="standard">

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
                    id="name"
                    name="Nickname"
                    label="Nickname"
                    error={nameError !== '' || false}
                  />
                </Grid>
                <FormHelperTexts>{nameError}</FormHelperTexts>
              </Grid>

              <Button type="submit"
                fullWidth
                variant="contained"
                size="large" 
              name= 'signup' 
              sx={{ mt: 3, 
                mb: 2, 
                color:'white', 
                bgcolor: '#FECD93'}}
                onClick={handleClick} >Signup</Button>
            </FormControl>
            <FormHelperTexts>{registerError}</FormHelperTexts>

          </Boxs>
        </Box>

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
                       href="/LoginPage" >로그인 바로가기</Button>
                        </DialogContent>

                        <DialogActions>
                        </DialogActions>
                        
                        </Dialog>
                         </div>
                         </Container>
                         </ThemeProvider>
                         );
                        };
                        
                        export default SignupPage;
    
