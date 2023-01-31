import React, { useState, useEffect } from 'react';
import {
  Button, 
  Divider, 
  Toolbar,
  Typography,
  Box,
  TextField,
  Modal,
  IconButton,
} from '@mui/material';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CheckPage({emojiId}) {
  const [emojiData, setEmojiData] = useState({});
  const [emojiState, setEmojiState] = useState(false);

  async function handleSubmit() {
    console.log('emojiId>>> ', emojiId);
    try{
      await axios({
        method: "GET",
        url: `/api/v1/emojis/${emojiId}`,
      })
      .then ((response) => {
        console.log("response.data >>", response.data);
        setEmojiData(response.data);
        setEmojiState(true);
      })
    } catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div>
      {
        emojiState === true ?
        <form>
        <Toolbar style={{marginLeft: '50px', marginTop: '-10px'}}>
          <Typography
              fontStyle='solid'
              fontSize='20px'
              sx={{ml: 3}}
          >
              이모지 이름
          </Typography>
          <TextField
            disabled
            id="outlined-required"
            size="small"
            sx={{ml: 3, width: 270}}
            value={emojiData.name} 
          />
        </Toolbar>
        
        <Toolbar style={{marginLeft: '50px'}}>
          <Typography
              fontStyle='solid'
              fontSize='20px'
              sx={{ml: 3, mt: -2, mr: 3}}
          >
              프로필 사진
          </Typography>
          <img style={{height: '140px', width: '270px', borderRadius: '15px'}} src={emojiData.image[0]}/>
        </Toolbar>

        <Divider color="#FECD93" sx={{mt: '10px'}}/>

        <Toolbar style={{marginLeft: '-53px'}}>
          <Box style={{width: '210px', margin: '10px'}}>
            <Typography style={{textAlign: 'center'}}>
                화남 😡
            </Typography>
            <img style={{height: '140px', width: '210px', borderRadius: '15px'}} src={emojiData.image[1]} />
          </Box>

          <Box style={{width: '210px', margin: '10px'}}>
            <Typography style={{textAlign: 'center'}}>
                혐오 🤢
            </Typography>
            <img style={{height: '140px', width: '210px', borderRadius: '15px'}} src={emojiData.image[2]}/>
          </Box>

          <Box style={{width: '210px', margin: '10px'}}>
            <Typography style={{textAlign: 'center'}}>
                두려움 😬
            </Typography>
            <img style={{height: '140px', width: '210px', borderRadius: '15px'}} src={emojiData.image[3]}/>
          </Box>
        </Toolbar>
        <Toolbar style={{marginLeft: '-53px', marginTop: '-10px'}}>
          <Box style={{width: '210px', margin: '10px'}}>
            <Typography style={{textAlign: 'center'}}>
                기쁨 😁
            </Typography>
            <img style={{height: '140px', width: '210px', borderRadius: '15px'}} src={emojiData.image[4]} />
          </Box>
          <Box style={{width: '210px', margin: '10px'}}>
            <Typography style={{textAlign: 'center'}}>
                슬픔 😭
            </Typography>
            <img style={{height: '140px', width: '210px', borderRadius: '15px'}} src={emojiData.image[5]} />
          </Box>
          <Box style={{width: '210px', margin: '10px'}}>
            <Typography style={{textAlign: 'center'}}>
                놀람 🫢
            </Typography>
            <img style={{height: '140px', width: '210px', borderRadius: '15px'}}  src={emojiData.image[6]}/>
          </Box>
        </Toolbar>

        <Divider color="#FECD93" />

        <div style={{marginTop: '20px'}}>
          <Button style={{textAlign: 'center', position: 'absolute', bottom: '25px', right: '5%', width: '200px', }}
            variant="contained"
            sx={{
              bgcolor: "red",
              ':hover':{
                  bgcolor: "red",
              }, borderRadius: '30px',
          }}>
            <DeleteIcon/>
            이모지 삭제하기
          </Button>
        </div>
        </form>
        : null
      }
      
    </div>
  )
}