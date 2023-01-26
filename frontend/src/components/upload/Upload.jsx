// import React, {useCallback} from 'react';
// import {useState, useRef} from 'react';
// import { 
//     Typography,
//     Container,
//     Box,
// } from '@mui/material';
// export default function UploadPage(props) {

//     const [imgFile, setImgFile] = useState("");
//     const imgRef = useRef();

//     const saveImgFile = () => {
//         const file = imgRef.current.files[0];
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onloadend = () => {
//             setImgFile(reader.result);
//         };
//     };

//     return (
//         <main>
//             <Box
//                 whiteSpace = 'pre-wrap'
//                 sx={{
//                     bgcolor:'background.paper',
//                     pt: 8,
//                     pb: 6,
//                     mt: -5,
//                 }}
//             >
//                 <Container maxWidth="sm">
//                     <Typography
//                         component="h1"
//                         variant='h4'
//                         align='center'
//                         color='text.primary'
//                         gutterBottom
//                         fontStyle='bold'
//                         fontFamily='Itim'
//                     >
//                         지금 당신의 표정을 넣어주세요!
//                     </Typography>
//                 </Container>
//                 <br/>
//                 {/* <Box textAlign='center'>
//                     <img 
//                         src={imgFile ? imgFile : 'data:image/png;base64,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'}
//                         style={{maxHeight: '350px'}}
//                     />
//                     <br/>

//                     <input 
//                         sx={{ml: 10}}
//                         type='file'
//                         accept='image/*'
//                         id="profileImg"
//                         onChange={saveImgFile}
//                         ref={imgRef}
//                     />
//                     <br/>
//                     <br/>
//                 </Box> */}
//             </Box>
//         </main>
//     );
// }

import React, { useEffect, useState } from "react";
import { Button,Typography } from "@mui/material";
import axios from "axios";

// const Upload = () => {
//   const [image, setImage] = useState({
//     image_file: "",
//     preview_URL:
//       "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXp7vG6vsG3u77s8fTCxsnn7O/f5OfFyczP09bM0dO8wMPk6ezY3eDd4uXR1tnJzdBvAX/cAAACVElEQVR4nO3b23KDIBRA0ShGU0n0//+2KmO94gWZ8Zxmr7fmwWEHJsJUHw8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwO1MHHdn+L3rIoK6eshsNJ8kTaJI07fERPOO1Nc1vgQm2oiBTWJ+d8+CqV1heplLzMRNonED+4mg7L6p591FC+133/xCRNCtd3nL9BlxWP++MOaXFdEXFjZ7r8D9l45C8y6aG0cWtP/SUGhs2d8dA/ZfGgrzYX+TVqcTNRRO9l+fS5eSYzQs85psUcuzk6igcLoHPz2J8gvzWaH/JLS+95RfOD8o1p5CU5R7l5LkfKEp0mQ1UX7hsVXqDpRrifILD/3S9CfmlUQFhQfuFu0STTyJ8gsP3PH7GVxN1FC4t2sbBy4TNRTu7LyHJbqaqKFw+/Q0ncFloo7CjRPwMnCWqKXQZ75El4nKC9dmcJaou9AXOE5UXbi+RGeJygrz8Uf+GewSn9uXuplnWDZJ7d8f24F/s6iq0LYf9olbS3Q8i5oKrRu4S9ybwaQ/aCkqtP3I28QDgeoK7TBya/aXqL5COx67PTCD2grtdOwH+pQV2r0a7YVBgZoKwwIVFQYG6ikMDVRTGByopjD8ATcKb0UhhRTe77sKs2DV7FKSjId18TUEBYVyLhUThWfILHTDqmI85/2RWWjcE/bhP6OD7maT3h20MHsA47JC3PsW0wcwLhv9t0OOPOIkCn21y2bXXwlyylxiYMPk1SuCSmpfK8bNQvIrpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwNX4BCbAju9/X67UAAAAASUVORK5CYII="
//   });

//   let inputRef;

//   const saveImage = (e) => {
//     e.preventDefault();
//     if (e.target.files[0]) {
//       // 새로운 이미지를 올리면 createObjectURL()을 통해 생성한 기존 URL을 폐기
//       URL.revokeObjectURL(image.preview_URL);
//       const preview_URL = URL.createObjectURL(e.target.files[0]);
//       setImage(() => ({
//         image_file: e.target.files[0],
//         preview_URL: preview_URL
//       }));
//     }
//   };

//   const deleteImage = () => {
//     // createObjectURL()을 통해 생성한 기존 URL을 폐기
//     URL.revokeObjectURL(image.preview_URL);
//     setImage({
//       image_file: "",
//       preview_URL:
//         "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXp7vG6vsG3u77s8fTCxsnn7O/f5OfFyczP09bM0dO8wMPk6ezY3eDd4uXR1tnJzdBvAX/cAAACVElEQVR4nO3b23KDIBRA0ShGU0n0//+2KmO94gWZ8Zxmr7fmwWEHJsJUHw8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwO1MHHdn+L3rIoK6eshsNJ8kTaJI07fERPOO1Nc1vgQm2oiBTWJ+d8+CqV1heplLzMRNonED+4mg7L6p591FC+133/xCRNCtd3nL9BlxWP++MOaXFdEXFjZ7r8D9l45C8y6aG0cWtP/SUGhs2d8dA/ZfGgrzYX+TVqcTNRRO9l+fS5eSYzQs85psUcuzk6igcLoHPz2J8gvzWaH/JLS+95RfOD8o1p5CU5R7l5LkfKEp0mQ1UX7hsVXqDpRrifILD/3S9CfmlUQFhQfuFu0STTyJ8gsP3PH7GVxN1FC4t2sbBy4TNRTu7LyHJbqaqKFw+/Q0ncFloo7CjRPwMnCWqKXQZ75El4nKC9dmcJaou9AXOE5UXbi+RGeJygrz8Uf+GewSn9uXuplnWDZJ7d8f24F/s6iq0LYf9olbS3Q8i5oKrRu4S9ybwaQ/aCkqtP3I28QDgeoK7TBya/aXqL5COx67PTCD2grtdOwH+pQV2r0a7YVBgZoKwwIVFQYG6ikMDVRTGByopjD8ATcKb0UhhRTe77sKs2DV7FKSjId18TUEBYVyLhUThWfILHTDqmI85/2RWWjcE/bhP6OD7maT3h20MHsA47JC3PsW0wcwLhv9t0OOPOIkCn21y2bXXwlyylxiYMPk1SuCSmpfK8bNQvIrpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwNX4BCbAju9/X67UAAAAASUVORK5CYII="
//     });
//   };

//   useEffect(() => {
//     // 컴포넌트가 언마운트되면 createObjectURL()을 통해 생성한 기존 URL을 폐기
//     return () => {
//       URL.revokeObjectURL(image.preview_URL);
//     };
//   }, []);

//   const sendImageToServer = async () => {
//     if (image.image_file) {
//       const formData = new FormData();
//       formData.append("file", image.image_file);
//       await axios.post("/api/image/upload", formData);
//       alert("서버에 등록이 완료되었습니다!");
//       setImage({
//         image_file: "",
//         preview_URL:
//           "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXp7vG6vsG3u77s8fTCxsnn7O/f5OfFyczP09bM0dO8wMPk6ezY3eDd4uXR1tnJzdBvAX/cAAACVElEQVR4nO3b23KDIBRA0ShGU0n0//+2KmO94gWZ8Zxmr7fmwWEHJsJUHw8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwO1MHHdn+L3rIoK6eshsNJ8kTaJI07fERPOO1Nc1vgQm2oiBTWJ+d8+CqV1heplLzMRNonED+4mg7L6p591FC+133/xCRNCtd3nL9BlxWP++MOaXFdEXFjZ7r8D9l45C8y6aG0cWtP/SUGhs2d8dA/ZfGgrzYX+TVqcTNRRO9l+fS5eSYzQs85psUcuzk6igcLoHPz2J8gvzWaH/JLS+95RfOD8o1p5CU5R7l5LkfKEp0mQ1UX7hsVXqDpRrifILD/3S9CfmlUQFhQfuFu0STTyJ8gsP3PH7GVxN1FC4t2sbBy4TNRTu7LyHJbqaqKFw+/Q0ncFloo7CjRPwMnCWqKXQZ75El4nKC9dmcJaou9AXOE5UXbi+RGeJygrz8Uf+GewSn9uXuplnWDZJ7d8f24F/s6iq0LYf9olbS3Q8i5oKrRu4S9ybwaQ/aCkqtP3I28QDgeoK7TBya/aXqL5COx67PTCD2grtdOwH+pQV2r0a7YVBgZoKwwIVFQYG6ikMDVRTGByopjD8ATcKb0UhhRTe77sKs2DV7FKSjId18TUEBYVyLhUThWfILHTDqmI85/2RWWjcE/bhP6OD7maT3h20MHsA47JC3PsW0wcwLhv9t0OOPOIkCn21y2bXXwlyylxiYMPk1SuCSmpfK8bNQvIrpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwNX4BCbAju9/X67UAAAAASUVORK5CYII="
//       });
//     } else {
//       alert("사진을 등록하세요!");
//     }
//   };

//   return (
//     <center>
//         <Typography
//             component="h1"
//             fontSize='2rem'
//             align='center'
//             color='text.primary'
//             gutterBottom
//             fontStyle='bold'
//             fontFamily='Itim'
//             sx={{mt: 3, mb: 3}}
//         >
//             지금 당신의 표정을 넣어주세요!
//         </Typography>
//         <input
//             type="file"
//             accept="image/*"
//             onChange={saveImage}
//             // 클릭할 때 마다 file input의 value를 초기화 하지 않으면 버그가 발생할 수 있다
//             // 사진 등록을 두개 띄우고 첫번째에 사진을 올리고 지우고 두번째에 같은 사진을 올리면 그 값이 남아있음!
//             onClick={(e) => (e.target.value = null)}
//             ref={(refParam) => (inputRef = refParam)}
//             style={{ display: "none", height:'300px',width:'520px' }}
//         />
//         <div style={{height: '300px', width: '520px'}}>
//             <img style={{height: '300px', width: '520px'}} textAlign src={image.preview_URL} />
//         </div>

//         <div style={{marginTop: '20px'}}>
//             <Button
//             type="primary"
//             variant="contained"
//             onClick={() => inputRef.click()}
//             >
//                 Preview
//             </Button>
//             <Button color="error" variant="contained" onClick={deleteImage}>
//                 Delete
//             </Button>
//             <Button color="success" variant="contained" onClick={sendImageToServer}>
//                 Upload
//             </Button>
//         </div>
//     </center>
//   );
// };

export default function Upload() {
    let inputRef;
    const [image, setImage] = useState({
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

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (image.image_file) {
        const formData = new FormData();

        formData.append("user_id", 1);
        formData.append("emoji_id", 1);
        formData.append("image", image.image_file);

        try{
          await axios({
            method: "POST",
            url: "/api/v1/faces/",
            data: formData,
            headers: {
              "Content-Type": "multipart/form-data",
            }
          })
          .then((response) => {
            console.log("response >> ", response.data);
          });
        }catch(err){
          console.log(err);
        }
      } else {
        alert("사진을 등록하세요!");
      }
    };
  
    useEffect(() => {
      // 컴포넌트가 언마운트되면 createObjectURL()을 통해 생성한 기존 URL을 폐기
      return () => {
        URL.revokeObjectURL(image.preview_URL);
      };
    }, []);
  
  
    return (
      <center>
        <form onSubmit={handleSubmit}>
          <Typography
              component="h1"
              fontSize='2rem'
              align='center'
              color='text.primary'
              gutterBottom
              fontStyle='bold'
              fontFamily='Itim'
              sx={{mt: 3, mb: 3}}
          >
              지금 당신의 표정을 넣어주세요!
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
          <div style={{/*borderStyle: 'dashed', */borderRadius: '15px'}}>
            <Button>
              <img style={{height: '300px', width: '520px', borderRadius: '15px'}} textAlign src={image.preview_URL} 
              onClick={() => inputRef.click()}/>
              </Button>
          </div>
  
          <Button style={{textAlign: 'center', position: 'absolute', bottom: '50px', left: '35%', width: '200px', height: '35px',
            backgroundColor: "#FECD93", color: '#FFFFFF', borderColor: '#FECD93',
            borderRadius: '30px'
            }}
            variant="contained"
            type="submit"
            value="Upload"
          >
              Upload
          </Button>
        </form>
      </center>
    );
  };
