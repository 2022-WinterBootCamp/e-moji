import React from "react";
import { 
  Box, 
  Container, 
  Typography 
} from "@mui/material";
import Lottie from "lottie-react";
import animationData from "../../lotties/emoticon.json";


export default function Uploading() {
  function place() {
    console.log("[MainPage - Uploading] 로딩중입니다.")
  }

  return (
    <Box
      whiteSpace="pre-wrap"
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
        mt: -5,
      }}
    >
      {place()}
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
          fontStyle="bold"
          fontFamily="Itim"
        >
          AI가 당신의 표정을 분석 중이에요!
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          paragraph
        >
          잠시만 기다려주세요...
        </Typography>
      </Container>
      <Lottie
        animationData={animationData}
        style={{ height: "350px", marginTop: -25 }}
      />
    </Box>
  );
}
