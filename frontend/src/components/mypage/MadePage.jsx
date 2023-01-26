import React, { useState, useEffect } from "react";
import {
    Card,
    Grid,
    CardHeader,
    CardMedia,
    Avatar,
    Box,
    IconButton,
    Toolbar,
    Modal,
    Typography,
    Button,
    TextField,
    Divider
} from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CloseIcon from '@mui/icons-material/Close';
import EditPage from "./EditPage";
import madeData from './madeData';
import axios from 'axios';

// const cards = [1, 2, 3, 4, 5, 6];

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: 700,
    width: 650,
    bgcolor: "background.paper",
    border: "2px solid #FFFFFF",
    borderRadius: '25px',
    boxShadow: 24,
    p: 4,
  };

export default function MadePage() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const [userId, setUserId] = useState(null);
  const [images, setImages] = useState([]);

//   async function getAllData(){
//     try{

//         const data = {user_id: 1};
//         fetch(`http://localhost:8080/api/v1/emojis/mypage/upload?user_id=${data.user_id}`, {
//           method: 'GET'
//         })
//         .then((response) => {
//             console.log(response);
//             console.log("user id >>> ", `${response.user_id.user_id_id}`);
//             console.log("name >>> ", `${response.user_id.name}`);
//             console.log("image >>> ", `${response.user_id.image}`);
//             // console.log("name >>", name)
//             setName(response.name);
//         });
//     } catch(err){
//         console.log(err)
//     }
// }
  useEffect(() => {
    const EmojiInfo = async() => {
      try{
        const data = {user_id: 1};
        await fetch(`http://localhost:8080/api/v1/emojis/mypage/upload?user_id=${data.user_id}`, {
          method: 'GET'
        })
        .then((res) => {
            // console.log(response);
            // setImages(response.data);
            console.log("res.data>>> ", res.data);
            // 정우님 예시 : setEmoji(res.data.image);

            return res.data;
        })
        .then((data) => {
            console.log("data>>> ", data);
            setImages(data);
        })
      } catch(err){
        console.log(err);
      }
      EmojiInfo();
    }}, []);

  return (
    <>
      <Typography>
        이모지 INFO
      </Typography>
      {/* <TextField value={name}/> */}
      {/* <Typography value={name}/> */}
      {/* <Button onClick={getAllData}>
          Get All Data
      </Button> */}
      {/* {images.map((image) => {
        <div key={image[0]}>
          <h2>{image[1]}</h2>
          <p>{image[2]}</p>
        </div>
      })} */}
      <h2>{userId}</h2>
      

    <Box>
      <Grid container spacing={3} style={{justifyContent: 'center'}}>
        {images.map((e) => (
          <Grid item key={e.user_id_id} xs={12} sm={6} md={4}>  
            <Button onClick={() => setOpen(true)}>
              <Card sx={{width: 250, textAlign:'initial'}}>
                <Toolbar>
                  <div style={{marginLeft: '-30px'}}>
                    <CardHeader
                      avatar={    
                        <Avatar><EmojiEmotionsIcon/></Avatar>
                      }
                      title={e.name}
                      // subheader={e.image}
                    />
                  </div>
                </Toolbar>

                <CardMedia
                  component="img"
                  height="194"
                  image="https://mblogthumb-phinf.pstatic.net/MjAyMTEwMjRfNTIg/MDAxNjM1MDU3NDU2NzQ0.yiSnrU_Ax6Y9jT1k3qkFPfP_UOr9zYB1vMfLLVBOwgMg.wDFvOoUEMfjvoQVwO5Ix0m9f9yZxnC_W0Jo3brhbC10g.PNG.eugenius1231/image.png?type=w800"
                  alt="Paella dish"
                />
              </Card>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>

    // <Box>
    //   <Grid container spacing={3} style={{justifyContent: 'center'}}>
    //     {madeData.map((e) => (
    //       <Grid item key={e.user_id_id} xs={12} sm={6} md={4}>  
    //         <Button onClick={() => setOpen(true)}>
    //           <Card sx={{width: 250, textAlign:'initial'}}>
    //             <Toolbar>
    //               <div style={{marginLeft: '-30px'}}>
    //                 <CardHeader
    //                   avatar={    
    //                     <Avatar><EmojiEmotionsIcon/></Avatar>
    //                   }
    //                   title={e.name}
    //                   // subheader={e.image}
    //                 />
    //               </div>
    //             </Toolbar>

    //             <CardMedia
    //               component="img"
    //               height="194"
    //               image="https://mblogthumb-phinf.pstatic.net/MjAyMTEwMjRfNTIg/MDAxNjM1MDU3NDU2NzQ0.yiSnrU_Ax6Y9jT1k3qkFPfP_UOr9zYB1vMfLLVBOwgMg.wDFvOoUEMfjvoQVwO5Ix0m9f9yZxnC_W0Jo3brhbC10g.PNG.eugenius1231/image.png?type=w800"
    //               alt="Paella dish"
    //             />
    //           </Card>
    //         </Button>
    //       </Grid>
    //     ))}
    //   </Grid>
    //   <Modal
    //     aria-labelledby="modal-title"
    //     aria-describedby="modal-description"
    //     open={open}
    //     onClose={handleClose}
    //     closeAfterTransition
    //   >
    //     <Box sx={style}>
    //       <Typography
    //         id="modal-modal-title"
    //         variant="h6"
    //         fontWeight="bold"
    //         component="h2"
    //         sx={{ mb: 3, color: "#737458", fontFamily: "Itim"}}
    //       >
    //         <Toolbar sx={{mt: -4}}>
    //           <div style={{width: '120%', textAlign: 'right'}}>
    //             <Typography
    //               component="h1"
    //               variant='h5'
    //               textAlign='center'
    //               color='text.primary'
    //               gutterBottom
    //               fontStyle='bold'
    //               fontFamily='Itim'
    //             >
    //               이모지 수정
    //             </Typography>
    //           </div>
    //           <div style={{width: '0%',textAlign: 'right'}}>
    //             <IconButton onClick={() => setOpen(false)}>
    //               <CloseIcon fontWeight='300'/>
    //             </IconButton>
    //           </div>
    //         </Toolbar>

    //         <EditPage/>
    //       </Typography>
    //     </Box>
    //   </Modal>
    // </Box>
  );
}