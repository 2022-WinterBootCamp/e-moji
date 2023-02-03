import React from 'react';
import {
  Modal,
  Box,
  Typography,
  Toolbar,
  IconButton,
} from '@mui/material';
import NewEmoji from '../mainpage/NewEmoji';
import CloseIcon from "@mui/icons-material/Close";
import '../../font/font.css';

const newEmojistyle = {
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

export default function NewEmojiModal({openCreate, handleCloseCreate, setOpenCreate}) {
  function place() {
    console.log("이모지 템플렛 모달입니다")
  }
  return (
    <Box>
      <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          open={openCreate}
          onClose={handleCloseCreate}
          closeAfterTransition
        >
          <Box sx={newEmojistyle}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              fontWeight="bold"
              component="h2"
              sx={{ mb: 3, color: "#737458", fontFamily: "Itim" }}
            >
            {place()}
              <Toolbar sx={{ mt: -2 }}>
                <div style={{ width: "120%", textAlign: "right" }}>
                  <Typography
                    component="h1"
                    variant="h4"
                    textAlign="center"
                    color="#6a6a6a"
                    gutterBottom
                    fontStyle="bold"
                    fontFamily="cookierun-regular"
                  >
                    이모지 템플렛 생성
                  </Typography>
                </div>
                <div style={{ width: "0%", textAlign: "right" }}>
                  <IconButton onClick={() => setOpenCreate(false)}>
                    <CloseIcon fontWeight="300" />
                  </IconButton>
                </div>
              </Toolbar>
              <NewEmoji />
            </Typography>
          </Box>
        </Modal>
      </Box>
  )
}