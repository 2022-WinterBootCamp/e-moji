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
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


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

const formSchema = yup.object({
  email: yup
    .string()
    .required('이메일을 입력해주세요')
    .email('이메일 형식이 아닙니다.'),
  password: yup
    .string()
    .required('영문, 숫자포함 8자리를 입력해주세요.')
    .min(8, '최소 8자 이상 가능합니다')
    .max(15, '최대 15자 까지만 가능합니다')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/,
      '영문 숫자포함 8자리를 입력해주세요.'
    ),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], '비밀번호가 다릅니다.'),
    name: yup.string().required('필수 입력값입니다'),
})
.required();

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
  mode: 'onChange',
  resolver: yupResolver(formSchema),
});

const onSubmit = (data) => console.log(data);

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
     <br/>
     <form onSubmit={handleSubmit(onSubmit)}>
     <TextField label="Email" autoFocus  required sx={{ mt:3, width:500}}name="email" placeholder="Email" {...register('email')}/> 
        {errors.email && <p>{errors.email.message}</p>}
        <br/>
        <TextField label="Password" required sx={{ mt:3, width:500}}
          type="password"
          name="password"
          placeholder="비밀번호"
          {...register('password')}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <br/>
        <TextField label="Check Your Password" required  sx={{mt:3, width:500}} 
          type="password"
          name="Check Your Password"
          placeholder="비밀번호 확인"
          {...register('passwordConfirm')}/> 
        {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
        <br/>
       <TextField label="Nickname" required
       sx={{ mt:3, width:500}}
        type="name"
        name="Nickname"
        placeholder='닉네임'
        {...register('Nickname')}/> 
        {errors.Nickname && <p>{errors.Nickname.message}</p>}
      <br/>
       <Button type='submit' name= 'signup' variant= "contained" color="inherit" size="" sx={{ mt:5, color:'white',
    bgcolor: '#FECD93', width:500 }} onClick={handleClick} >Signup</Button> </form>
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