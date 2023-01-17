import React from'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import positions from '@mui/system';
import { Checkbox, makeStyles } from '@mui/material';
import { createTheme, ThemeProvider, responsiveFontSizes} from '@mui/material/styles';
import Backdrop from '@mui/material/Backdrop';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

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

   <div>
      <Dialog open={open} onClose={handleClose}>
      <div style={{textAlign: 'right'}}>
              <IconButton onClick={() => setOpen(false)}>
                <CloseIcon fontWeight='300'/>
              </IconButton>
            </div>

      <DialogTitle>
      <Typography variant="h5"color="inherit" fontStyle= "Inter"  fontWeight= "800"
       marginLeft="20%" sx={{color:'#FECD93'}}>IGE MOJI</Typography></DialogTitle>
      <Typography variant="h6" fontStyle= "Inter" fontSize={15} fontWeight= "550" marginLeft="40%"> Login </Typography>
        <DialogContent>
          <TextField label="ID" autoFocus fullWidth /> <br/>
          <TextField label="Password" fullWidth type="password" sx={{ mt:3}} />
          <br/>
          <Button type='submit'fullWidth variant= "contained" color="inherit" size="large" sx={{ mt:3, color:'white',
       bgcolor: '#FECD93' }}>sign in</Button>
       <Grid container>
        <Grid item xs>
        <Typography variant="overline" fontStyle= "Inter"  fontWeight= "550">
          회원이 아니신가요?</Typography>
          </Grid>
          <Grid item>
          <Typography variant="overline" fontStyle= "Inter"  fontWeight= "550">
          <Button>회원가입</Button></Typography>
          </Grid>
        </Grid>
        </DialogContent>
        
        <DialogActions>
        </DialogActions>
      </Dialog>
   
   </div>
  </Container>
  );
}