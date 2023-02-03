import React, {useState} from 'react';
import {
  Modal,
  Box,
  IconButton,
} from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";

import ArrowStep from './ArrowStep';
import ChangePage from './ChangePage';
import ChangeTitle from './ChangeTitle';

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

export default function HowToUseModal({open, handleClose, setOpen, step, setStep}) {
  function resetStep() {
    setStep(0);
  }

  function nextStep() {
    setStep((step) => step + 1)
    console.log("step>>> ", step)
  }

  function beforeStep() {
    setStep((step) => step - 1)
    console.log("step>>> ", step)
  }

  return (
    <Modal
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
    open={open}
    onClose={handleClose}
    closeAfterTransition
    >
      <Box sx={style}>
          <div style={{ textAlign: "right" }}>
            <IconButton onClick={() => {setOpen(false); resetStep();}}>
              <CloseIcon style={{color: '#FFFFFF'}} fontWeight="300" />
            </IconButton>
          </div>
          <ChangeTitle step={step} setStep={setStep}/>
          <ChangePage step={step} setStep={setStep}/>
          <ArrowStep step={step} beforeStep={beforeStep} nextStep={nextStep}/>
      </Box>
    </Modal>
  )
}