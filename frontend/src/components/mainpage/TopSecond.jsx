import React from 'react';
import { 
    Box, 
    Typography, 
    Avatar,
} from "@mui/material";
import second from "../img/top3/2nd.png";

export default function TopSecond({topEmoji}) {
  return (
    <Box
        width="200px"
        height="220px"
        style={{
        backgroundColor: "#FFFFFF",
        textAlign: "-webkit-center",
        borderRadius: 30,
        marginLeft: "auto",
        marginRight: "428px",
        marginTop: -355,
        border: 'inset #FEDE29',
        position: 'absolute', 
        }}
    >
        <Box>
        <Typography
            style={{
            color: "#FFFFFF",
            fontWeight: "900",
            backgroundColor: "#FECD93",
            width: "70px",
            borderRadius: 10,
            marginTop: 10
            }}
            fontFamily="cookierun-regular" 
        >
            Top 2
        </Typography>
        <img
            style={{ position: "relative", height: "100px" }}
            src={second}
        />
        <Avatar
            sx={{
            position: "relative",
            height: "70px",
            width: "70px",
            marginTop: -12.5,
            marginBottom: 3.5,
            }}
            src={topEmoji[1].image}
        />
        </Box>
        <Typography variant="h5" fontFamily="cookierun-regular" color="#6a6a6a" style={{ fontWeight: "bold" }}>
            {topEmoji[1].name}
        </Typography>
        <Typography color="#ADADAD" fontFamily="cookierun-regular" >{topEmoji[1].user}</Typography>
    </Box>
  )
}