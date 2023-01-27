import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Modal,
  IconButton,
  Divider,
  Toolbar,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CloseIcon from '@mui/icons-material/Close';

import { makeStyles } from "@material-ui/core/styles";

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import StepOne from "../components/upload/Upload";
import StepTwo from "../components/upload/LoadingPage";
import StepFinal from "../components/upload/ResultPage";

import NewEmoji from "../components/main/NewEmoji";

import axios from 'axios';

const theme = createTheme();
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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
const newEmojistyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height:750,
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #FFFFFF",
  borderRadius: '25px',
  boxShadow: 24,
  p: 4,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    '& .MuiStepIcon-active': {color: '#FECD93'},
    "& .MuiStepIcon-completed": { color: "#FECD93" },
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return ["Upload", "Uploading", "Result"];
}

export default function MainPage() {
  const [image, setImage] = useState({
    image_file: "",
    preview_URL:
      "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif"
  });

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setActiveStep(0);
  };
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

function getStepContent(step) {
  switch (step) {
    case 0:
      // return <StepOne />;
    let inputRef;
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

        setActiveStep((prevActiveStep) => prevActiveStep + 1);

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

    return(
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

    case 1:
      return (
        <center>
          <Box
            whiteSpace="pre-wrap"
            sx={{
              bgcolor: "background.paper",
              pt: 8,
              pb: 6,
              mt: -5,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h4"
                align="center"
                color="text.primary"
                gutterBottom
                fontStyle="bold"
                fontFamily="Itim"
              >
                AI가 당신의 표정을 분석 중이에요!
              </Typography>
              <Typography
                variant="h6"
                align="center"
                color="text.secondary"
                paragraph
              >
                잠시만 기다려주세요...
              </Typography>
            </Container>
          </Box>
          {/* <Lottie
                options={defaultOptions}
                height={400}
                width={400}
            /> */}
        </center>
      );
    case 2:
      return <StepFinal />;
    default:
      return "Unknown step";
  }
}

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            IGE MOJI
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            이모지를 만들고, 다양한 이모지를 체험해보세요~
          </Typography>
        </Container>
      </Box>
      
      <Toolbar sx={{mt: 5}}>
        <div style={{width: '40%', textAlign: 'left'}}>
          <Typography
            variant="h6"
            color="text.primary"
            textAlign='left'
            fontWeight='700'
          >
            원하시는 이모지를 선택해주세요
          </Typography>
        </div>
        
        <div style={{width: '80%',textAlign: 'right'}}>
          <Button variant='contained'
            sx={{
              bgcolor: "#FECD93",
              ':hover':{
                  bgcolor: '#FECD93',
              },
            }}
            onClick={handleOpen2}
          >
            새로 만들기
          </Button>
        </div>
      </Toolbar>
      
      <Divider/>

      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "fit-content",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height='250px'
                  image="https://images.mypetlife.co.kr/content/uploads/2019/08/09153141/hang-niu-Tn8DLxwuDMA-unsplash-e1565933329979.jpg"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      mt: "-5px"
                    }}
                  >
                    유미의 세포들
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      color: "#ADADAD",
                      mt: '-8px',
                      mb: '-5px'
                    }}
                  >
                    mojji
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" fullWidth onClick={handleOpen}>
                    Use
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Box sx={style}>
          <Toolbar sx={{mt: -4}}>
          <div style={{width: '0%',textAlign: 'right'}}>
            <IconButton onClick={() => {setOpen(false); handleReset();} }>
              <CloseIcon fontWeight='300'/>
            </IconButton>
          </div>
          </Toolbar>
          <div className={classes.root}>
            <Stepper activeStep={activeStep}>
              {steps.map((label) => {
                const stepProps = {};
                const labelProps = {};
                return (
                  <Step key={label} {...stepProps} >
                    <StepLabel {...labelProps} >{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <div>
              {activeStep === steps.length - 1 ? (
                <div>
                  <StepFinal />
                </div>
              ) : (
                <div>
                  <Typography className={classes.instructions}>
                    {getStepContent(activeStep)}
                  </Typography>
                  <div style={{textAlign: 'center', width: '85%', position: 'absolute', bottom: '30px'}}>
                    {/* <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                      sx={{
                        color: "#FECD93",
                        ':hover':{
                          color: '#FECD93',
                        },
                      }}  
                    >
                      Back
                    </Button> */}

                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#FECD93",
                        ':hover':{
                            bgcolor: '#FECD93',
                        },
                      }}  
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Box>
      </Modal>

      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        open={open2}
        onClose={handleClose2}
        closeAfterTransition
      >
        <Box sx={newEmojistyle}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            fontWeight="bold"
            component="h2"
            sx={{ mb: 3, color: "#737458", fontFamily: "Itim"}}
          >

            <Toolbar sx={{mt: -2}}>
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
                      이모지 생성
                </Typography>
              </div>
              <div style={{width: '0%',textAlign: 'right'}}>
                <IconButton onClick={() => setOpen2(false)}>
                  <CloseIcon fontWeight='300'/>
                </IconButton>
              </div>
            </Toolbar>
            <NewEmoji/>
          </Typography>
        </Box>
      </Modal>
    </ThemeProvider>
  );
}
