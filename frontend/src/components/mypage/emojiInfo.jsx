import React, { useState } from 'react';
import { 
    Button, Typography,
} from '@mui/material';
import axios from 'axios';

export default function emojiInfo() {
    // const [user_id, setUserId] = useState("");
    // const [emoji_name, setEmojiName] = useState("");
    // const [emoji_images, setEmojiImages] = useState([]);

    async function getAllData(){
        try{
            const data = await axios.get(
                "/api/v1/emojis/mypage/upload"
                // {
                //     params: {
                //         number: 'upload'
                // }}
            )
            .then((response) => {
                alert(response);
                console.log(data);
            });
        } catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <Typography>
                이모지 INFO
            </Typography>
            <Button onClick={getAllData}>
                Get All Data
            </Button>
        </div>
    );

    // async function getDataById(){
    //     const id = user_id;

    //     if(id){
    //         try{
    //             const data = await axios.get(

    //             )
    //         }
    //     }
    // }
}