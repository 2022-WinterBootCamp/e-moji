import React, {useRef, useState} from 'react';
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
        return JSON.stringify(res, null, 4);
    };

    async function postData(){
        const postData = {
            user_id: 1,
            name: emoji_name.current.value,
            image: emoji_profile.current.value,
            image1: emoji_angry.current.value,
            image2: emoji_disgust.current.value,
            image3: emoji_fear.current.value,
            image4: emoji_happy.current.value,
            image5: emoji_sad.current.value,
            image6: emoji_surprised.current.value,
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
            // alert(result.data);
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
    );
}

export default NewEmoji;