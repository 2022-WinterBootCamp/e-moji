import React from 'react'
import {
    Box,
} from '@mui/material';

import HowToUseStart from './HowToUseStart';
import StepVideo from './StepVideo';

import stepOne from './video/stepOne.mov';
import stepTwo from './video/stepTwo.mov';
import stepThird from './video/stepThird.mov';
import StepFinal from './StepFinal';

export default function ChangePage({step, setStep}) {
  return (
    <Box>
        {
          step === 0
          ? <HowToUseStart step={step} setStep={setStep}/>
          : step === 1
            ? <Box style={{marginLeft: 10, marginTop: -15}}>
                <StepVideo playlist={stepOne}/>
              </Box>
            : step === 2
              ? <Box style={{marginLeft: 10, marginTop: -15}}>
                  <StepVideo playlist={stepTwo}/>
                </Box>
              : step === 3
                ? <Box style={{marginLeft: 10, marginTop: -15}}>
                    <StepVideo playlist={stepThird}/>
                  </Box>
                : step === 4
                  ? <Box style={{marginLeft: 10, marginTop: -15}}>
                      <StepFinal/>
                    </Box>  
                  : null
        }
    </Box>
  )
}