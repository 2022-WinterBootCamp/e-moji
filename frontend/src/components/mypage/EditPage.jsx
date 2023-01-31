import React, { useState, useEffect } from "react";
import {
  Button,
  Divider,
  Toolbar,
  Typography,
  Box,
  TextField,
  Modal,
} from "@mui/material";
import axios from "axios";
import { getAccess } from "../../auth/tokenManager";
import { ReduxModule } from "../../auth/ReduxModule";

export default function EditPage() {
  const what = getAccess();
  const userIdtoRedux = ReduxModule().decodeInfo?.id;

  let inputRef_profile,
    inputRef_angry,
    inputRef_disgust,
    inputRef_fear,
    inputRef_happy,
    inputRef_sad,
    inputRef_surprised;
  const [disable, setDisable] = React.useState(true);

  const [emoji_name, setEmojiName] = useState("");
  const [emoji_profile, setEmojiProfile] = useState({
    image_file: "",
    preview_URL:
      "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif",
  });
  const [emoji_angry, setEmoji_angry] = useState({
    image_file: "",
    preview_URL:
      "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif",
  });
  const [emoji_disgust, setEmoji_disgust] = useState({
    image_file: "",
    preview_URL:
      "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif",
  });
  const [emoji_fear, setEmoji_fear] = useState({
    image_file: "",
    preview_URL:
      "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif",
  });
  const [emoji_happy, setEmoji_happy] = useState({
    image_file: "",
    preview_URL:
      "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif",
  });
  const [emoji_sad, setEmoji_sad] = useState({
    image_file: "",
    preview_URL:
      "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif",
  });
  const [emoji_surprised, setEmoji_surpised] = useState({
    image_file: "",
    preview_URL:
      "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif",
  });

  const nameOnChange = (e) => {
    setEmojiName(e.target.value);
  };
  const angryOnChange = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      URL.revokeObjectURL(emoji_angry.preview_URL);
      const preview_URL = URL.createObjectURL(e.target.files[0]);
      setEmoji_angry(() => ({
        image_file: e.target.files[0],
        preview_URL: preview_URL,
      }));
    }
  };
  const disgustOnChange = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      URL.revokeObjectURL(emoji_disgust.preview_URL);
      const preview_URL = URL.createObjectURL(e.target.files[0]);
      setEmoji_disgust(() => ({
        image_file: e.target.files[0],
        preview_URL: preview_URL,
      }));
    }
  };
  const fearOnChange = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      URL.revokeObjectURL(emoji_fear.preview_URL);
      const preview_URL = URL.createObjectURL(e.target.files[0]);
      setEmoji_fear(() => ({
        image_file: e.target.files[0],
        preview_URL: preview_URL,
      }));
    }
  };
  const happyOnChange = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      URL.revokeObjectURL(emoji_happy.preview_URL);
      const preview_URL = URL.createObjectURL(e.target.files[0]);
      setEmoji_happy(() => ({
        image_file: e.target.files[0],
        preview_URL: preview_URL,
      }));
    }
  };
  const sadOnChange = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      URL.revokeObjectURL(emoji_sad.preview_URL);
      const preview_URL = URL.createObjectURL(e.target.files[0]);
      setEmoji_sad(() => ({
        image_file: e.target.files[0],
        preview_URL: preview_URL,
      }));
    }
  };
  const surprisedOnChange = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      URL.revokeObjectURL(emoji_surprised.preview_URL);
      const preview_URL = URL.createObjectURL(e.target.files[0]);
      setEmoji_surpised(() => ({
        image_file: e.target.files[0],
        preview_URL: preview_URL,
      }));
    }
  };

  const handleFileOnChange = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      URL.revokeObjectURL(emoji_profile.preview_URL);
      const preview_URL = URL.createObjectURL(e.target.files[0]);
      setEmojiProfile(() => ({
        image_file: e.target.files[0],
        preview_URL: preview_URL,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      emoji_profile.image_file &&
      emoji_angry.image_file &&
      emoji_disgust.image_file &&
      emoji_fear.image_file &&
      emoji_happy.image_file &&
      emoji_sad.image_file &&
      emoji_surprised.image_file
    ) {
      const formData = new FormData();

      formData.append("user_id", userIdtoRedux);
      formData.append("name", emoji_name);
      formData.append("image", emoji_profile.image_file);
      formData.append("image1", emoji_angry.image_file);
      formData.append("image2", emoji_disgust.image_file);
      formData.append("image3", emoji_fear.image_file);
      formData.append("image4", emoji_happy.image_file);
      formData.append("image5", emoji_sad.image_file);
      formData.append("image6", emoji_surprised.image_file);
      try {
        await axios({
          method: "GET",
          url: "/api/v1/emojis/mypage/upload",
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }).then((response) => {
          alert("수정이 완료되었습니다.");
          console.log("Response >>", response.data);
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("모든 사진을 등록해주세요!");
    }
  };

  useEffect(() => {
    // 컴포넌트가 언마운트되면 createObjectURL()을 통해 생성한 기존 URL을 폐기
    return () => {
      URL.revokeObjectURL(emoji_profile.preview_URL);
      URL.revokeObjectURL(emoji_angry.preview_URL);
      URL.revokeObjectURL(emoji_disgust.preview_URL);
      URL.revokeObjectURL(emoji_fear.preview_URL);
      URL.revokeObjectURL(emoji_happy.preview_URL);
      URL.revokeObjectURL(emoji_sad.preview_URL);
      URL.revokeObjectURL(emoji_surprised.preview_URL);
    };
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Toolbar style={{ marginLeft: "50px", marginTop: "-10px" }}>
          <Typography fontStyle="solid" fontSize="20px" sx={{ ml: 3 }}>
            이모지 이름
          </Typography>
          <TextField
            disabled={disable}
            required
            id="outlined-required"
            size="small"
            color="warning"
            sx={{ ml: 3, width: 270 }}
            type="text"
            value={emoji_name}
            onChange={nameOnChange}
            label="이모지 이름을 입력"
          />
        </Toolbar>
        <Toolbar style={{ marginLeft: "50px" }}>
          <Typography
            fontStyle="solid"
            fontSize="20px"
            sx={{ ml: 3, mt: -2, mr: 2 }}
          >
            프로필 사진
          </Typography>
          <input
            type="file"
            onChange={handleFileOnChange}
            onClick={(e) => (e.target.value = null)}
            ref={(refParam) => (inputRef_profile = refParam)}
            style={{ display: "none" }}
          />
          <Button disabled={disable}>
            <img
              style={{ height: "140px", width: "270px", borderRadius: "15px" }}
              src={emoji_profile.preview_URL}
              onClick={() => inputRef_profile.click()}
            />
          </Button>
        </Toolbar>
        <Divider color="#FECD93" sx={{ mt: "10px" }} />

        <Toolbar style={{ marginLeft: "-63px" }}>
          <Box style={{ width: "210px", margin: "10px" }}>
            <Typography style={{ textAlign: "center" }}>화남 😡</Typography>
            <input
              type="file"
              onChange={angryOnChange}
              onClick={(e) => (e.target.value = null)}
              ref={(refParam) => (inputRef_angry = refParam)}
              style={{ display: "none" }}
            />
            <Button disabled={disable}>
              <img
                style={{
                  height: "140px",
                  width: "210px",
                  borderRadius: "15px",
                }}
                src={emoji_angry.preview_URL}
                onClick={() => inputRef_angry.click()}
              />
            </Button>
          </Box>

          <Box style={{ width: "210px", margin: "10px" }}>
            <Typography style={{ textAlign: "center" }}>혐오 🤢</Typography>
            <input
              type="file"
              onChange={disgustOnChange}
              onClick={(e) => (e.target.value = null)}
              ref={(refParam) => (inputRef_disgust = refParam)}
              style={{ display: "none" }}
            />
            <Button disabled={disable}>
              <img
                style={{
                  height: "140px",
                  width: "210px",
                  borderRadius: "15px",
                }}
                src={emoji_disgust.preview_URL}
                onClick={() => inputRef_disgust.click()}
              />
            </Button>
          </Box>

          <Box style={{ width: "210px", margin: "10px" }}>
            <Typography style={{ textAlign: "center" }}>두려움 😬</Typography>
            <input
              type="file"
              onChange={fearOnChange}
              onClick={(e) => (e.target.value = null)}
              ref={(refParam) => (inputRef_fear = refParam)}
              style={{ display: "none" }}
            />
            <Button disabled={disable}>
              <img
                style={{
                  height: "140px",
                  width: "210px",
                  borderRadius: "15px",
                }}
                src={emoji_fear.preview_URL}
                onClick={() => inputRef_fear.click()}
              />
            </Button>
          </Box>
        </Toolbar>
        <Toolbar style={{ marginLeft: "-63px", marginTop: "-10px" }}>
          <Box style={{ width: "210px", margin: "10px" }}>
            <Typography style={{ textAlign: "center" }}>기쁨 😁</Typography>
            <input
              type="file"
              onChange={happyOnChange}
              onClick={(e) => (e.target.value = null)}
              ref={(refParam) => (inputRef_happy = refParam)}
              style={{ display: "none" }}
            />
            <Button disabled={disable}>
              <img
                style={{
                  height: "140px",
                  width: "210px",
                  borderRadius: "15px",
                }}
                src={emoji_happy.preview_URL}
                onClick={() => inputRef_happy.click()}
              />
            </Button>
          </Box>
          <Box style={{ width: "210px", margin: "10px" }}>
            <Typography style={{ textAlign: "center" }}>슬픔 😭</Typography>
            <input
              type="file"
              onChange={sadOnChange}
              onClick={(e) => (e.target.value = null)}
              ref={(refParam) => (inputRef_sad = refParam)}
              style={{ display: "none" }}
            />
            <Button disabled={disable}>
              <img
                style={{
                  height: "140px",
                  width: "210px",
                  borderRadius: "15px",
                }}
                src={emoji_sad.preview_URL}
                onClick={() => inputRef_sad.click()}
              />
            </Button>
          </Box>
          <Box style={{ width: "210px", margin: "10px" }}>
            <Typography style={{ textAlign: "center" }}>놀람 🫢</Typography>
            <input
              type="file"
              onChange={surprisedOnChange}
              onClick={(e) => (e.target.value = null)}
              ref={(refParam) => (inputRef_surprised = refParam)}
              style={{ display: "none" }}
            />
            <Button disabled={disable}>
              <img
                style={{
                  height: "140px",
                  width: "210px",
                  borderRadius: "15px",
                }}
                src={emoji_surprised.preview_URL}
                onClick={() => inputRef_surprised.click()}
              />
            </Button>
          </Box>
        </Toolbar>
        <Divider color="#FECD93" />
        <div style={{ marginTop: "20px" }}>
          <Button
            style={{
              textAlign: "center",
              position: "absolute",
              bottom: "25px",
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
            onClick={() => setDisable(!disable)}
          >
            {disable ? "수정하기" : "수정완료"}
          </Button>
        </div>
      </form>
    </div>
  );
}
