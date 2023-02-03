import React from "react";
import { 
  Box, 
  Button, 
  Container, 
  Typography 
} from "@mui/material";
import "../../font/font.css";
import FileSaver from "file-saver";

export default function UploadResult({emojiResult, setModalWidth}) {

  function place() {
    console.log("[MainPage - UploadResult] 업로드 결과 페이지입니다.")
    console.log("emojiResult>>> ", emojiResult);
    setModalWidth(750)
  }

  function download() {
    FileSaver.saveAs(emojiResult, "IGE_MOJI_.jpg");
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
          fontSize="40px"
          align="center"
          gutterBottom
          fontFamily="cookierun-regular"
          style={{marginTop: -50, marginBottom: -30}}
          alt="random"
        >
          짜잔! <span style={{fontWeight: '900'}}>완성</span>되었습니다~
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
            height: "400px",
            maxwidth: "100%",
            borderRadius: "15px",
            marginLeft: -13,
          }}
          src={emojiResult}
        />
      </div>

      <Button
          sx={{color: "#FBDE2A", backgroundColor: "#896901", "&:hover": {backgroundColor: '#574301'}}}
          style={{
            textAlign: "center",
            position: "absolute",
            bottom: "50px",
            left: "33.5%",
            width: "250px",
            height: "35px",
            borderRadius: "30px",
          }}
          variant="contained"
        >
          <Typography fontFamily="cookierun-regular" style={{marginLeft: 10, marginRight: 10}}>
            마이페이지로 가기
          </Typography>
        </Button>
        <Button
          sx={{color: "#FBDE2A", backgroundColor: "#896901", "&:hover": {backgroundColor: '#574301'}}}
          style={{
            textAlign: "center",
            position: "absolute",
            bottom: "50px",
            left: "33.5%",
            width: "250px",
            height: "35px",
            borderRadius: "30px",
          }}
          variant="contained"
          onClick={() => {download()}}
        >
          <Typography fontFamily="cookierun-regular" style={{marginLeft: 10, marginRight: 10}}>
            파일 저장하기
          </Typography>
        </Button>
    </Box>
  );
}
