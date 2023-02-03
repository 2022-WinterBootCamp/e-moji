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

export default function FirstExample() {
    // 사용법 모달
    const [step, setStep] = useState(0);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setStep(0);
    };

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
                    <Typography variant="h4" align="left" color="text.secondary" style={{marginTop: 150}} paragraph>
                        이모지 변환 플랫폼, IGE MOJI
                    </Typography>
                    <Typography
                        component="h1"
                        variant="h1"
                        align="left"
                        color="text.primary"
                        gutterBottom
                        fontFamily= 'cookierun-black'
                        style={{marginTop: 0}}
                    >
                        지금 <br/>당신의 표정은?
                    </Typography>
                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="left"
                        style={{}}
                    >
                        {/* <Button href="/mainpage" variant="contained" style={{backgroundColor: 'black', borderRadius: 30, fontSize: 20, fontWeight: 'bold'}}>이모지 보러 가기</Button>
                        <Button onClick={() => {handleOpen();}} variant="outlined" style={{color: 'black',borderRadius: 30, fontSize: 20, borderColor: 'black'}}>사용법 보러 가기</Button> */}
                        
                        {/* <Button href="/mainpage" variant="contained" style={{backgroundColor: 'black', borderRadius: 30, fontSize: 20, fontWeight: 'bold'}}>이모지 보러 가기</Button> */}
                        <Button onClick={() => {handleOpen();}} variant="contained" style={{backgroundColor: 'black', borderRadius: 30, fontSize: 20, fontWeight: 'bold'}}>사용법 보러 가기</Button>
                        
                    </Stack>
                    <Lottie
                        animationData={animationData}
                        style={{ height: "500px", marginTop: -450, marginLeft: 800}}
                    />
            <HowToUseModal open={open} handleClose={handleClose} setOpen={setOpen} step={step} setStep={setStep}/>
        </Container>
    )
}