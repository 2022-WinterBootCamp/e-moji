import React from 'react'
import { 
    Box, 
    Typography, 
    Avatar,
} from "@mui/material";
import third from "../img/top3/3rd.png";

export default function TopThird({topEmoji}) {
  return (
    <Box
        width="200px"
        height="220px"
        style={{
        backgroundColor: "#FFFFFF",
        textAlign: "-webkit-center",
        borderRadius: 30,
        marginLeft: "429px",
        marginRight: "auto",
        marginTop: -330,
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
        >
            Top 3
        </Typography>
        <img
            style={{ position: "relative", height: "100px" }}
            src={third}
        />
        <Avatar
            sx={{
            position: "relative",
            height: "70px",
            width: "70px",
            marginTop: -12.5,
            marginBottom: 3.5,
            }}
            src={topEmoji[2].image}
        />
        </Box>
        <Typography variant="h5" style={{ fontWeight: "bold" }}>
            {topEmoji[2].name}
        </Typography>
        <Typography>made by {topEmoji[2].user}</Typography>
    </Box>
  )
}