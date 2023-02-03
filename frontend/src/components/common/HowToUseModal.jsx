import React, {useState} from 'react';
import {
  Modal,
  Box,
  IconButton,
} from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";

import ArrowStep from '../firstpage/ArrowStep';
import ChangePage from '../firstpage/ChangePage';
import ChangeTitle from '../firstpage/ChangeTitle';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 650,
  width: 900,
  bgcolor: "#212121",
  border: 'inset #FEDE29',
  borderWidth: 'thick',
  borderRadius: "25px",
  boxShadow: 24,
  p: 4,
};

export default function HowToUseModal({openHow, handleCloseHow, setOpenHow, stepHow, setStepHow}) {
  function resetStep() {
    setStepHow(0);
  }

  function nextStep() {
    setStepHow((stepHow) => stepHow + 1)
  }

  function beforeStep() {
    setStepHow((step) => stepHow - 1)
  }

  return (
    <Modal
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
    open={openHow}
    onClose={handleCloseHow}
    closeAfterTransition
    >
      <Box sx={style}>
          <div style={{ textAlign: "right" }}>
            <IconButton onClick={() => {setOpenHow(false); resetStep();}}>
              <CloseIcon style={{color: '#FFFFFF'}} fontWeight="300" />
            </IconButton>
          </div>
          <ChangeTitle step={stepHow} setStep={setStepHow}/>
          <ChangePage step={stepHow} setStep={setStepHow}/>
          <ArrowStep step={stepHow} beforeStep={beforeStep} nextStep={nextStep}/>
      </Box>
    </Modal>
  )
}