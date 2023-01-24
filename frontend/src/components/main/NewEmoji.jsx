import React, {useRef, useState} from 'react';
import apiClient from '../../Api';
import axios from 'axios';

function NewEmoji() {
    const emoji_name = useRef(null);
    const emoji_profile = useRef(null);
    const emoji_angry = useRef(null);
    const emoji_disgust = useRef(null);
    const emoji_fear = useRef(null);
    const emoji_happy = useRef(null);
    const emoji_sad = useRef(null);
    const emoji_surprised = useRef(null);

    const [emojiPost, setEmojiPost] = useState(null);

    const formatResponse = (res) => {
        return JSON.stringify(res, null, 2);
    };

    async function postData(){
        const postData = {
            user_id: 1,
            name: emoji_name.current.value,
            kind: 1,
            image: {profile: emoji_profile.current.value}
            // {
            //     profile: emoji_profile.current.value,
            //     angry: emoji_angry.current.value,
            //     disgust: emoji_disgust.current.value,
            //     fear: emoji_fear.current.value,
            //     happy: emoji_happy.current.value,
            //     sad: emoji_sad.current.value,
            //     surprised: emoji_surprised.current.value,
            // }
        };
        try{
            const res = await axios.post("/api/v1/emojis/", postData, {
                headers: {
                    "x-access-token": "token-value",
                },
            });

            const result = {
                status: res.status + "-" + res.statusText,
                headers: res.headers,
                data: res.data,
            };

            setEmojiPost(formatResponse(result));
        }catch(err){
            setEmojiPost(formatResponse(err.response?.data||err));
        }
    }
    return (
        <>
            <input type="text" ref={emoji_name} placeholder="emoji name"/>
            <input type="text" ref={emoji_profile} placeholder="emoji profile"/>
            <input type="text" ref={emoji_angry} placeholder="emoji angry"/>
            <input type="text" ref={emoji_disgust} placeholder="emoji disgust"/>
            <input type="text" ref={emoji_fear} placeholder="emoji fear"/>
            <input type="text" ref={emoji_happy} placeholder="emoji happy"/>
            <input type="text" ref={emoji_sad} placeholder="emoji sad"/>
            <input type="text" ref={emoji_surprised} placeholder="emoji surprised"/>
            <button onClick={postData}>Post Data</button>
            <br/>
            {emojiPost}
        </>
    )
}

export default NewEmoji;