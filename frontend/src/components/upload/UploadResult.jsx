import React from "react";
import { 
  Box, 
  Button, 
  Container, 
  Typography 
} from "@mui/material";

export default function UploadResult({emojiURL}) {
  function place() {
    console.log("[MainPage - UploadResult] 업로드 결과 페이지입니다.")
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
        // 클릭할 때 마다 file input의 value를 초기화 하지 않으면 버그가 발생할 수 있다
        // 사진 등록을 두개 띄우고 첫번째에 사진을 올리고 지우고 두번째에 같은 사진을 올리면 그 값이 남아있음!
        onClick={(e) => (e.target.value = null)}
        // ref={(refParam) => (inputRef = refParam)}
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
          src={emojiURL}
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
