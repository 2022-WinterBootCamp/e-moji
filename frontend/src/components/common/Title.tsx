import React from 'react';
import {
    Box,
    Container,
    Typography,
} from '@mui/material';

const Title = () => {
  return (
    <Box
        whiteSpace = 'pre-wrap'
        sx={{
            bgcolor:'background.paper',
            pt: 8,
            pb: 6,
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
                지금 당신의 표정입니다 😁
            </Typography>
        </Container>
    </Box>
  );
}

export default Title;