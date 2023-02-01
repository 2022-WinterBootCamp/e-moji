import React, { useEffect, useState } from "react";
import { 
  Button, 
  Typography,
  Box,
} from "@mui/material";
import axios from "axios";
import { getAccess } from "../../auth/tokenManager";
import { ReduxModule } from "../../auth/ReduxModule";
import Uploading from "./Uploading";

const preview_URL = 'https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif';

export default function Upload({emojiId}) {
  let inputRef;
  const what = getAccess();
  const userIdtoRedux = ReduxModule().decodeInfo?.id;
  const [aiState, setAiState] = useState(0);
  const [taskId, setTaskId] = useState("");
  // const [emojiResult, setEmojiResult] = useState("");

  const [image, setImage] = useState({
    image_file: "",
    preview_URL: preview_URL,
  });

  const saveImage = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      // 새로운 이미지를 올리면 createObjectURL()을 통해 생성한 기존 URL을 폐기
      URL.revokeObjectURL(image.preview_URL);
      const preview_URL = URL.createObjectURL(e.target.files[0]);
      setImage(() => ({
        image_file: e.target.files[0],
        preview_URL: preview_URL,
      }));
    }
  };

  // 사진 업로드 API
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (image.image_file) {
      const formData = new FormData();

      formData.append("user_id", userIdtoRedux);
      formData.append("emoji_id", emojiId);
      formData.append("image", image.image_file);

      setAiState(1)
      
      try {
        await axios({
          method: "POST",
          url: "/api/v1/faces/results/tasks",
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `${what.value}`,
          },
        }).then((response) => {
          console.log("response >> ", response.data);
          setTaskId(response.data.task_id)

          setImage({
            image_file: "",
            preview_URL:
              "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif",
          });
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("사진을 등록하세요!");
    }
  };

  function place() {
    console.log("[MainPage - Upload] 업로드 페이지입니다.")
  }

  useEffect(() => {
    // 컴포넌트가 언마운트되면 createObjectURL()을 통해 생성한 기존 URL을 폐기
    return () => {
      URL.revokeObjectURL(image.preview_URL);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box textAlign="center">
      {place()}
      {
        aiState === 0
        ? <form onSubmit={handleSubmit}>
            <Typography
              component="h1"
              fontSize="2rem"
              align="center"
              color="text.primary"
              gutterBottom
              fontStyle="bold"
              fontFamily="Itim"
              sx={{ mt: 3, mb: 3 }}
            >
              지금 당신의 표정을 넣어주세요!
            </Typography>
            <input
              type="file"
              accept="image/*"
              onChange={saveImage}
              // 클릭할 때 마다 file input의 value를 초기화 하지 않으면 버그가 발생할 수 있다
              // 사진 등록을 두개 띄우고 첫번째에 사진을 올리고 지우고 두번째에 같은 사진을 올리면 그 값이 남아있음!
              onClick={(e) => (e.target.value = null)}
              ref={(refParam) => (inputRef = refParam)}
              style={{ display: "none" }}
            />
            <Box style={{ borderRadius: "15px" }}>
              <Button>
                <img
                  style={{
                    height: "300px",
                    width: "520px",
                    borderRadius: "15px",
                  }}
                  textAlign
                  src={image.preview_URL}
                  onClick={() => inputRef.click()}
                />
              </Button>
            </Box>

            <Button
              style={{
                textAlign: "center",
                position: "absolute",
                bottom: "50px",
                left: "35%",
                width: "200px",
                height: "35px",
                backgroundColor: "#FECD93",
                color: "#FFFFFF",
                borderColor: "#FECD93",
                borderRadius: "30px",
              }}
              variant="contained"
              type="submit"
              value="Upload"
            >
              Upload
            </Button>
          </form>
        : (aiState === 1)
          ? <Uploading taskId={taskId} aiState={aiState}/>
          : null
      }
    </Box>
  );
}