import React from'react';
import { Button, 
  Container, 
  Grid, 
  Box, 
  createTheme, 
  ThemeProvider, 
  Typography} from '@mui/material';
import back from './img/3.png';
import a from './img/5.png';
import front from './img/6.png';
import devill from './img/7.png';
import smile from './img/smile.png';
import b from './img/5.1.png';
import sad from './img/sad.png';
import love from './img/love.png';
import rainbow from './img/rainbow.png';
import happy from './img/6.1.png';

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
    
  <Container>
    
     <Box sx={{
         width: '100%',
         height: '100%',
         position: 'absolute',
         backgroundColor: '#FECD93',
         right: '10%',
         left: '0%',
       }}>  
       
       <Box sx={{ 
        position: 'absolute',
        top: '13%',
        left: '53%',
      }}>
      <img src={happy} /></Box>

       <Box sx={{ 
        position: 'absolute',
        top: '5%',
        left: '45%',
      }}>
      <img src={devill} /></Box>
    
      <Box sx={{ 
        position: 'absolute',
        top: '60%',
        left: '70%',
      }}>
      <img src={a} /></Box> 
      
      <Box sx={{ 
        position: 'absolute',
        top: '0%',
        left: '67%',
      }}>
      <img src={b} /></Box> 
     
      <Box sx={{ 
        position: 'absolute',
        top: '10%',
        left: '28%',
      }}>
      <img src={smile} /></Box> 
      
      <Box sx={{ 
        position: 'absolute',
        top: '65%',
        left: '50%',
      }}>
      <img src={sad} /></Box>
      
      <Box sx={{ 
        position: 'absolute',
        top: '75%',
        left: '45%',
        }}>
      <img src={love} /></Box>
      
      <Box sx={{ 
        position: 'absolute',
        top: '45%',
        left: '22%',
      }}>
      <img src={love} /></Box>
      
      <Box sx={{ 
        position: 'absolute',
        top: '-5%',
        left: '60%',
      }}>
      <img src={rainbow} /></Box>
      </Box>
      
       <Box sx={{
        bgcolor: 'white', 
        height: '60vh', 
        width: '50%',
        position: 'absolute',
        top: '23%',
        right: '28.5%',
        left: '27%',
        borderRadius: '70px',}}
    > 
     
    <Box sx={{ 
        position: 'absolute',
        top: '-39%',
        left: '-17.5%',
      }}>
      <img src={back} /></Box>

      <Box sx={{ 
        position: 'absolute',
        top: '55%',
        left: '-5.5%',      
      }}>
      <img src={front} /> </Box>
    
    
   <ThemeProvider theme={theme}>
    
    <Grid container>
    <Grid item xs={2}>
      <Typography variant="subtitle1" 
      sx={{top:"18%", 
      marginLeft: "-13%", 
      height: '50vh',
      position: 'absolute',
      right: '30%',
      left: '30%',}}>IGE <br/>MOJI</Typography>
      </Grid>
     
      <Grid item xs={10}>
        <Typography sx={{mt:"35%", 
        marginLeft: "35%",
        right: '30%',
        left: '40%',}}>지금 당신의 기분이 어떠신가요?<br/>
       거울 속 당신의 표정을 이모지로 만들어 드립니다.</Typography>
       </Grid>
       </Grid>

       <Button variant= "contained" 
      color="inherit" 
      size="large" 
      position= 'absolute' 
      sx={{top: "-25%", 
      marginLeft: "35%", 
      color:'white',
      right: '30%',
      left: '20%', 
      bgcolor: '#FECD93'}} 
      href="/LoginPage" >Click me!</Button>

     </ThemeProvider>
     
 
   </Box>
   
   </Container>
  );}