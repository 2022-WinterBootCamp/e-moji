import React from'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import back from './img/back.1.png';

export default function FirstPage() {
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
     <Box> <img src={back} /></Box>

      <Box sx={{
         width: '100%',
         height: '100%',
         position: 'absolute',
         left: 0,
         backgroundColor: '#FECD93',
       }}>
        </Box>
       
      <Grid container>
       <Box sx={{
        bgcolor: 'white', height: '50vh',
        position: 'absolute',
        top: '25%',
        right: '30%',
        left: '30%',
        borderRadius: '45px',
      }}
    > 
   <ThemeProvider theme={theme}>
      <Button variant= "contained" color="inherit" size="large" sx={{top: "40%", marginLeft: "25%", color:'white',
       right: '30%',
       left: '30%', 
       bgcolor: '#FECD93'}} href="/LoginPage" >Click me!</Button>
    <Grid container>
    <Grid item xs={2}>
      <Typography variant="subtitle1" sx={{top:"15%", marginLeft: "-20%", height: '50vh',
        position: 'absolute',
        right: '30%',
        left: '30%',}}>IGE <br/>MOJI</Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography sx={{mt:"35%", marginLeft: "30%",
        right: '30%',
        left: '30%',}}>지금 당신의 기분이 어떠신가요?<br/>
       거울 속 당신의 표정을 이모지로 만들어 드립니다.</Typography>
       </Grid>
       </Grid>
     </ThemeProvider>
 
  
   </Box>
   
   </Grid> 
   </Container>
  );}