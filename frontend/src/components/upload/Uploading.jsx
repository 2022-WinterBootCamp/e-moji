import React, { useEffect, useState } from "react";
import { Box, Container, Typography, useStepContext } from "@mui/material";
import Lottie from "lottie-react";
import animationData from "../../lotties/emoticon.json";
import UploadResult from "./UploadResult";

export default function Uploading({ taskId, aiState }) {
  const [emojiResult, setEmojiResult] = useState("");
  const [aiState_result, setAiState_result] = useState(aiState);
  let polling = 0;

  function place() {
    console.log("[MainPage - Uploading] 로딩중입니다.");
    console.log("taskId>>> ", taskId);
  }

  //사진 결과 Api
  async function getResultData() {
    if (polling === "Done") {
      return window.clearInterval(polling);
    }
    try {
      const task_id = taskId;
      console.log("task_id>>> ", task_id);
      fetch(`http://localhost:8080/api/v1/faces/results/tasks/${task_id}`, {
        method: "GET",
      })
        .then((response) => {
          // console.log(response);
          return response.json();
        })
        .then((data) => {
          if (data.ai_result !== "notyet") {
            setAiState_result(2);
            setEmojiResult(data.image);
            console.log("[getResultData]data>>> ", data);
            polling = "Done";
          }
          console.log("[getResultData-로딩중]data>>> ", data);
        });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const polling = window.setInterval(() => getResultData(), 3000);
    return () => {
      window.clearInterval(polling);
    };
  }, [taskId]);

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
      {aiState_result === 1 ? (
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
          <Lottie
            animationData={animationData}
            style={{ height: "350px", marginTop: -25 }}
          />
        </Container>
      ) : aiState_result === 2 ? (
        <UploadResult emojiResult={emojiResult} />
      ) : null}
    </Box>
  );
}
