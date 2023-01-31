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
  const [disable, setDisable] = React.useState(true);
  const [emojiData, setEmojiData] = useState({});

  // const [emoji_name, setEmojiName] = useState("");
  // const [emoji_profile, setEmojiProfile] = useState({
  //   image_file: "",
  //   preview_URL: "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif"
  // });
  // const [emoji_angry, setEmoji_angry] = useState({
  //   image_file: "",
  //   preview_URL: "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif"
  // });
  // const [emoji_disgust, setEmoji_disgust] = useState({
  //   image_file: "",
  //   preview_URL: "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif"
  // });
  // const [emoji_fear, setEmoji_fear] = useState({
  //   image_file: "",
  //   preview_URL: "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif"
  // });
  // const [emoji_happy, setEmoji_happy] = useState({
  //   image_file: "",
  //   preview_URL: "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif"
  // });
  // const [emoji_sad, setEmoji_sad] = useState({
  //   image_file: "",
  //   preview_URL: "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif"
  // });
  // const [emoji_surprised, setEmoji_surpised] = useState({
  //   image_file: "",
  //   preview_URL: "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif"
  // });

  const handleSubmit = async(e) => {
    // e.preventDefault();
    console.log('emojiId>>> ', emojiId);
    try{
      await axios({
        method: "GET",
        url: `/api/v1/emojis/${emojiId}`,
      })
      .then ((response) => {
        console.log("response.data >>", response.data);
        setEmojiData(response.data);
      });
    } catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    // 컴포넌트가 언마운트되면 createObjectURL()을 통해 생성한 기존 URL을 폐기
    handleSubmit();
    console.log('emojiData>>> ', emojiData);
    return () => {
        // URL.revokeObjectURL(emoji_profile.preview_URL);
        // URL.revokeObjectURL(emoji_angry.preview_URL);
        // URL.revokeObjectURL(emoji_disgust.preview_URL);
        // URL.revokeObjectURL(emoji_fear.preview_URL);
        // URL.revokeObjectURL(emoji_happy.preview_URL);
        // URL.revokeObjectURL(emoji_sad.preview_URL);
        // URL.revokeObjectURL(emoji_surprised.preview_URL);
    };
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
            required
            id="outlined-required"
            size="small"
            color="warning"
            sx={{ml: 3, width: 270}}
            type="text" 
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
          <img style={{height: '140px', width: '270px', borderRadius: '15px'}} src={emojiData.image[0]} />
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
            <img style={{height: '140px', width: '210px', borderRadius: '15px'}} src={emojiData.image[2]} />
          </Box>

          <Box style={{width: '210px', margin: '10px'}}>
            <Typography style={{textAlign: 'center'}}>
                두려움 😬
            </Typography>
            <img style={{height: '140px', width: '210px', borderRadius: '15px'}} src={emojiData.image[3]} />
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
            <img style={{height: '140px', width: '210px', borderRadius: '15px'}} src={emojiData.image[6]} />
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
    </div>
  )
}