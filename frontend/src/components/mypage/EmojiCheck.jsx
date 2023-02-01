import React, { useState, useEffect } from "react";
import {
  Button,
  Divider,
  Toolbar,
  Typography,
  Box,
  TextField,
  Modal,
  IconButton,
} from "@mui/material";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import MyPage from "../../pages/MyPage";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 300,
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #FFFFFF",
  borderRadius: "25px",
  boxShadow: 24,
  p: 4,
};

export default function EmojiCheck({ emojiId }) {
  const [emojiData, setEmojiData] = useState({});
  const [emojiState, setEmojiState] = useState(false);

  // 이모지 삭제 확인 Modal 창
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  // 이모지 조회 API
  async function handleSubmit() {
    console.log("emojiId>>> ", emojiId);
    try {
      await axios({
        method: "GET",
        url: `/api/v1/emojis/${emojiId}`,
      }).then((response) => {
        console.log("response.data >>", response.data);
        setEmojiData(response.data);
        setEmojiState(true);
      });
    } catch (err) {
      console.log(err);
    }
  }

  // 이모지 삭제 API
  async function handleDelete() {
    try {
      await axios({
        method: "PUT",
        url: `/api/v1/emojis/delete/${emojiId}`,
      }).then((response) => {
        alert("이모지가 성공적으로 삭제되었습니다!");
        console.log("response.data >>", response.data);
      });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div>
      {emojiState === true ? (
        <form>
          <Toolbar style={{ marginLeft: "50px", marginTop: "-10px" }}>
            <Typography fontStyle="solid" fontSize="20px" sx={{ ml: 3 }}>
              이모지 이름
            </Typography>
            <TextField
              disabled
              id="outlined-required"
              size="small"
              sx={{ ml: 3, width: 270 }}
              value={emojiData.name}
            />
          </Toolbar>

          <Toolbar style={{ marginLeft: "50px" }}>
            <Typography
              fontStyle="solid"
              fontSize="20px"
              sx={{ ml: 3, mt: -2, mr: 3 }}
            >
              프로필 사진
            </Typography>
            <img
              style={{ height: "140px", width: "270px", borderRadius: "15px" }}
              src={emojiData.image[0]}
            />
          </Toolbar>

          <Divider color="#FECD93" sx={{ mt: "10px" }} />

          <Toolbar style={{ marginLeft: "-53px" }}>
            <Box style={{ width: "210px", margin: "10px" }}>
              <Typography style={{ textAlign: "center" }}>화남 😡</Typography>
              <img
                style={{
                  height: "140px",
                  width: "210px",
                  borderRadius: "15px",
                }}
                src={emojiData.image[1]}
              />
            </Box>

            <Box style={{ width: "210px", margin: "10px" }}>
              <Typography style={{ textAlign: "center" }}>혐오 🤢</Typography>
              <img
                style={{
                  height: "140px",
                  width: "210px",
                  borderRadius: "15px",
                }}
                src={emojiData.image[2]}
              />
            </Box>

            <Box style={{ width: "210px", margin: "10px" }}>
              <Typography style={{ textAlign: "center" }}>두려움 😬</Typography>
              <img
                style={{
                  height: "140px",
                  width: "210px",
                  borderRadius: "15px",
                }}
                src={emojiData.image[3]}
              />
            </Box>
          </Toolbar>
          <Toolbar style={{ marginLeft: "-53px", marginTop: "-10px" }}>
            <Box style={{ width: "210px", margin: "10px" }}>
              <Typography style={{ textAlign: "center" }}>기쁨 😁</Typography>
              <img
                style={{
                  height: "140px",
                  width: "210px",
                  borderRadius: "15px",
                }}
                src={emojiData.image[4]}
              />
            </Box>
            <Box style={{ width: "210px", margin: "10px" }}>
              <Typography style={{ textAlign: "center" }}>슬픔 😭</Typography>
              <img
                style={{
                  height: "140px",
                  width: "210px",
                  borderRadius: "15px",
                }}
                src={emojiData.image[5]}
              />
            </Box>
            <Box style={{ width: "210px", margin: "10px" }}>
              <Typography style={{ textAlign: "center" }}>놀람 🫢</Typography>
              <img
                style={{
                  height: "140px",
                  width: "210px",
                  borderRadius: "15px",
                }}
                src={emojiData.image[6]}
              />
            </Box>
          </Toolbar>

          <Divider color="#FECD93" />

          <div style={{ marginTop: "20px" }}>
            <Button
              style={{
                textAlign: "center",
                position: "absolute",
                bottom: "25px",
                right: "5%",
                width: "200px",
              }}
              variant="contained"
              sx={{
                bgcolor: "red",
                ":hover": {
                  bgcolor: "red",
                },
                borderRadius: "30px",
              }}
              onClick={() => setOpen(true)}
            >
              <DeleteIcon />
              이모지 삭제하기
            </Button>
          </div>
        </form>
      ) : null}

      {/* 이모지 삭제 확인 Modal 창 */}
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            fontWeight="bold"
            component="h2"
            sx={{ mb: 3, color: "#737458", fontFamily: "Itim" }}
          >
            <Toolbar sx={{ mt: -2 }}>
              <div
                style={{ width: "120%", textAlign: "right", marginBottom: 50 }}
              >
                <Typography
                  component="h1"
                  variant="h5"
                  textAlign="center"
                  color="text.primary"
                  gutterBottom
                  fontStyle="bold"
                  fontFamily="Itim"
                  marginTop="80px"
                >
                  이 이모지를 진짜 삭제하시겠습니까?
                </Typography>
              </div>
            </Toolbar>
          </Typography>
          <Button
            style={{
              textAlign: "center",
              bottom: "15px",
              left: "10%",
              width: "150px",
              height: "30px",
              backgroundColor: "gray",
              color: "#FFFFFF",
              borderColor: "#FECD93",
              borderRadius: "30px",
            }}
            onClick={() => setOpen(false)}
            variant="contained"
          >
            취소
          </Button>
          <Button
            style={{
              textAlign: "center",
              bottom: "15px",
              left: "20%",
              width: "150px",
              height: "30px",
              backgroundColor: "red",
              color: "#FFFFFF",
              borderColor: "#FECD93",
              borderRadius: "30px",
            }}
            variant="contained"
            onClick={handleDelete}
            href="/mypage"
          >
            삭제하기
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
