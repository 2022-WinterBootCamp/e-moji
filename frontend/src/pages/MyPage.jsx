import React from "react";
import {
    Box,
    Container,
    Typography,
} from '@mui/material';

export default function MyPage(){
    return(
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
        >
            <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
                <Typography variant="h3" component="h1" gutterBottom>
                    This page is My Page.
                </Typography>
            </Container>
        </Box>
    );
}