import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import React from'react';
import {
  Container, 
  Grid, 
  createTheme, 
  Typography, 
 } from '@mui/material';

export default function Login() {
    const theme = createTheme({
        typography: {
          subtitle1: {
            fontSize: 72,
            fontWeight: 700,
            fontStyle:'Inter',
            
          },
          body1: {
            fontSize: 15,
            fontWeight: 50,
            fontStyle: 'italic',
          },
          Button: {
            fontStyle: 'italic',
          },
        },
      });

	const [inputInfo, setInputInfo] = useState({
		email: "",
		password: "",
	});
	const [signinResult, setSigninResult] = useState({
		type : "info",
		text : "If you don't have account, press SIGN-UP button!",
	})

	const signInOnClick = async () => {
		const url = "http://localhost:8080/v1/api/users/";
		const response = await axios.post(url, inputInfo);
		if (response.data.includes('Success')) {
			setSigninResult({
				type: "success",
				text: "Sign-in success!"
			})
		} else if(response.data.includes('Fail')) {
			setSigninResult({
				type: "warning",
				text: 'Wrong Email or password. Please try again.',
			})
		}
	};

	const signUpOnClick = async () => {
		window.location.href = "http://localhost:3000";
	};

	const textOnChange = (e) => {
		setInputInfo({
			...inputInfo,
			[e.target.name]: e.target.value,
		});
		setSigninResult({
			type : "info",
			text : "If you don't have account, press SIGN-UP button!",
		})
	};

	// useEffect(() => {
	// 	console.log(signinResult);
	// }, [signinResult]);

	return (
		<Container fixed>
  <Container component="main"
   maxWidth="xs">
    <Box sx={{marginTop: 8,
            display: 'flex',
            flexDirection:'column',
            alignItems:'center',}}>
              <Button href="/">

      <Typography variant="h2"
      color="inherit" 
      fontStyle= "Inter"  
      fontWeight= "800"
      position= 'center' 
      sx={{color:'#FECD93'}} >IGE MOJI</Typography></Button>

      <Typography variant="h4"
      fontStyle= "Inter"  
      fontWeight= "600"
      position= 'center' 
      sx={{mb:5, 
      mt:3}}> Login </Typography>

          <TextField label="Email" 
          autoFocus 
          fullWidth 
          margin='nomal' 
          autoComplete="email"
          sx={{ mt:3, width:500}}
          onChange={textOnChange}/> <br/>

          <TextField label="Password" 
          fullWidth 
          type="password" 
          sx={{ mt:3, width:500}} 
          onChange={textOnChange}/>
          <br/>

          <Button type='submit'
          fullWidth 
          variant= "contained" 
          color="inherit" 
          size="large" 
          sx={{ mt:3, 
            color:'white',
            bgcolor: '#FECD93', 
            width:500}} 
            href="/mainpage"
            onClick={signInOnClick}>sign in</Button>
       
       <Grid container>
        <Grid item xs>
        <Typography variant="overline" 
        fontStyle= "Inter" 
        fontWeight= "550" > 회원이 아니신가요?</Typography>
          </Grid>
          
          <Grid item>  
          <Typography variant="overline" 
          fontStyle= "Inter"  
          fontWeight= "550"> 
         <Button href="/Examplepage"onClick={signUpOnClick}> 회원가입</Button> </Typography>
         </Grid>
         </Grid>
         </Box>
  </Container>
  </Container>
	);
}