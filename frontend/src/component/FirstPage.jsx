import React from'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import back from './img/3.png';

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
     <Box sx={{
         width: '100%',
         height: '115%',
         position: 'center',
         backgroundColor: '#FECD93',
       }}> <img src={back} /></Box>

       
      <Grid container>
       <Box sx={{
        bgcolor: 'white', height: '50vh',
        position: 'absolute',
        top: '23%',
        right: '28.5%',
        left: '20%',
        borderRadius: '70px',
      }}
    > 
    
   <ThemeProvider theme={theme}>
      <Button variant= "contained" color="inherit" size="large" sx={{top: "40%", marginLeft: "35%", color:'white',
       right: '30%',
       left: '30%', 
       bgcolor: '#FECD93'}} href="/LoginPage" >Click me!</Button>
    <Grid container>
    <Grid item xs={2}>
      <Typography variant="subtitle1" sx={{top:"15%", marginLeft: "-10%", height: '50vh',
        position: 'absolute',
        right: '30%',
        left: '30%',}}>IGE <br/>MOJI</Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography sx={{mt:"30%", marginLeft: "45%",
        right: '30%',
        left: '40%',}}>지금 당신의 기분이 어떠신가요?<br/>
       거울 속 당신의 표정을 이모지로 만들어 드립니다.</Typography>
       </Grid>
       </Grid>
     </ThemeProvider>
 
  
   </Box>
   
   </Grid> 
   </Container>
  );}