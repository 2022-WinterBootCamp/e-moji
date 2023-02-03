import React from 'react';
import {
  Modal,
  Box,
  Typography,
  Toolbar,
  IconButton,
} from '@mui/material';
import NewEmoji from './NewEmoji';
import CloseIcon from "@mui/icons-material/Close";
import HelpIcon from '@mui/icons-material/Help';

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

export default function NewEmojiModal({open_new, handleClose_new, setOpen_new}) {
  return (
    <Box>
      <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          open={open_new}
          onClose={handleClose_new}
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
              <Toolbar sx={{ mt: -2 }}>
                <div style={{ width: "120%", textAlign: "right" }}>
                  <Typography
                    component="h1"
                    variant="h5"
                    textAlign="center"
                    color="text.primary"
                    gutterBottom
                    fontStyle="bold"
                    fontFamily="Itim"
                  >
                    이모지 생성
                  </Typography>
                </div>
                <IconButton>
                  <HelpIcon/>
                </IconButton>
                <div style={{ width: "0%", textAlign: "right" }}>
                  <IconButton onClick={() => setOpen_new(false)}>
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