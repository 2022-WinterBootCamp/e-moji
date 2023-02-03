import React, {useState} from 'react';
import {
    Typography,
    Stack,
    Button,
    Container
} from '@mui/material';
import "../font/font.css";
import Lottie from "lottie-react";
import animationData from "../lotties/first_emoji.json";
import HowToUseModal from '../components/firstpage/HowToUseModal';
import { useMediaQuery } from 'react-responsive'

export default function FirstPage() {
    // 사용법 모달
    const [step, setStep] = useState(0);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setStep(0);
    };

    const Computer = ({ children }) => {
      const isComputer = useMediaQuery({ minWidth: 1581 })
      return isComputer ? children : null
    }
    const Desktop = ({ children }) => {
      const isDesktop = useMediaQuery({ minWidth: 1099, maxWidth: 1580 })
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

  

    return (
        <Container
          style={{
            backgroundColor: "#fede29",
            border: "solid",
            borderColor: "#F7F8E9",
            minWidth: "100%",
            height: "100vh",
          }}
        >
          
          <Computer>
                    <Typography variant="h2" align="left" color="text.secondary" style={{marginTop: 350, marginLeft: 100, fontWeight: 1, fontFamily: 'Itim'}} paragraph>
                        이모지 변환 플랫폼, IGE MOJI
                    </Typography>
                    <Typography
                        align="left"
                        color="text.primary"
                        gutterBottom
                        fontFamily= 'cookierun-black'
                        style={{marginTop: -20, marginLeft: 100, fontSize: 150}}
                    >
                        지금 <br/>당신의 표정은?
                    </Typography>
                    <Stack
                        sx={{ pt: 6, ml: 13, mt: -3 }}
                        direction="row"
                        spacing={2}
                        justifyContent="left"
                    >
                        <Button href="/mainpage" variant="contained" style={{backgroundColor: 'black', borderRadius: 50, fontSize: 35, fontWeight: 'bold'}}>
                            <Typography  style={{fontSize: 35, margin: 20, fontWeight: 'bold'}}>
                                이모지 보러 가기
                            </Typography>
                        </Button>
                        <Button onClick={() => {handleOpen();}} variant="outlined" style={{color: 'black',borderRadius: 50, fontSize: 35, borderColor: 'black'}}>
                            <Typography  style={{fontSize: 35, margin: 20, fontWeight: 'bold'}}>
                                사용법 보러 가기
                            </Typography>
                        </Button>
                    </Stack>
                    <Lottie
                        animationData={animationData}
                        style={{ height: "900px", marginTop: -820, marginLeft: 1300}}
                    />
            <HowToUseModal open={open} handleClose={handleClose} setOpen={setOpen} step={step} setStep={setStep}/>
            </Computer>

          <Desktop>
                    <Typography variant="h4" align="left" color="text.secondary" style={{marginTop: 190, marginLeft: 50}} paragraph>
                        이모지 변환 플랫폼, IGE MOJI
                    </Typography>
                    <Typography
                        component="h1"
                        align="left"
                        color="text.primary"
                        gutterBottom
                        fontFamily= 'cookierun-black'
                        style={{marginTop: 20, marginLeft: 50, fontSize: 80}}
                    >
                        지금 <br/>당신의 표정은?
                    </Typography>
                    <Stack
                        sx={{ pt: 4, ml: 7, mt: 0 }}
                        direction="row"
                        spacing={2}
                        justifyContent="left"
                    >
                        <Button href="/mainpage" variant="contained" style={{backgroundColor: 'black', borderRadius: 30, fontSize: 20, fontWeight: 'bold'}}>이모지 보러 가기</Button>
                        <Button onClick={() => {handleOpen();}} variant="outlined" style={{color: 'black',borderRadius: 30, fontSize: 20, borderColor: 'black'}}>사용법 보러 가기</Button>
                    </Stack>
                    <Lottie
                        animationData={animationData}
                        style={{ height: "500px", marginTop: -450, marginLeft: 800}}
                    />
            <HowToUseModal open={open} handleClose={handleClose} setOpen={setOpen} step={step} setStep={setStep}/>
            </Desktop>

            <Tablet>
            <Typography variant="h5" align="left" color="text.secondary" style={{marginTop: 230, marginLeft: 50}} paragraph>
                        이모지 변환 플랫폼, IGE MOJI
                    </Typography>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="left"
                        color="text.primary"
                        gutterBottom
                        fontFamily= 'cookierun-black'
                        style={{marginTop: 20, marginLeft: 50}}
                    >
                        지금 <br/>당신의 표정은?
                    </Typography>
                    <Stack
                        sx={{ pt: 4, ml: 7, mt: 0 }}
                        direction="row"
                        spacing={2}
                        justifyContent="left"
                    >
                        <Button href="/mainpage" variant="contained" style={{backgroundColor: 'black', borderRadius: 30, fontSize: 15, fontWeight: 'bold'}}>이모지 보러 가기</Button>
                        <Button onClick={() => {handleOpen();}} variant="outlined" style={{color: 'black',borderRadius: 30, fontSize: 15, borderColor: 'black'}}>사용법 보러 가기</Button>
                    </Stack>
                    <Lottie
                        animationData={animationData}
                        style={{ height: "500px", marginTop: -375, marginLeft: 600}}
                    />
            <HowToUseModal open={open} handleClose={handleClose} setOpen={setOpen} step={step} setStep={setStep}/>
            </Tablet>

            <Mobile>
            <Typography variant="h6" align="left" color="text.secondary" style={{marginTop: 230, marginLeft: 50}} paragraph>
                        이모지 변환 플랫폼, IGE MOJI
                    </Typography>
                    <Typography
                        component="h1"
                        variant="h3"
                        align="left"
                        color="text.primary"
                        gutterBottom
                        fontFamily= 'cookierun-black'
                        style={{marginTop: 20, marginLeft: 50}}
                    >
                        지금 <br/>당신의 표정은?
                    </Typography>
                    <Stack
                        sx={{ pt: 4, ml: 7, mt: 0 }}
                        direction="row"
                        spacing={2}
                        justifyContent="left"
                    >
                        <Button href="/mainpage" variant="contained" style={{backgroundColor: 'black', borderRadius: 30, fontSize: 15, fontWeight: 'bold'}}>이모지 보러 가기</Button>
                        <Button onClick={() => {handleOpen();}} variant="outlined" style={{color: 'black',borderRadius: 30, fontSize: 15, borderColor: 'black'}}>사용법 보러 가기</Button>
                    </Stack>
                    <Lottie
                        animationData={animationData}
                        style={{ height: "300px", marginTop: -255, marginLeft: 400}}
                    />
            <HowToUseModal open={open} handleClose={handleClose} setOpen={setOpen} step={step} setStep={setStep}/>
            </Mobile>

            <Phone>
            <Typography variant="h6" align="left" color="text.secondary" style={{marginTop: 230, marginLeft: 50}} paragraph>
                        이모지 변환 플랫폼, IGE MOJI
                    </Typography>
                    <Typography
                        component="h1"
                        variant="h3"
                        align="left"
                        color="text.primary"
                        gutterBottom
                        fontFamily= 'cookierun-black'
                        style={{marginTop: 20, marginLeft: 50}}
                    >
                        지금 <br/>당신의 표정은?
                    </Typography>
                    <Stack
                        sx={{ pt: 4, ml: 7, mt: 0 }}
                        direction="row"
                        spacing={2}
                        justifyContent="left"
                    >
                        <Button href="/mainpage" variant="contained" style={{backgroundColor: 'black', borderRadius: 30, fontSize: 15, fontWeight: 'bold'}}>이모지 보러 가기</Button>
                        <Button onClick={() => {handleOpen();}} variant="outlined" style={{color: 'black',borderRadius: 30, fontSize: 15, borderColor: 'black'}}>사용법 보러 가기</Button>
                    </Stack>
                    <Lottie
                        animationData={animationData}
                        style={{ height: "300px", marginTop: -255, marginLeft: 400}}
                    />
            <HowToUseModal open={open} handleClose={handleClose} setOpen={setOpen} step={step} setStep={setStep}/>
            </Phone>

            
        </Container>
    )
}