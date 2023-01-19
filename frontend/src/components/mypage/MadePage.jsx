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

const cards = [1, 2, 3, 4, 5, 6];

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
  // const [activeStep, setActiveStep] = React.useState(0);

  // const handleReset = () => {
  //     setActiveStep(0);
  // };
  // const handleOpen = () => setOpen(true);
  const handleClose = () => {
      setOpen(false);
      // setActiveStep(0);
  };

  const [visible, setVisible] = useState(false);

  return (
    <Box >
      <Grid container spacing={3} style={{justifyContent: 'center'}}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Button onClick={() => setOpen(true)}>
              <Card sx={{/*maxWidth: 345, */ width: 250, textAlign:'initial'}}>
                <Toolbar>
                  <div style={{marginLeft: '-30px'}}>
                    <CardHeader
                      avatar={    
                          <Avatar><EmojiEmotionsIcon/></Avatar>
                      }
                      title="유미의 세포들"
                      subheader="made by mojji"
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
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            fontWeight="bold"
            component="h2"
            sx={{ mb: 3, color: "#737458", fontFamily: "Itim"}}
          >
            <Toolbar sx={{mt: -4}}>
              <div style={{width: '120%', textAlign: 'right'}}>
                <Typography
                  component="h1"
                  variant='h5'
                  textAlign='center'
                  color='text.primary'
                  gutterBottom
                  fontStyle='bold'
                  fontFamily='Itim'
                >
                  이모지 수정
                </Typography>
              </div>
              <div style={{width: '0%',textAlign: 'right'}}>
                <IconButton onClick={() => setOpen(false)}>
                  <CloseIcon fontWeight='300'/>
                </IconButton>
              </div>
            </Toolbar>

            <EditPage/>
          </Typography>
        </Box>
      </Modal>
    </Box> 
  );
}

// const cards = [
//     {
//         title: '유미의 세포들',
//         user: 'mojji',
//         src: 'https://www.artinsight.co.kr/data/tmp/2110/20211020130553_rodbhczf.jpg',
//     },
//     {
//         title: '짱구는 못말려',
//         user: 'mojji',
//         src: 'https://upload.wikimedia.org/wikipedia/ko/thumb/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png/230px-%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
//     },
//     {
//         title: '인사이드아웃',
//         user: 'mojji',
//         src: 'https://w.namu.la/s/b10bcd51a51c5787e5bc4fca9061f4989a545f1c37cefc69dca16511e4c2dd9d2a8cc37dc2509a0eed80abaa96939b65c5f8a982879c3707a7fb0f6f5b5c78f20258531a12a66baa9265f25349e1127d12bddecc0c8ab8680387da84a567aee13c290248567b9005ae84bf59aabf55dd'
//     }
// ];