import React from'react';
import {Button, 
  Box, 
  Container, 
  Grid, 
  createTheme, 
  Typography, 
  TextField} from '@mui/material';

export default function LoginPage() {
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

  return(
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
          sx={{ mt:3, width:500}}/> <br/>

          <TextField label="Password" 
          fullWidth 
          type="password" 
          sx={{ mt:3, width:500}} />
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
            href="/mainpage">sign in</Button>
       
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
         <Button href="/signuppage"> 회원가입</Button> </Typography>
         </Grid>
         </Grid>
         </Box>
  </Container>
  </Container>
  );
}