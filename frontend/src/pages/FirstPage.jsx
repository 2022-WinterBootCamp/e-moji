import React from'react';
import { Button, 
  Container, 
  Grid, 
  Box, 
  createTheme, 
  ThemeProvider, 
  Typography} from '@mui/material';
  
import cam from '../components/img/cam.png';
import sim from '../components/img/sim.png';
import simH from '../components/img/simH.png';
import light from '../components/img/light.png';
import film from '../components/img/film.png';
import logo from '../components/img/logo.png';
import logo_1 from '../components/img/logo_1.png';
import smile_1 from '../components/img/smile_1.png';
import sad from '../components/img/sad.png';
import angry from '../components/img/angry.png';

import { motion } from "framer-motion";

const variants ={
  hidden: {opacity: 0},
  visible: {opacity: 1},
  
}


export default function FirstPage() {
  const theme = createTheme({
    typography: {
      subtitle1: {
        fontSize: 72,
        fontWeight: 700,
        fontStyle:'Inter',
        
        
      },
      body1: {
        fontSize: 13,
        fontWeight: 50,
        fontStyle: 'Arial',
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
         top: '0%',
         right: '0%',
         left: '0%',
      }}> 
          <motion.div
          initial= "visible"
          animate="hidden"
            transition={{ duration: 5, times: [0,1, 0, 0, 0]}}
            variants= {variants}>
          <Box 
          sx={{ 
            position: 'absolute',
            top: '0%',
            left: '35%',
           
        }}>
          <img src={sim} /> </Box>
        <Box
            color="inherit" 
            size="large" 
            position= 'absolute' 
            sx={{
              bgcolor: '#FECD93',
            mt:"8%",
            left: '37%'}
            }>
          <img src={simH} /> </Box></motion.div>
          <motion.div
          initial={{ opacity: 1}}
          animate={{ opacity: 1,  scale: [1 ,1, 1, 1, 1], y:[0,-150]}}
          transition={{
            duration: 0.8,
            delay:6,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          >

          <Box 
          sx={{ 
            position: 'absolute',
            top: '28%',
            left: '35%',
        }}>
          <img src={cam} /></Box></motion.div>

          <motion.div
        
        initial={{ opacity: 0, y:150}}
        animate={{ opacity: 1, y: 200}}
          transition= {{ delay: 7 , duration: 6, times: [0, 1, 1,0]}}
          
       
      >
        
         <Box 
          sx={{ 
            position: 'absolute',
            top: '-30%',
            left: '38.5%',
        }}>
      <img src={film}/>
      
      <Box 
        sx={{
          bgcolor: 'white', 
          height: '89%', 
          width: '90%',
          position: 'absolute',
          top: '5%',
          right: '0%',
          left: '5%',
          }}
      >
         <Box 
          sx={{ 
            position: 'absolute',
            top: '5%',
            left: '6%',
        }}>
          <img src={logo} /></Box>
          <Box 
          sx={{ 
            position: 'absolute',
            top: '73%',
            left: '6%',
        }}>
          <img src={logo_1} /></Box>
    

        <ThemeProvider theme={theme}>
          <Grid container>
        
              <Box 
          sx={{ 
            position: 'absolute',
            top: '28%',
            left: '6%',
        }}>
          <img src={smile_1} /></Box>

          <Box 
          sx={{ 
            position: 'absolute',
            top: '33%',
            left: '33%',
        }}>
          <img src={sad} /></Box>


          <Box 
          sx={{ 
            position: 'absolute',
            top: '30%',
            left: '70%',
        }}>
          <img src={angry} /></Box>

          <Button 
            variant= "contained" 
            color="inherit" 
            size="large" 
            position= 'absolute' 
            sx={{
            marginLeft: "14%", 
            mt:"85%",
            color:'white',
            right: '28%',
            left: '21%', 
            bgcolor: '#FECD93'
            }} 
            href="/LoginPage" 
          >Click me!</Button>
          
         
              
            
          </Grid>
          </ThemeProvider>
          
          </Box>
          </Box>
          </motion.div> 

         
          <motion.div
         
          initial={{ opacity: 5, scale: 0.5, y:200, }}
            animate={{opacity: 5, y:300,
            scale: [0, 0, 1, 0, 0],
            rotate: [0, 0, 0, 0, 0]}}
            transition={{ duration: 3, times: [0, 1, 1]}}>
          <Box  
          sx={{position: 'absolute',
            top: '30%',
            left: '20%',
           
        }}>
          <img src={light} /> </Box></motion.div>

       
   
      
          </Box>
          </Container>
    
  );
}