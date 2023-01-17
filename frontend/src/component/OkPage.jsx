import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Positions from '@mui/system';
import { createTheme, ThemeProvider, responsiveFontSizes} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


export default function SignupPage() {
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
const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

return(
  <Container fixed>
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
       bgcolor: '#FECD93'}} onClick={handleClickOpen} >Click me!</Button>
    <Grid container>
    <Grid item xs={2}>
      <Typography variant="subtitle1" sx={{top:"15%", marginLeft: "-20%", height: '50vh',
        position: 'absolute',
        right: '30%',
        left: '30%',
       }}>IGE <br/>MOJI</Typography>
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

   
   <div>
      <Dialog open={open} onClose={handleClose}>
        <div style={{textAlign:'right'}}>
              <IconButton onClick={() => setOpen(false)}>
                <CloseIcon fontWeight='300'/>
              </IconButton>
            </div>

      <DialogTitle>
       
      <Typography variant="h5"color="inherit" fontStyle= "Inter"  fontWeight= "800"
       align="center" sx={{color:'#FECD93'}}>IGE MOJI</Typography></DialogTitle>
        <DialogContent>
        <Grid> <Typography variant="body1" align="center" sx={{ height: '20vh', mt:'30%', position: 'static',
        fontWeight: '900',
        fontStyle:'Inter',}}> IGE MOJI에 정상 가입되었습니다.</Typography>
        </Grid>
        <Grid>
        <Typography variant="body2" align="center" sx={{mt:'-30%',height:'15vh', position: 'static',
        fontWeight: '100',
        fontStyle:'Inter',}}>
        IGE MOJI의 회원이 된 것을  환영합니다.<br/>
자신의 표정을 이모지로 만들어보아요.</Typography></Grid>

          <Button type='submit'fullWidth variant= "contained" color="inherit" size="large" sx={{ mt:3, color:'white',
       bgcolor: '#FECD93' }}>로그인 바로가기</Button>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
      </div>
        </Container>
      
);
}