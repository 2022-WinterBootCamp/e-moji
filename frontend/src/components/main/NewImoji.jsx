import { 
    TextField, 
    Typography,
    Button,
    Toolbar,
    Divider,
    Box
} from '@mui/material';
import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";

import Angry from '../../emoticon/angry.svg';

export default function NewImoji() {
    let inputRef, inputRef_angry, inputRef_disgust, inputRef_fear, inputRef_happy, inputRef_sad, inputRef_surprised;
    const [image, setImage] = useState({
        image_file: "",
        preview_URL:
          "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif"
    });
    const [image_angry, setImage_angry] = useState({
        image_file: "",
        preview_URL:
          "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif"
    });
    const [image_disgust, setImage_disgust] = useState({
        image_file: "",
        preview_URL:
          "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif"
    });
    const [image_fear, setImage_fear] = useState({
        image_file: "",
        preview_URL:
          "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif"
    });
    const [image_happy, setImage_happy] = useState({
        image_file: "",
        preview_URL:
          "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif"
    });
    const [image_sad, setImage_sad] = useState({
        image_file: "",
        preview_URL:
          "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif"
    });
    const [image_surprised, setImage_surprised] = useState({
        image_file: "",
        preview_URL:
          "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif"
    });

    const saveImage = (e) => {
        e.preventDefault();
        if (e.target.files[0]) {
          // 새로운 이미지를 올리면 createObjectURL()을 통해 생성한 기존 URL을 폐기
          URL.revokeObjectURL(image.preview_URL);
          const preview_URL = URL.createObjectURL(e.target.files[0]);
          setImage(() => ({
            image_file: e.target.files[0],
            preview_URL: preview_URL
          }));
        }
    };
    const saveImage_angry = (e) => {
        e.preventDefault();
        if (e.target.files[0]) {
          // 새로운 이미지를 올리면 createObjectURL()을 통해 생성한 기존 URL을 폐기
          URL.revokeObjectURL(image_angry.preview_URL);
          const preview_URL = URL.createObjectURL(e.target.files[0]);
          setImage_angry(() => ({
            image_file: e.target.files[0],
            preview_URL: preview_URL
          }));
        }
    };
    const saveImage_disgust = (e) => {
        e.preventDefault();
        if (e.target.files[0]) {
          // 새로운 이미지를 올리면 createObjectURL()을 통해 생성한 기존 URL을 폐기
          URL.revokeObjectURL(image_disgust.preview_URL);
          const preview_URL = URL.createObjectURL(e.target.files[0]);
          setImage_disgust(() => ({
            image_file: e.target.files[0],
            preview_URL: preview_URL
          }));
        }
    };
    const saveImage_fear = (e) => {
        e.preventDefault();
        if (e.target.files[0]) {
          // 새로운 이미지를 올리면 createObjectURL()을 통해 생성한 기존 URL을 폐기
          URL.revokeObjectURL(image_fear.preview_URL);
          const preview_URL = URL.createObjectURL(e.target.files[0]);
          setImage_fear(() => ({
            image_file: e.target.files[0],
            preview_URL: preview_URL
          }));
        }
    };
    const saveImage_happy = (e) => {
        e.preventDefault();
        if (e.target.files[0]) {
          // 새로운 이미지를 올리면 createObjectURL()을 통해 생성한 기존 URL을 폐기
          URL.revokeObjectURL(image_happy.preview_URL);
          const preview_URL = URL.createObjectURL(e.target.files[0]);
          setImage_happy(() => ({
            image_file: e.target.files[0],
            preview_URL: preview_URL
          }));
        }
    };
    const saveImage_sad = (e) => {
        e.preventDefault();
        if (e.target.files[0]) {
          // 새로운 이미지를 올리면 createObjectURL()을 통해 생성한 기존 URL을 폐기
          URL.revokeObjectURL(image_sad.preview_URL);
          const preview_URL = URL.createObjectURL(e.target.files[0]);
          setImage_sad(() => ({
            image_file: e.target.files[0],
            preview_URL: preview_URL
          }));
        }
    };
    const saveImage_surprised = (e) => {
        e.preventDefault();
        if (e.target.files[0]) {
          // 새로운 이미지를 올리면 createObjectURL()을 통해 생성한 기존 URL을 폐기
          URL.revokeObjectURL(image_surprised.preview_URL);
          const preview_URL = URL.createObjectURL(e.target.files[0]);
          setImage_surprised(() => ({
            image_file: e.target.files[0],
            preview_URL: preview_URL
          }));
        }
    };

    useEffect(() => {
    // 컴포넌트가 언마운트되면 createObjectURL()을 통해 생성한 기존 URL을 폐기
    return () => {
        URL.revokeObjectURL(image.preview_URL);
    };
    }, []);

    const sendImageToServer = async () => {
        if (image.image_file) {
            const formData = new FormData();
            formData.append("file", image.image_file);
            await axios.post("/api/image/upload", formData);
            alert("서버에 등록이 완료되었습니다!");
            setImage({
            image_file: "",
            preview_URL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAYFBMVEXa2tpVVVXd3d1OTk5SUlJwcHC1tbVLS0uOjo7h4eGcnJxWVlbU1NRaWlphYWGnp6fHx8e8vLxra2umpqa5ubnOzs51dXWvr6+WlpaGhobDw8OAgIBkZGR7e3uQkJBERETECcahAAACeUlEQVR4nO3b6W6qQBiAYWaxw7gdxAXc2vu/y4qIgIKpQo7x433+lUaTeYPDDGIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGQffo3WN5jV7Go/74dw/nJXrsbH8+tYFRvZnQgAY0kNDAuE4kNLDp6quDxVxAA5P4LmsjP7cCGvzrtMajwTAb3G4NhtdAB7skWVdfMLgGOhqdroY2rBwaWgMd2fOA3aY8NrgGG5uviFz5mqE1WBeLaxtfhzywBnrliu3B7HpwaA12RQM7l/xZ0Kv9gyTzy3xgQsmfBR27sHU4epmfCNauBZ8HOnHKpa3j8Wl2C9KoRfkSeQ2Cw2lEbtx+Juy28SitLhTFNfD5ye6W7RG897UJQ1yDYHaZ85L6kB5Mk9Ia+LRYBP181SbKRfu7SGswVVd2URnU1O5bv0wT1sBvKzea3a48PUJj4mlLBFkN9Lp6r91OouJ45LKV4bo5grAGe6uqEYqFUL5btGbXGEFUg3I3cN0UnCPoL3NpkjSNU1QDP7LqNsJ5Eig2Cc1rJ0kNKhvjMsJpJvTj8rgL7z8OkhoE8e1pkP1vdLouVv52x7vlkqAG2WapgTlua2nur5GSGkyaEmQz4e0cEdUjyGng//w9vLWr2nDlNJjO/pggWyjUrpFiGujomccxajdZBtpAua3A+0hPNlBuc708SGrQsDp4wByKLZSgBmr2nMnssoUS0+B0YXhe/i6CGryMBlIaJL6Tg4AG9vgddvCdrzA/u4Hq+NC+ktCgFzSgAQ0+u0H60+2p/ZoPbRB1eWb/1qf+uK9P7x4MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPwHvzkNNPrHNmiDAAAAAElFTkSuQmCC"
            });
        } else {
            alert("사진을 등록하세요!");
        }
    };

    return (
        <div>
            <Toolbar style={{marginLeft: '50px', marginTop: '-10px'}}>
                <Typography
                    fontStyle='solid'
                    fontSize='20px'
                    sx={{ml: 3}}
                >
                    이모지 이름
                </Typography>

                <TextField
                    required
                    id="outlined-required"
                    label="이모지 이름을 입력해주세요!"
                    size="small"
                    color="warning"
                    sx={{ml: 3, width: 270}}
                />
            </Toolbar>

            <Toolbar style={{marginLeft: '50px'}}>
                <Typography
                    fontStyle='solid'
                    fontSize='20px'
                    sx={{ml: 3, mt: -2, mr: 2}}
                >
                    프로필 사진
                </Typography>
                <input
                    type="file"
                    accept="image/*"
                    onChange={saveImage}
                    // 클릭할 때 마다 file input의 value를 초기화 하지 않으면 버그가 발생할 수 있다
                    // 사진 등록을 두개 띄우고 첫번째에 사진을 올리고 지우고 두번째에 같은 사진을 올리면 그 값이 남아있음!
                    onClick={(e) => (e.target.value = null)}
                    ref={(refParam) => (inputRef = refParam)}
                    style={{ display: "none"}}
                />
                <div style={{textAlign: 'center'}}>
                    <Button>
                        <img style={{height: '140px', width: '270px', borderRadius: '15px'}} src={image.preview_URL} 
                        onClick={() => inputRef.click()}/>
                    </Button>
                </div>
            </Toolbar>
            <Divider color="#FECD93" sx={{mt: '10px'}}/>
    
            <Toolbar style={{marginLeft: '-63px'}}>
                <Box style={{width: '210px', margin: '10px'}}>
                    <Typography style={{textAlign: 'center'}}>
                        화남 😡
                    </Typography>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={saveImage_angry}
                        // 클릭할 때 마다 file input의 value를 초기화 하지 않으면 버그가 발생할 수 있다
                        // 사진 등록을 두개 띄우고 첫번째에 사진을 올리고 지우고 두번째에 같은 사진을 올리면 그 값이 남아있음!
                        onClick={(e) => (e.target.value = null)}
                        ref={(refParam) => (inputRef_angry = refParam)}
                        style={{ display: "none"}}
                    />
                    <div>
                        <Button>
                            <img style={{height: '140px', width: '210px', borderRadius: '15px'}} src={image_angry.preview_URL} 
                            onClick={() => inputRef_angry.click()}/>
                        </Button>
                    </div>
                </Box>
                <Box style={{width: '210px', margin: '10px'}}>
                    <Typography style={{textAlign: 'center'}}>
                        혐오 🤢
                    </Typography>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={saveImage_disgust}
                        // 클릭할 때 마다 file input의 value를 초기화 하지 않으면 버그가 발생할 수 있다
                        // 사진 등록을 두개 띄우고 첫번째에 사진을 올리고 지우고 두번째에 같은 사진을 올리면 그 값이 남아있음!
                        onClick={(e) => (e.target.value = null)}
                        ref={(refParam) => (inputRef_disgust = refParam)}
                        style={{ display: "none"}}
                    />
                    <div>
                        <Button>
                            <img style={{height: '140px', width: '210px', borderRadius: '15px'}} src={image_disgust.preview_URL} 
                            onClick={() => inputRef_disgust.click()}/>
                        </Button>
                    </div>
                </Box>
                <Box style={{width: '210px', margin: '10px'}}>
                    <Typography style={{textAlign: 'center'}}>
                        두려움 😬
                    </Typography>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={saveImage_fear}
                        // 클릭할 때 마다 file input의 value를 초기화 하지 않으면 버그가 발생할 수 있다
                        // 사진 등록을 두개 띄우고 첫번째에 사진을 올리고 지우고 두번째에 같은 사진을 올리면 그 값이 남아있음!
                        onClick={(e) => (e.target.value = null)}
                        ref={(refParam) => (inputRef_fear = refParam)}
                        style={{ display: "none"}}
                    />
                    <div>
                        <Button>
                            <img style={{height: '140px', width: '210px', borderRadius: '15px'}} src={image_fear.preview_URL} 
                            onClick={() => inputRef_fear.click()}/>
                        </Button>
                    </div>
                </Box>
            </Toolbar>
            <Toolbar style={{marginLeft: '-63px', marginTop: '-10px'}}>
                <Box style={{width: '210px', margin: '10px'}}>
                    <Typography style={{textAlign: 'center'}}>
                        기쁨 😁
                    </Typography>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={saveImage_happy}
                        // 클릭할 때 마다 file input의 value를 초기화 하지 않으면 버그가 발생할 수 있다
                        // 사진 등록을 두개 띄우고 첫번째에 사진을 올리고 지우고 두번째에 같은 사진을 올리면 그 값이 남아있음!
                        onClick={(e) => (e.target.value = null)}
                        ref={(refParam) => (inputRef_happy = refParam)}
                        style={{ display: "none"}}
                    />
                    <div>
                        <Button>
                            <img style={{height: '140px', width: '210px', borderRadius: '15px'}} src={image_happy.preview_URL} 
                            onClick={() => inputRef_happy.click()}/>
                        </Button>
                    </div>
                </Box>
                <Box style={{width: '210px', margin: '10px'}}>
                    <Typography style={{textAlign: 'center'}}>
                        슬픔 😭
                    </Typography>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={saveImage_sad}
                        // 클릭할 때 마다 file input의 value를 초기화 하지 않으면 버그가 발생할 수 있다
                        // 사진 등록을 두개 띄우고 첫번째에 사진을 올리고 지우고 두번째에 같은 사진을 올리면 그 값이 남아있음!
                        onClick={(e) => (e.target.value = null)}
                        ref={(refParam) => (inputRef_sad = refParam)}
                        style={{ display: "none"}}
                    />
                    <div>
                        <Button>
                            <img style={{height: '140px', width: '210px', borderRadius: '15px'}} src={image_sad.preview_URL} 
                            onClick={() => inputRef_sad.click()}/>
                        </Button>
                    </div>
                </Box>
                <Box style={{width: '210px', margin: '10px'}}>
                    <Typography style={{textAlign: 'center'}}>
                        놀람 🫢
                    </Typography>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={saveImage_surprised}
                        // 클릭할 때 마다 file input의 value를 초기화 하지 않으면 버그가 발생할 수 있다
                        // 사진 등록을 두개 띄우고 첫번째에 사진을 올리고 지우고 두번째에 같은 사진을 올리면 그 값이 남아있음!
                        onClick={(e) => (e.target.value = null)}
                        ref={(refParam) => (inputRef_surprised = refParam)}
                        style={{ display: "none"}}
                    />
                    <div>
                        <Button>
                            <img style={{height: '140px', width: '210px', borderRadius: '15px'}} src={image_surprised.preview_URL} 
                            onClick={() => inputRef_surprised.click()}/>
                        </Button>
                    </div>
                </Box>
            </Toolbar>
            <Divider color="#FECD93" />
            <div style={{marginTop: '20px'}}>
                <Button style={{textAlign: 'center', position: 'absolute', bottom: '15px', left: '35%', width: '200px'}}
                    variant="contained"
                    sx={{
                        bgcolor: "#FECD93",
                        ':hover':{
                            bgcolor: '#FECD93',
                        }, borderRadius: '30px',
                    }}  onClick={sendImageToServer}
                >
                    Upload
                </Button>
            </div>                
        </div>
    );
}