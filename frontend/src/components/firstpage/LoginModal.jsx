import React, {useState} from 'react';
import {
    Modal,
    Box,
    IconButton,
} from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import LoginPage from '../../pages/LoginPage';
import Register from '../../pages/Register';



export default function LoginModal({openLogin, handleCloseLogin, setOpenLogin, stepLogin, setStepLogin}) {
    const [height, setHeight] = useState(600);

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        height: height,
        width: 550,
        bgcolor: "#FFFFFF",
        border: 'inset #FEDE29',
        borderWidth: 'thick',
        borderRadius: "25px",
        boxShadow: 24,
        p: 4,
    };

    function resetStep() {
        setStepLogin(0);
    }
    
    return (
        <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            open={openLogin}
            onClose={handleCloseLogin}
            closeAfterTransition
        >
        <Box sx={style}>
            
            <div style={{ textAlign: "right", marginTop: 0}}>
                <IconButton onClick={() => {setOpenLogin(false); resetStep();}}>
                    <CloseIcon style={{color: '#6a6a6a'}} fontWeight="300" />
                </IconButton>
            </div>
            
            {
                stepLogin === 0
                ? <LoginPage setStepLogin={setStepLogin} setHeight={setHeight}/>
                
                  : stepLogin === 1
                    ? <Box>
                        <IconButton onClick={() => {setStepLogin(0)}} position="absolute" style={{marginTop:-55}}>
                            <ArrowBackIcon style={{color: '#6a6a6a'}} fontWeight="300" />
                        </IconButton>
                        <Register setStepLogin={setStepLogin} setHeight={setHeight}/>
                      </Box>
                    : null
            }
        </Box>
        </Modal>
    )
}