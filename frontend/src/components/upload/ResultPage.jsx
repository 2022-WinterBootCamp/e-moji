import React, {useState} from "react";
import { Box, Button, Container, Typography } from "@mui/material";

export default function ResultPage() {
  let inputRef;

  const [image] = useState({
    image_file: "",
    preview_URL:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA1MDNfMTE2%2FMDAxNTU2ODkwMzYyMTUz.Rb3YildousZDOdnH2LyZc0lG-V9y7KFny1KJvVgpKVYg.eAvpjQVu6T1M-49NmOx-aoHJhupAxT_E6POMujp2t9Qg.JPEG.studygir%2FlTIYlTfYY_%25282%2529.jpg&type=sc960_832"
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
            지금 당신의 표정입니다 😁
          </Typography>
        </Container>

        <input
          type="file"
          accept="image/*"
          // 클릭할 때 마다 file input의 value를 초기화 하지 않으면 버그가 발생할 수 있다
          // 사진 등록을 두개 띄우고 첫번째에 사진을 올리고 지우고 두번째에 같은 사진을 올리면 그 값이 남아있음!
          onClick={(e) => (e.target.value = null)}
          ref={(refParam) => (inputRef = refParam)}
          style={{ display: "none"}}
        />
        <div style={{textAlign: 'center'}}>
            <img style={{height: '350px', width: '500px', borderRadius: '15px'}} src={image.preview_URL}/>
        </div>

        <Button style={{textAlign: 'center', position: 'absolute', bottom: '50px', left: '35%', width: '200px'}}
          variant="contained"
          sx={{
            bgcolor: "#FECD93",
            ':hover':{
                bgcolor: '#FECD93',
            },
            borderRadius: '30px',
          }}  
        >
          저장하기
        </Button>
      </Box>
    </center>
  );
}
