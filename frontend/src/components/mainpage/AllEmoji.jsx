import React, {useState} from 'react';
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Box,
    Modal,
    Divider,
    IconButton,
} from '@mui/material';
import '../../font/font.css';
import {
    makeStyles,
} from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";

import Upload from "../upload/Upload";
import UploadResult from "../upload/UploadResult";



const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      "& .MuiStepIcon-active": { color: "#FECD93" },
      "& .MuiStepIcon-completed": { color: "#FECD93" },
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ["Upload", "Uploading", "Result"];
}

export default function AllEmoji({emojiData}) {
    const [emojiId, setEmojiId] = useState("");
    const [modalWidth, setModalWidth] = useState(750);
    
    // Stepper
    const [activeStep, setActiveStep] = React.useState(0);
    const handleReset = () => {
        setActiveStep(0);
    };
    const classes = useStyles();
    const steps = getSteps();

    // Modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
      setOpen(false);
      setActiveStep(0);
    };
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        height: 700,
        width: modalWidth,
        bgcolor: "background.paper",
        border: "2px solid #FFFFFF",
        borderRadius: "25px",
        boxShadow: 24,
        p: 4,
    };

    // Stepper 단계별
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Upload emojiId={emojiId} modalWidth={modalWidth} setModalWidth={setModalWidth}/>
      case 1:
        return <UploadResult/>;
      default:
        return "Unknown step";
    }
  }

    // 메인페이지 모든 이모지 List
    function allEmojiList() {
        var array = [];

        for (let index = 0; index < Object.keys(emojiData).length; index++) {
        array.push(
            <Grid item key={emojiData[index].id} xs={12} sm={6} md={4} lg={3}>
                <Card
                    sx={{
                        borderRadius: 5,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        mt: "-3px",
                        ":hover": { boxShadow: "gray 0px 3px 3px 2px", cursor: 'pointer'},
                    }}
                    style={{borderBottom: 'outset', borderRight: 'groove'}}
                    onClick={() => {
                        handleOpen();
                        setEmojiId(emojiData[index].id); 
                        setModalWidth(750)
                    }}
                    
                >
                    <CardMedia
                        component="img"
                        height="230px"
                        image={emojiData[index].image[0]}
                    />

                    <CardContent sx={{ flexGrow: 1 }}>
                        <Divider width="260px" style={{marginTop: -18, marginBottom: 8}}/>
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="h2"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                mt: "0px",
                                color: "#6a6a6a"
                            }}
                            fontFamily="cookierun-bold"
                        >
                            {emojiData[index].name}
                        </Typography>
                        <Typography
                        align='center'
                            sx={{
                                color: "#ADADAD",
                                mt: "-3px",
                                mb: "-25px",
                                ml: 1
                            }}
                            fontFamily="cookierun-bold"
                        >
                           
                            <span style={{ fontWeight: "900"}}>{emojiData[index].alias}</span>
                        </Typography>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                </Card>
            </Grid>
        );
        }
        return array;
    }
    
    function place() {
        console.log("[MainPage - AllEmoji] 메인페이지에서 모든 이모지 리스트를 보여주는 컴포넌트입니다.")
    }

    return (
        <Box>
            {place()}
            <Grid
                container
                spacing={4}
                direction="row"
                justifyContent="space-evenly"
            >
                {allEmojiList()}
            </Grid>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Box sx={style}>
                <div style={{ textAlign: "right" }}>
                    <IconButton
                    onClick={() => {
                        setOpen(false);
                        handleReset();
                    }}>
                    <CloseIcon fontWeight="300" />
                    </IconButton>
                </div>
                <div className={classes.root}>
                    <div>
                    {activeStep === steps.length - 1 ? (
                        <Upload/>
                    ) : (
                        <div>
                        <Typography className={classes.instructions}>
                            {getStepContent(activeStep)}
                        </Typography>
                        </div>
                    )}
                    </div>
                </div>
                </Box>
            </Modal>
        </Box>
        
    )
}