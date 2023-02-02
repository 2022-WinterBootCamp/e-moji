import React, {useState} from 'react';
import {
    Typography,
    Button,
    Box,
    Toolbar,
    Divider,
} from '@mui/material';
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import NewEmojiModal from './NewEmojiModal';
import TopEmojiModal from './TopEmojiModal';

export default function MainToolbar() {
    const [open_new, setOpen_new] = useState(false);
    const [open_top, setOpen_top] = useState(false);
    
    const handleOpen_new = () => setOpen_new(true);
    const handleClose_new = () => setOpen_new(false);
  
    const handleOpen_top = () => setOpen_top(true);
    const handleClose_top = () => setOpen_top(false);
    
    function place() {
        console.log("[MainPage - MainToolbar] 메인페이지에서 메인툴바 컴포넌트입니다.")
    }
    return (
        <Box>
            <Toolbar sx={{ mb: -1 }}>
                {place()}
                <Box style={{ width: "50%", textAlign: "left" }}>
                    <Typography
                        variant="h6"
                        color="text.primary"
                        textAlign="left"
                        fontWeight="700"
                        sx={{ mb: -2 }}
                    >
                        원하시는 이모지를 선택해주세요
                    </Typography>
                </Box>

                <Box style={{ width: "70%", textAlign: "right" }}>
                    <Button
                        variant="contained"
                        style={{
                            backgroundColor: "#e38e8e",
                            marginRight: 20,
                            marginTop: 1,
                        }}
                        onClick={() => {
                        handleOpen_top();
                        }}
                    >
                        <EmojiEventsIcon style={{ bgcolor: "#FECD93", marginTop: -1 }} />
                        <Typography
                        style={{
                            marginLeft: 7,
                            fontWeight: "bold",
                            fontSize: "inherit",
                        }}
                        >
                        Top 3
                        </Typography>
                    </Button>

                    <Button
                        variant="contained"
                        sx={{
                        bgcolor: "#FECD93",
                        ":hover": {
                            bgcolor: "#FECD93",
                        },
                        }}
                        onClick={() => {
                        handleOpen_new();
                        }}
                    >
                        이모지 생성
                    </Button>
                </Box>
                {/* Top 3 Modal */}
                <TopEmojiModal open_top={open_top} handleClose_top={handleClose_top} setOpen_top={setOpen_top}/>
                {/* 이모지 생성 Modal */}
                <NewEmojiModal open_new={open_new} handleClose_new={handleClose_new} setOpen_new={setOpen_new}/>

            </Toolbar>
            <Divider variant="fullWidth" sx={{ mb: 6 }} />
        </Box>
    )
}