import React from 'react';
import {
  Modal,
  Box,
  Typography,
  IconButton,
} from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import TopEmoji from './TopEmoji';

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

export default function TopEmojiModal({open_top, handleClose_top, setOpen_top}) {
  return (
    <Box>
        <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        open={open_top}
        onClose={handleClose_top}
        closeAfterTransition
      >
        <Box
          sx={newEmojistyle}
          style={{ backgroundColor: "#FFFFFF", borderColor: "#FEDE29", borderWidth: 'thick', border: 'inset #FECD93',}}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            fontWeight="bold"
            component="h2"
            sx={{ mb: 3, color: "#737458", fontFamily: "Itim" }}
          >
            <div style={{ textAlign: "right" }}>
              <IconButton onClick={() => setOpen_top(false)}>
                <CloseIcon fontWeight="300" />
              </IconButton>
            </div>
            <TopEmoji />
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}