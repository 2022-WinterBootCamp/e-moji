import React, { useState } from 'react';
import apiClient from '../../Api';
import {createCookie} from "../../utils";

export default ({history}) => {
    // const baseURL = "localhost:8080/api/v1/emojis/";
    // const previewURL = "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif";

    const [newImoji, setNewImoji] = useState({
        imoji_name: "",
        imoji_profile: "",
        imoji_angry: "",
        image_disgust: "",
        image_fear: "",
        image_happy: "",
        image_sad: "",
        image_surprised: "",
    });
    const [isUpload, setIsUpload] = useState(false);
    // const [errors, setErrors] = useState([]);

    const {imoji_name, imoji_profile, imoji_angry, image_disgust, image_fear, image_happy, image_sad, image_surprised} = newImoji;

    const handleChange = (e) =>
        setNewImoji({...newImoji, [e.target.name] : e.target.value});

    const handleUpload = async(e) => {
        e.preventDefault();
        const {imoji_name, imoji_profile, imoji_angry, image_disgust, image_fear, image_happy, image_sad, image_surprised} = newImoji;

        try{
            setIsUpload(true)
            await fetch(apiClient.newImoji,{
                method: "POST",
                body: JSON.stringify({
                    imoji_name,
                    imoji_profile,
                    imoji_angry,
                    image_disgust,
                    image_fear,
                    image_happy,
                    image_sad,
                    image_surprised,
                }),
                headers: {
                    "Content-type" : "application/json",
                },
            })
            .then(res => res.json())

            // const {token, success, user} = await res.json();
            // if(success){
            //     createCookie("token", token, 0.5);
            //     history.pushState({pathname: '/session', state: user});
            // }
        }finally{
            setIsUpload(false)
        }
    }

    return (
        <form onSubmit={handleUpload}>
            <div>
                <h1>New Imoji</h1>

                <input
                    type="imoji_name"
                    placeholder='imoji_name'
                    value={imoji_name}
                    name="imoji_name"
                    onChange={handleChange}
                    required
                />
                <input
                    type="imoji_profile"
                    placeholder='imoji_profile'
                    value={imoji_profile}
                    name="imoji_profile"
                    onChange={handleChange}
                    required
                />
                <input
                    type="imoji_angry"
                    placeholder='imoji_angry'
                    value={imoji_angry}
                    name="imoji_angry"
                    onChange={handleChange}
                    required
                />
                <input
                    type="image_disgust"
                    placeholder='image_disgust'
                    value={image_disgust}
                    name="image_disgust"
                    onChange={handleChange}
                    required
                />
                <input
                    type="image_fear"
                    placeholder='image_fear'
                    value={image_fear}
                    name="image_fear"
                    onChange={handleChange}
                    required
                />
                <input
                    type="image_happy"
                    placeholder='image_happy'
                    value={image_happy}
                    name="image_happy"
                    onChange={handleChange}
                    required
                />
                <input
                    type="image_sad"
                    placeholder='image_sad'
                    value={image_sad}
                    name="image_sad"
                    onChange={handleChange}
                    required
                />
                <input
                    type="image_surprised"
                    placeholder='image_surprised'
                    value={image_surprised}
                    name="image_surprised"
                    onChange={handleChange}
                    required
                />

                <button disabled={isUpload} type="submit">
                    {isUpload ? "....." : "newImoji"}
                </button>
            </div>
        </form>
    )
}