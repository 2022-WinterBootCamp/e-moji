import React from'react';
import Button from '@mui/material/Button';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { createTheme} from '@mui/material/styles';

import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';




export default function LLLPage() {
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
         회원가입 </Typography>
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