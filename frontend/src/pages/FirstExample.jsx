import React from 'react';
import {
    Box,
    CssBaseline,
    Typography,
    Stack,
    Button,
    Toolbar,
} from '@mui/material';
import "../font/font.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Lottie from "lottie-react";
import animationData from "../lotties/first_emoji.json";

const theme = createTheme();

export default function FirstExample() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            bgcolor: '#fede29',
            pt: 8,
            pb: 6,
            height: 800,
            marginTop: 8
          }}
        >
            <Box style={{float: 'left', marginLeft: 50}}>
                <Typography variant="h4" align="left" color="text.secondary" style={{marginTop: 150, marginLeft: 30}} paragraph>
                    이모지 변환 플랫폼, IGE MOJI
                </Typography>
                <Toolbar>
                    <Typography
                        component="h1"
                        variant="h1"
                        align="left"
                        color="text.primary"
                        gutterBottom
                        fontFamily= 'cookierun-black'
                        style={{marginTop: -120}}
                    >
                        지금 <br/>당신의 표정은?
                    </Typography>
                    <Lottie
                        animationData={animationData}
                        style={{ height: "500px", marginLeft: 400, marginTop: -150}}
                    />
                </Toolbar>
                <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="left"
                    style={{marginTop: -130, marginLeft: 30}}
                >
                    <Button variant="contained" style={{backgroundColor: 'black', borderRadius: 30, fontSize: 20, fontWeight: 'bold'}}>이모지 하러 가기</Button>
                    <Button href="/video" variant="outlined" style={{color: 'black',borderRadius: 30, fontSize: 20, borderColor: 'black'}}>사용법 보러 가기</Button>
                </Stack>
            </Box>
        </Box>
    </ThemeProvider>
  )
}