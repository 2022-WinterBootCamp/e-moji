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
import ArrowBack from '@mui/icons-material/ArrowBack';

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
const [isOpen1, setOpen1] = React.useState(false);
const [isOpen2, setOpen2] = React.useState(false);

const handleClick = () => {
  setOpen(true);
};
const handleClick1= () => {
  setOpen1(true);
};
const handleClick2= () => {
    setOpen2(true);
  };

const handleClose = () => {
  setOpen(false);
};
const handleClose1=()=>{
  setOpen1(false);
};
const handleClose2=()=>{
    setOpen2(false);
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
       bgcolor: '#FECD93'}} onClick={handleClick} >Click me!</Button>
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
      <div open={open} onClose={handleClose}>
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
          <Grid item> <Button onClick={handleClick1} >  
          <Typography variant="overline" fontStyle= "Inter"  fontWeight= "550">
         회원가입 </Typography></Button>
         </Grid>
         </Grid>
         </DialogContent>
          <DialogActions>
        </DialogActions>
        </div>
    </div>
    <div>
   <Dialog open={isOpen1} onClose={handleClose1}>
      <div style={{textAlign: 'right'}}>
              <IconButton onClick={() => setOpen1(false)}>
                <IconButton onClick={() => setOpen(false)}>
                <CloseIcon fontWeight='300'/>
              </IconButton></IconButton>
            </div>
            <div style={{textAlign: 'left'}}>
              <IconButton onClick={() => setOpen1(false)}>
                <ArrowBack fontWeight='300'/>
              </IconButton>
            </div>
      
      <DialogTitle>
      <Typography variant="h5"color="inherit" fontStyle= "Inter"  fontWeight= "800"
       marginLeft="30%" sx={{color:'#FECD93'}}>IGE MOJI</Typography></DialogTitle>
      <Typography variant="h6" fontStyle= "Inter" fontSize={15} fontWeight= "550" marginLeft="41%"> Sign Up </Typography>
        <DialogContent>
          <TextField label="ID" autoFocus fullWidth required/> <br/>
          <TextField label="Password" fullWidth type="password" required sx={{ mt:3}} />
          <br/>
          <TextField label="Check Your Password" fullWidth required type="password" sx={{ mt:3}} /> <br/>
          <TextField label="Email" required fullWidth autoComplete="email"
          sx={{ mt:3}} />
          <Button type='submit'fullWidth variant= "contained" color="inherit" size="large" sx={{ mt:3, color:'white',
       bgcolor: '#FECD93' }} onClick={handleClick2}>Sign Up</Button>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
      </div>
      
   <div>
      <Dialog open={isOpen2} onClose={handleClose2}>
        <div style={{textAlign:'right'}}>
              <IconButton onClick={() => setOpen2(false)}>
              <IconButton onClick={() => setOpen1(false)}>
              <IconButton onClick={() => setOpen(false)}>
                <CloseIcon fontWeight='300'/>
              </IconButton></IconButton></IconButton>
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
       bgcolor: '#FECD93'}} onClick={() => setOpen2(false)/setOpen1(false)}>로그인 바로가기</Button>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
      </div>
         </Container>
  );
    }