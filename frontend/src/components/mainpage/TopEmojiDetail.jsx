import React from 'react'
import {
    Box,
    Popover,
    Button,
    Typography
} from '@mui/material';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import TopEmojiChart from './TopEmojiChart';
import HelpIcon from '@mui/icons-material/Help';

export default function TopEmojiDetail({emojiTotal}) {
  return (
    <Box>
        <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
                <div>
                    <Button style={{backgroundColor: '#e38e8e', color: '#FFFFFF'}} variant="contained" {...bindTrigger(popupState)}>
                        순위를 자세히 알고싶다면
                        <HelpIcon/>
                    </Button>
                    <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: -50,
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        style={{height: '1000px'}}
                    >
                        <TopEmojiChart emojiTotal={emojiTotal}/>
                    </Popover>
                </div>
            )}
        </PopupState>
    </Box>
  )
}