import React from "react";
import { 
  Box, 
  Button, 
  Container, 
  Typography 
} from "@mui/material";

export default function UploadResult({emojiResult}) {

  function place() {
    console.log("[MainPage - UploadResult] 업로드 결과 페이지입니다.")
    console.log("emojiResult>>> ", emojiResult);
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
      <Container maxWidth="sm" style={{marginBottom: 60}}>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          gutterBottom
          fontStyle="bold"
          fontFamily="Itim"
        >
          <span style={{fontWeight: '900'}}>AI</span>가 <span style={{fontWeight: '900'}}>당신의 이모지</span>를 완성하였습니다!
        </Typography>
      </Container>

      <input
        type="file"
        accept="image/*"
        onClick={(e) => (e.target.value = null)}
        style={{ display: "none" }}
      />
      <div style={{ textAlign: "center" }}>
        <img
          style={{
            textAlign: "center",
            height: "300px",
            width: "520px",
            borderRadius: "15px",
          }}
          src={emojiResult}
        />
      </div>

      <Button
        style={{
          textAlign: "center",
          position: "absolute",
          bottom: "50px",
          left: "35%",
          width: "200px",
        }}
        variant="contained"
        sx={{
          bgcolor: "#FECD93",
          ":hover": {
            bgcolor: "#FECD93",
          },
          borderRadius: "30px",
        }}
      >
        저장하기
      </Button>
    </Box>
  );
}
