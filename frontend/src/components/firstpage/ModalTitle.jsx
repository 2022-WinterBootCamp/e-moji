import React from 'react'
import {
    Box,
    Typography,
} from '@mui/material';
import '../../font/font.css';

export default function ModalTitle({title, subTitle}) {
  return (
    <Box style={{marginTop: -30, marginLeft: 40}}>
        <Typography
            variant="h5"
            fontWeight="bold"
            component="h2"
            fontFamily='cookierun-black'
            sx={{ mb: 3, color: "#fede29"}}
        >
            {title}
        </Typography>
        <Typography
            variant="h6"
            fontWeight="bold"
            component="h2"
            fontFamily='cookierun-black'
            sx={{ mb: 3, color: "#FFFFFF", fontFamily: "Itim" }}
            style={{marginTop: -20}}
        >
            {subTitle}
        </Typography>
    </Box>
  )
}