import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import StepFinal from "./ResultPage";

export default function FormTwo() {
  const timeout = () => {
    setTimeout(() => {
      <StepFinal />;
    }, 5000);
  };
  useEffect(() => {
    timeout();

    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <center>
      <Box
        whiteSpace="pre-wrap"
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
          mt: -5,
        }}
      >
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
      </Box>
      {/* <Lottie
            options={defaultOptions}
            height={400}
            width={400}
        /> */}
    </center>
  );
}
