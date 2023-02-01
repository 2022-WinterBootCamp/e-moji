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
import film_1 from '../components/img/film_1.png';
import film_2 from '../components/img/film_2.png';
import logo from '../components/img/logo.png';
import logo_1 from '../components/img/logo_1.png';
import logo_2 from '../components/img/logo_2.png';
import smile from '../components/img/smile.png';
import smile_1 from '../components/img/smile_1.png';
import smile_2 from '../components/img/smile_2.png';
import sad from '../components/img/sad.png';
import sad_1 from '../components/img/sad_1.png';
import angry from '../components/img/angry.png';
import angry_1 from '../components/img/angry_1.png';
import excited from '../components/img/excited.png';
import excited_1 from '../components/img/excited_1.png';

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
  const isMobile = useMediaQuery({ minWidth: 620, maxWidth: 767 })
  return isMobile ? children : null
}
const Phone =({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 619 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 620 })
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
            left: '35%',
           
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
            left: '35%'}
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
            left: '33%',
        }}>
          <img src={cam} />
          </Box>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, y:150}}
          animate={{ opacity: 1, y: [150,200,50], scale: [0.7 ,0.7, 0.7, 0.7, 1]}}
          transition= {{ delay: 4 , duration: 3, times: [0, 1, 2,0]
          }}>
        
         <Box 
          sx={{ 
            position: 'absolute',
            top: '-30%',
            left: '31%',
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
            left: '17%',
           }}>
          <img src={logo} />
          </Box>

          <Box 
          sx={{ 
            position: 'absolute',
            top: '74%',
            left: '8%',
            }}>
          <img src={logo_1} />
          </Box>
    

        <ThemeProvider theme={theme}>
          <Grid container>
              <Box 
              sx={{ 
                position: 'absolute',
                top: '40%',
                left: '4%',
                }}>
                  <img src={smile} />
                  </Box>

          <Box 
          sx={{ 
            position: 'absolute',
            top: '23%',
            left: '25%',
            }}>
          <img src={sad_1} />
          </Box>


          <Box 
          sx={{ 
            position: 'absolute',
            top: '28%',
            left: '77%',
           }}>
          <img src={angry_1} />
          </Box>

          <Box 
          sx={{ 
            position: 'absolute',
            top: '38%',
            left: '48%',
           }}>
          <img src={excited_1} />
          </Box>

          <Button 
            variant= 'contained' 
            color= 'inherit' 
            size= 'large' 
            position= 'absolute' 
            sx={{
            marginLeft: '18%', 
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
            left: '23%',
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
              left: '26%'
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
            left: '23%',
           }}>
          <img src={cam} />
          </Box>
          </motion.div>

         
          <motion.div
          initial={{ opacity: 0, y:150}}
          animate={{ opacity: 1, y: [150,200,50], scale: [0.7 ,0.7, 0.7, 0.7, 1]}}
          transition= {{ delay: 4 , duration: 3, times: [0, 1, 2,0]
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
            left: '17%',
           }}>
          <img src={logo} />
          </Box>

          <Box 
          sx={{ 
            position: 'absolute',
            top: '74%',
            left: '8%',
            }}>
          <img src={logo_1} />
          </Box>
    

        <ThemeProvider theme={theme}>
          <Grid container>
              <Box 
              sx={{ 
                position: 'absolute',
                top: '40%',
                left: '4%',
                }}>
                  <img src={smile} />
                  </Box>

          <Box 
          sx={{ 
            position: 'absolute',
            top: '23%',
            left: '25%',
            }}>
          <img src={sad_1} />
          </Box>


          <Box 
          sx={{ 
            position: 'absolute',
            top: '28%',
            left: '77%',
           }}>
          <img src={angry_1} />
          </Box>

          <Box 
          sx={{ 
            position: 'absolute',
            top: '38%',
            left: '48%',
           }}>
          <img src={excited_1} />
          </Box>

          <Button 
            variant= 'contained' 
            color= 'inherit' 
            size= 'large' 
            position= 'absolute' 
            sx={{
            marginLeft: '18%', 
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
        
         <Box 
          sx={{ 
            position: 'absolute',
            top: '11%',
            left: '13%',
          }}>
            <img src={film_1}/>
      
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
            left: '15%',
           }}>
          <img src={logo} />
          </Box>

          <Box 
          sx={{ 
            position: 'absolute',
            top: '73%',
            left: '5%',
            }}>
          <img src={logo_1} />
          </Box>
    

        <ThemeProvider theme={theme}>
          <Grid container>
              <Box 
              sx={{ 
                position: 'absolute',
                top: '38%',
                left: '3%',
                }}>
                <img src={smile_2} />
                </Box>

          <Box 
          sx={{ 
            position: 'absolute',
            top: '23%',
            left: '24%',
            }}>
          <img src={sad} />
          </Box>


          <Box 
          sx={{ 
            position: 'absolute',
            top: '30%',
            left: '75%',
           }}>
          <img src={angry} />
          </Box>

          <Box 
          sx={{ 
            position: 'absolute',
            top: '38%',
            left: '47%',
           }}>
          <img src={excited} />
          </Box>
          <Button 
            variant= 'contained' 
            color= 'inherit' 
            size= 'large' 
            position= 'absolute' 
            sx={{
            marginLeft: '18%', 
            mt:'85%',
            color:'white',
            right: '28%',
            left: '20%', 
            bgcolor: '#FECD93'
            }} 
            href='/LoginPage' 
          >Click me!</Button>
         </Grid>
         </ThemeProvider>
         </Box>
         </Box>
         </Box>
         </Mobile>

         
      <Phone>
      <Box sx={{
           width: '100%',
           height: '100%',
           position: 'absolute',
           backgroundColor: '#FECD93',
           top: '0%',
           right: '0%',
           left: '0%',
           }}> 
        
         <Box 
          sx={{ 
            position: 'absolute',
            top: '13%',
            left: '7%',
          }}>
            <img src={film_2}/>
      
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
            left: '10%',
           }}>
          <img src={logo} />
          </Box>

          <Box 
          sx={{ 
            position: 'absolute',
            top: '73%',
            left: '5%',
            }}>
          <img src={logo_2} />
          </Box>
    

        <ThemeProvider theme={theme}>
          <Grid container>
              <Box 
              sx={{ 
                position: 'absolute',
                top: '38%',
                left: '2%',
                }}>
                <img src={smile_1} />
                </Box>

          <Box 
          sx={{ 
            position: 'absolute',
            top: '23%',
            left: '22%',
            }}>
          <img src={sad} />
          </Box>


          <Box 
          sx={{ 
            position: 'absolute',
            top: '30%',
            left: '75%',
           }}>
          <img src={angry} />
          </Box>

          <Box 
          sx={{ 
            position: 'absolute',
            top: '38%',
            left: '46%',
           }}>
          <img src={excited} />
          </Box>
          <Button 
            variant= 'contained' 
            color= 'inherit' 
            size= 'large' 
            position= 'absolute' 
            sx={{
            marginLeft: '18%', 
            mt:'85%',
            color:'white',
            right: '28%',
            left: '20%', 
            bgcolor: '#FECD93'
            }} 
            href='/LoginPage' 
          >Click me!</Button>
         </Grid>
         </ThemeProvider>
         </Box>
         </Box>
         </Box>
         </Phone>
         </Container>
      
  );
}