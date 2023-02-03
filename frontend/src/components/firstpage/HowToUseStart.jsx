import React from 'react';
import {
    Box,
    Button,
    Typography,
} from '@mui/material';
import Lottie from "lottie-react";
import animationData from "../../lotties/welcome.json";

export default function howtouseStart({setStep}) {
  return (
    <Box height="500px" position='relative'>
        <Lottie
            animationData={animationData}
            style={{ height: "300px", marginTop: 30}}
        />
        <Button variant='contained' style={{marginTop: 60, marginLeft: 300, borderRadius: 20}}
            sx={{color: "#212121", backgroundColor: "#fede29", "&:hover": {color: "#fede29", backgroundColor: '#000000'}}}>
            <Typography fontSize="25px" fontFamily='cookierun-black' onClick={() => {setStep(1)}}
                style={{marginLeft: 10, marginRight: 10}}>
                사용법 보러 가기
            </Typography>
        </Button>
    </Box>
  )
}