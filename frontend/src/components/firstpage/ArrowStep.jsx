import React from 'react'
import {
    Box,
    IconButton
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export default function ArrowStep({step, beforeStep, nextStep}) {
  return (
    <Box align="center" style={{marginTop: 18}}>
        {
        step === 0 || step === 1
        ? null
        : <IconButton style={{marginRight: 10}} sx={{backgroundColor: "gray", "&:hover": {backgroundColor: '#575555'}}}>
            <NavigateBeforeIcon style={{color: '#FFFFFF'}} onClick={() => {beforeStep()}}/>
          </IconButton>
        }
        {
        step === 0 || step === 4
        ?  null
        : <IconButton style={{marginLeft: 10}} sx={{backgroundColor: "gray", "&:hover": {backgroundColor: '#575555'}}}>
            <NavigateNextIcon style={{color: '#FFFFFF'}} onClick={() => {nextStep()}}/>
          </IconButton>
        }
    </Box>
  )
}