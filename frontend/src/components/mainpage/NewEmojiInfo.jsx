import React from 'react';
import {
    Popover,
    Typography,
} from '@mui/material';

export default function NewEmojiInfo({open_pop, anchorEl, handlePopoverClose}) {
    return (
        <Popover
            id="mouse-over-popover"
            sx={{pointerEvents: 'none'}}
            open={open_pop}
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'bottom',horizontal: 'left'}}
            transformOrigin={{vertical: 'top',horizontal: 'left'}}
            onClose={handlePopoverClose}
            disableRestoreFocus
        >
            <Typography fontFamily="cookierun-regular" color="#6a6a6a" sx={{ p: 1 }}>이모지 이름과 7개의 사진을 모두 등록해주세요!</Typography>
            <Typography fontFamily="cookierun-regular" color="#6a6a6a" sx={{ p: 1 }}>이모지를 등록해주시면, 다른 사용자가 사진을 이용하여 이모지를 생성할 수 있습니다!</Typography>
        </Popover>
    )
}
