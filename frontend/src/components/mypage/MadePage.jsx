import React, { useState } from "react";
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
    Button
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