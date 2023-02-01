import React from 'react'
import { 
    Box, 
    Typography, 
    Avatar,
} from "@mui/material";
import first from "../img/top3/1st.png";

export default function TopFirst({topEmoji}) {
  return (
    <Box
    width="200px"
    height="210px"
    style={{
        backgroundColor: "#FFFFFF",
        textAlign: "-webkit-center",
        borderRadius: 30,
        marginTop: -20,
        marginLeft: "auto",
        marginRight: "auto",
    }}
    >
        <Typography
            style={{
            color: "#FFFFFF",
            fontWeight: "900",
            backgroundColor: "gold",
            width: "70px",
            borderRadius: 10,
            }}
        >
            Top 1
        </Typography>
        <img style={{ position: "relative", height: "110px" }} src={first} />
        <Avatar
            sx={{
            position: "relative",
            height: "70px",
            width: "70px",
            marginTop: -14,
            marginBottom: 5,
            }}
            src={topEmoji[0].image}
        />

        <Typography variant="h5" style={{ fontWeight: "bold" }}>
            {topEmoji[0].name}
        </Typography>
        <Typography>made by {topEmoji[0].user}</Typography>
    </Box>
  )
}