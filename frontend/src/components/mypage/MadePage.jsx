import React, { useState } from "react";
import {
  Card,
  Grid,
  CardHeader,
  CardMedia,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Modal,
  Typography,
  Button,
} from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CloseIcon from "@mui/icons-material/Close";
import Lottie from "lottie-react";
import animationData from "../../lotties/empty.json";
import CheckPage from "./EmojiCheck";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 750,
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #FFFFFF",
  borderRadius: "25px",
  boxShadow: 24,
  p: 4,
};

export default function MadePage({doneState, emojiData}) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const [emojiId, setEmojiId] = useState(1);

  function place() {
    console.log("[MadePage] 내가 만든 이모지 페이지입니다.")
    console.log("emojiData>> ", emojiData);
  }

  // 내가 만든 이모지 List
  function madeList() {
    var array = [];

    for (let index = 0; index < Object.keys(emojiData).length; index++) {
      array.push(
        <Grid
          item
          key={emojiData[index].id}
          xs={12}
          sm={6}
          md={4}
        >
            <Card 
              onClick={() => {
                setOpen(true);
                setEmojiId(emojiData[index].id);
              }} sx={{borderRadius: 5, ":hover": { cursor: 'pointer',  boxShadow: "gray 0px 3px 3px 2px", }}}>
              <Toolbar>
                  <Box style={{ marginLeft: "-30px" }}>
                    <CardHeader
                      avatar={
                        <Avatar>
                          <EmojiEmotionsIcon />
                        </Avatar>
                      }
                    />
                  </Box>
                  <Typography
                      variant="h6"
                      component="h2"
                      sx={{
                          mt: "-20px",
                          ml: -2,
                          color: "#6a6a6a",
                          fontSize: '18px'
                      }}
                      fontFamily="cookierun-bold"
                  >
                      {emojiData[index].name}
                  </Typography>
                </Toolbar>
                <Typography
                      sx={{
                          color: "#ADADAD",
                          mt: "-34px",
                          mb: "0px",
                          ml: 8.5,
                          fontSize: '16px'
                      }}
                      fontFamily="cookierun-regular"
                  >
                      
                    {emojiData[index].alias}
                </Typography>
              <CardMedia
                component="img"
                height="194"
                image={emojiData[index].image[0]}
              />

            </Card>
          {/* </Button> */}
        </Grid>
      );
    }
    return array;
  }

  return (
    <Box>
      {place()}
      {doneState === true ? (
        <Grid
          container
          spacing={4}
          direction="row"
          justifyContent="space-evenly"
          alignItems="c"
        >
          {madeList()}
        </Grid>
      ) : (
        <Box>
          <Lottie
            animationData={animationData}
            style={{ height: "200px", marginTop: 200 }}
          />
          <Typography textAlign="center" style={{ marginTop: -15, color: "gray"  }}>
            내가 만든 이모지가 존재하지 않습니다.
          </Typography>
        </Box>
      )}

      {/* 이모지 조회 Modal 창 */}
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
            <Toolbar sx={{ mt: -4 }}>
              <Box style={{ width: "120%", textAlign: "right" }}>
                <Typography
                  variant="h5"
                  textAlign="center"
                  color="text.primary"
                  gutterBottom
                  fontStyle="bold"
                  fontFamily="Itim"
                  sx={{ mt: 3 }}
                >
                  이모지 조회
                </Typography>
              </Box>
              <Box style={{ width: "0%", textAlign: "right" }}>
                <IconButton onClick={() => setOpen(false)}>
                  <CloseIcon fontWeight="300" />
                </IconButton>
              </Box>
            </Toolbar>
            {/* 이모지 조회 Page */}
            <CheckPage emojiId={emojiId} />
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
