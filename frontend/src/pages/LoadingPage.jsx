import React, { useEffect } from 'react';
//import { useNavigate, setTiemout } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../lotties/emoticon';
import {
    Box,
    Container,
    Typography,
} from '@mui/material';

const LoadingPage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };
    
    // // push 사용 위해 usehistory 불러오기
    // const history = useNavigate();

    // // 2초 뒤 채팅 메인으로 넘어가는 함수 작성
    // const timeout = () => {
    //     setTiemout(() => {
    //         useNavigate('/result');
    //     }, 3000);
    // };

    // // 컴포넌트가 화면에 다 나타나면 timeout 함수 실행
    // useEffect(() => {
    //     timeout();
    //     return() => {
    //         // clear 해줌
    //         clearTimeout(timeout);
    //     };
    // });
    
    return (
        <main>
            <Box
                whiteSpace = 'pre-wrap'
                sx={{
                    bgcolor:'background.paper',
                    pt: 8,
                    pb: 6,
                    pointerEvents: 'none',
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant='h4'
                        align='center'
                        color='text.primary'
                        gutterBottom
                        fontStyle='bold'
                        fontFamily='Itim'
                    >
                        AI가 당신의 표정을 분석 중이에요!
                    </Typography>
                    <Typography variant='h6' align='center' color="text.secondary" paragraph>
                            잠시만 기다려주세요...
                    </Typography>
                </Container>
            </Box>
            
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
            />
        </main>
    );
}

export default LoadingPage;