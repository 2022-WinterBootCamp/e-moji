import React from'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBack from '@mui/icons-material/ArrowBack';

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

const handleClick = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};
return(

<Container fixed>
<Container component="main" maxWidth="s">

         <div style={{textAlign: 'left'}}>
           <IconButton href="/LoginPage">
             <ArrowBack fontWeight='300'/>
           </IconButton>
         </div>
   
         <Box sx={{
    display: 'flex',
  flexDirection:'column',
alignItems:'center',}}>
    <Button href="/">
   <Typography variant="h3"color="inherit" fontStyle= "Inter"  fontWeight= "800"
     position= 'center' sx={{color:'#FECD93'}}>IGE MOJI</Typography></Button>
   <Typography variant="h5" fontStyle= "Inter"  fontWeight= "600"
     position= 'center'> Sign Up </Typography>

       <TextField label="Email" autoFocus  required sx={{ mt:3, width:500}}/> <br/>
       <TextField label="Password" type="password" required sx={{ mt:3, width:500}} />
       <br/>
       <TextField label="Check Your Password" required type="password" sx={{mt:3, width:500}} /> <br/>
       <TextField label="Nickname" required autoComplete="email"
       sx={{ mt:3, width:500}} />
       <Button type='submit' variant= "contained" color="inherit" size="" sx={{ mt:5, color:'white',
    bgcolor: '#FECD93', width:500 }} onClick={handleClick}>Sign Up</Button>
    </Box>
    
    <div>
      <Dialog open={open} onClose={handleClose}>
      <div style={{textAlign: 'right'}}>
           <IconButton href="/">
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
       bgcolor: '#FECD93'}}  href="/LoginPage" >로그인 바로가기</Button>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
      </div>
    </Container>
    </Container>
  
);}