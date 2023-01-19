import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Button,
  Divider,
  Toolbar,
  TextField,
} from "@mui/material";
import axios from 'axios';

export default function EditPage() {
  const [disable, setDisable] = React.useState(true);

  let inputRef, inputRef_angry, inputRef_disgust, inputRef_fear, inputRef_happy, inputRef_sad, inputRef_surprised;
  const [image, setImage] = useState({
      image_file: "",
      preview_URL:
        "https://pbs.twimg.com/profile_images/963340187932639234/XgvGaOtS_400x400.jpg"
  });
  const [image_angry, setImage_angry] = useState({
      image_file: "",
      preview_URL:
        "data:image/jpeg;base64,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"
  });
  const [image_disgust, setImage_disgust] = useState({
      image_file: "",
      preview_URL:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAxMjZfMjUw%2FMDAxNjQzMTY1OTMxNzc5.PN6z1FxJBrfmEyJIhLWxQh6QouR0RQNtFbnrlp7jUTIg.eSQ9o4xiOHl-Ijb1dINIayI6ioXVCpIHPdnkmfwWmVAg.JPEG.love10017%2FIMG_9534.jpg&type=sc960_832"
  });
  const [image_fear, setImage_fear] = useState({
      image_file: "",
      preview_URL:
        "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cCFh/image/uKu2wnGFtBmbHPNRQIdcBvatDkY"
  });
  const [image_happy, setImage_happy] = useState({
      image_file: "",
      preview_URL:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA1MDNfMTE2%2FMDAxNTU2ODkwMzYyMTUz.Rb3YildousZDOdnH2LyZc0lG-V9y7KFny1KJvVgpKVYg.eAvpjQVu6T1M-49NmOx-aoHJhupAxT_E6POMujp2t9Qg.JPEG.studygir%2FlTIYlTfYY_%25282%2529.jpg&type=sc960_832"
  });
  const [image_sad, setImage_sad] = useState({
      image_file: "",
      preview_URL:
        "data:image/jpeg;base64,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"
  });
  const [image_surprised, setImage_surprised] = useState({
      image_file: "",
      preview_URL:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MjhfMjcg%2FMDAxNjUzNzE4NzA5OTA4.qsXmadfCXU5aQSiGS7-_G7wzvLh3ftB9N4s3xX8WdCcg.2xO3Ljg8uEY3Y_3eYH8sJRMjnt-KVjSxsOckbXDhK9Ug.JPEG.jsgmh7695%2FIMG_5253.JPG&type=sc960_832"
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
      <Toolbar style={{marginLeft: '50px'}}>
        <Typography
          fontStyle='solid'
          fontSize='20px'
          sx={{ml: 3}}
        >
          이모지 이름
        </Typography>

        <TextField 
          disabled={disable} 
          required
          id="outlined-required"
          label="이모지 이름을 입력해주세요!"
          size="small"
          color="warning"
          sx={{ml: 3, width: 300}}
          defaultValue="안녕 짱구양~"
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
          <Button disabled={disable}>
            <img style={{height: '140px', width: '270px', borderRadius: '15px'}} src={image.preview_URL} 
            onClick={() => inputRef.click()}/>
          </Button>
        </div>
      </Toolbar>
        <Divider color="#FECD93" sx={{mt: '10px'}}/>

        <Toolbar style={{marginLeft: '-53px'}}>
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
              <Button disabled={disable}>
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
                <Button disabled={disable}>
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
                <Button disabled={disable}>
                  <img style={{height: '140px', width: '210px', borderRadius: '15px'}} src={image_fear.preview_URL} 
                  onClick={() => inputRef_fear.click()}/>
                </Button>
            </div>
          </Box>
        </Toolbar>
        <Toolbar style={{marginLeft: '-53px', marginTop: '-10px'}}>
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
                    <Button disabled={disable}>
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
                    <Button disabled={disable} >
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
                    <Button disabled={disable}>
                        <img style={{height: '140px', width: '210px', borderRadius: '15px'}} src={image_surprised.preview_URL} 
                        onClick={() => inputRef_surprised.click()}/>
                    </Button>
                </div>
            </Box>
        </Toolbar>
        <Divider color="#FECD93" sx={{mt: '10px'}}/>
        
        <div style={{marginTop: '20px'}}>
          {/* <Button style={{textAlign: 'center', position: 'absolute', bottom: '30px', left: '35%', width: '200px'}}
              variant="contained"
              sx={{
                  bgcolor: "#FECD93",
                  ':hover':{
                      bgcolor: '#FECD93',
                  }, borderRadius: '30px',
              }}  onClick={sendImageToServer}
          >
            수정 완료
          </Button> */}
          <Button style={{textAlign: 'center', position: 'absolute', bottom: '25px', left: '35%', width: '200px'}}
              variant="contained"
              sx={{
                  bgcolor: "#FECD93",
                  ':hover':{
                      bgcolor: '#FECD93',
                  }, borderRadius: '30px',
              }} onClick={() => setDisable(!disable)}>
            {disable ? "수정하기" : "수정완료"}
          </Button>
        </div>                
    </div>
  );
}