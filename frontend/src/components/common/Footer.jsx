import React from 'react';
import {
    Typography,
    Link,
    Container,
    Box,
    CssBaseline,
} from '@mui/material';

export default function Footer() {
    function Copyright() {
        return (
            <Typography variant="body2" color="text.secondary">
                {'© '}
                <Link color="inherit" underline="none" href="https://mui.com/">
                    IGEMOJI. ALL RIGHTS RESERVED.
                </Link>{' '}
            </Typography>
        );
    }

    return (
        <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            }}
        >
            <CssBaseline />
            <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                    ? theme.palette.grey[200]
                    : theme.palette.grey[800],
            }}
            >
            <Container maxWidth="sm">
                <Typography variant="body1">
                이 페이지는 이모지 변환 플랫폼입니다.
                </Typography>
                <Copyright />
            </Container>
            </Box>
      </Box>
    )
}
