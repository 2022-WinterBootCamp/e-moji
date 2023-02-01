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

import { motion } from 'framer-motion';

import { useMediaQuery } from 'react-responsive';

const variants ={
  hidden: {opacity: 0},
  visible: {opacity: 1},
  
}

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1099 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1098 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
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
       <Desktop>
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
          initial= 'visible'
          animate= 'hidden'
          transition={{ duration: 3, times: [0,1, 0, 0, 0]}}
          variants= {variants}>
          <Box 
          sx={{ 
            position: 'absolute',
            top: '0%',
            left: '30%',
           
        }}>
          <img src={sim} /> 
          </Box>

        <Box
            color= 'inherit' 
            size= 'large'
            position= 'absolute' 
            sx={{
            bgcolor: '#FECD93',
            mt: '9%',
            left: '32%'}
            }>
          <img src={simH} /> 
          </Box>
          </motion.div>

          <motion.div
          initial={{ opacity: 1}}
          animate={{ opacity: 1,  scale: [1 ,1, 1, 1, 1], y:[0,-150]}}
          transition={{
            duration: 0.8,
            delay:3,
            ease: [0, 0.71, 0.2, 1.01]
          }}>

          <Box 
          sx={{ 
            position: 'absolute',
            top: '28%',
            left: '30%',
        }}>
          <img src={cam} />
          </Box>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, y:150}}
          animate={{ opacity: 1, y: 200}}
          transition= {{ delay: 4 , duration: 3, times: [0, 1, 1,0]
          }}>
        
         <Box 
          sx={{ 
            position: 'absolute',
            top: '-30%',
            left: '33%',
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
          }}>

         <Box 
          sx={{ 
            position: 'absolute',
            top: '5%',
            left: '6%',
           }}>
          <img src={logo} />
          </Box>

          <Box 
          sx={{ 
            position: 'absolute',
            top: '73%',
            left: '6%',
            }}>
          <img src={logo_1} />
          </Box>
    

        <ThemeProvider theme={theme}>
          <Grid container>
              <Box 
              sx={{ 
                position: 'absolute',
                top: '28%',
                left: '6%',
                }}>
                  <img src={smile_1} />
                  </Box>

          <Box 
          sx={{ 
            position: 'absolute',
            top: '33%',
            left: '33%',
            }}>
          <img src={sad} />
          </Box>


          <Box 
          sx={{ 
            position: 'absolute',
            top: '30%',
            left: '70%',
           }}>
          <img src={angry} />
          </Box>

          <Button 
            variant= 'contained' 
            color= 'inherit' 
            size= 'large' 
            position= 'absolute' 
            sx={{
            marginLeft: '14%', 
            mt:'85%',
            color:'white',
            right: '28%',
            left: '21%', 
            bgcolor: '#FECD93'
            }} 
            href='/LoginPage' 
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
              <img src={light} /> 
              </Box>
              </motion.div>
          </Box>
          </Desktop>

        <Tablet>
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
          initial= 'visible'
          animate= 'hidden'
            transition={{ duration: 3, times: [0,1, 0, 0, 0]}}
            variants= {variants}>
          
          <Box 
          sx={{ 
            position: 'absolute',
            top: '0%',
            left: '15%',
            }}>
          <img src={sim} /> 
          </Box>
          
          <Box
            color='inherit' 
            size='large' 
            position= 'absolute' 
            sx={{
              bgcolor: '#FECD93',
              mt:'13%',
              left: '18%'
            }}>
          <img src={simH} /> 
          </Box>
          </motion.div>
          
          <motion.div
          initial={{ opacity: 1}}
          animate={{ opacity: 1,  scale: [1 ,1, 1, 1, 1], y:[0,-150]}}
          transition={{
            duration: 0.8,
            delay:3,
            ease: [0, 0.71, 0.2, 1.01]
          }}>

          <Box 
          sx={{ 
            position: 'absolute',
            top: '28%',
            left: '15%',
           }}>
          <img src={cam} />
          </Box>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, y:150}}
          animate={{ opacity: 1, y: 200}}
          transition= {{ delay: 4 , duration: 3, times: [0, 1, 1,0]
          }}>
        
         <Box 
          sx={{ 
            position: 'absolute',
            top: '-30%',
            left: '20%',
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
          }}>

         <Box 
          sx={{ 
            position: 'absolute',
            top: '5%',
            left: '6%',
            }}>
            <img src={logo} />
            </Box>
          
          <Box 
          sx={{ 
            position: 'absolute',
            top: '73%',
            left: '6%',
            }}>
            <img src={logo_1} />
            </Box>
    

        <ThemeProvider theme={theme}>
          <Grid container>
            <Box 
            sx={{ 
            position: 'absolute',
            top: '28%',
            left: '6%',
            }}>
              <img src={smile_1} />
              </Box>

          <Box 
           sx={{ 
            position: 'absolute',
            top: '33%',
            left: '33%',
            }}>
            <img src={sad} />
            </Box>


          <Box 
          sx={{ 
            position: 'absolute',
            top: '30%',
            left: '70%',
            }}>
           <img src={angry} />
           </Box>

          <Button 
            variant= 'contained' 
            color= 'inherit' 
            size= 'large' 
            position= 'absolute' 
            sx={{
            marginLeft: '14%', 
            mt: '85%',
            color: 'white',
            right: '28%',
            left: '21%', 
            bgcolor: '#FECD93'
            }} 
            href='/LoginPage' 
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
          sx={{
            position: 'absolute',
            top: '30%',
            left: '20%',
            }}>
          <img src={light} /> 
          </Box>
          </motion.div>
          </Box>
          </Tablet>

      <Mobile>
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
           initial= 'visible'
           animate='hidden'
           transition={{ duration: 3, times: [0,1, 0, 0, 0]}}
           variants= {variants}>
        
        <Box 
          sx={{ 
            position: 'absolute',
            top: '0%',
            left: '7%',
            }}>
          <img src={sim} /> 
          </Box>
        
        <Box
          color='inherit' 
          size='large' 
          position= 'absolute' 
          sx={{
           bgcolor: '#FECD93',
           mt:'19%',
           left: '13%'}
            }>
          <img src={simH} /> 
          </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 1}}
            animate={{ opacity: 1,  scale: [1 ,1, 1, 1, 1], y:[0,-150]}}
            transition={{
            duration: 0.8,
            delay:3,
            ease: [0, 0.71, 0.2, 1.01]
          }}>

          <Box 
          sx={{ 
            position: 'absolute',
            top: '28%',
            left: '7%',
           }}>
          <img src={cam} />
          </Box>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, y:150}}
          animate={{ opacity: 1, y: 200}}
          transition= {{ delay: 4 , duration: 3, times: [0, 1, 1,0]
          }}>
        
         <Box 
          sx={{ 
            position: 'absolute',
            top: '-30%',
            left: '14%',
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
              }}>

         <Box 
          sx={{ 
            position: 'absolute',
            top: '5%',
            left: '6%',
            }}>
            <img src={logo} />
            </Box>

          <Box 
          sx={{ 
            position: 'absolute',
            top: '73%',
            left: '6%',
            }}>
            <img src={logo_1} />
            </Box>

        <ThemeProvider theme={theme}>
          <Grid container>
            <Box 
            sx={{ 
              position: 'absolute',
              top: '28%',
              left: '6%',
            }}>
            <img src={smile_1} />
            </Box>

          <Box 
          sx={{ 
            position: 'absolute',
            top: '33%',
            left: '33%',
            }}>
            <img src={sad} />
            </Box>

          <Box 
          sx={{ 
            position: 'absolute',
            top: '30%',
            left: '70%',
            }}>
            <img src={angry} />
            </Box>

          <Button 
            variant= 'contained' 
            color='inherit' 
            size='large' 
            position= 'absolute' 
            sx={{
            marginLeft: '14%', 
            mt:'85%',
            color:'white',
            right: '28%',
            left: '21%', 
            bgcolor: '#FECD93'
            }} 
            href='/LoginPage' 
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
            sx={{
              position: 'absolute',
              top: '30%',
              left: '20%',
              }}>
              <img src={light} /> 
              </Box>
              </motion.div>
              </Box>
              </Mobile>

          </Container>
  );
}