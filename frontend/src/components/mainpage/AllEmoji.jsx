import React, {useState} from 'react';
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
    Box,
    Modal,
    IconButton,
} from '@mui/material';
import {
    Stepper,
    Step,
    StepLabel,
    makeStyles,
} from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";

import Upload from "../upload/Upload";
import Uploading from "../upload/Uploading";
import UploadResult from "../upload/UploadResult";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: 700,
    width: 650,
    bgcolor: "background.paper",
    border: "2px solid #FFFFFF",
    borderRadius: "25px",
    boxShadow: 24,
    p: 4,
};

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
    
    // Stepper
    const [activeStep, setActiveStep] = React.useState(0);
    const handleReset = () => {
        setActiveStep(0);
    };
    const classes = useStyles();
    const steps = getSteps();
    const [skipped, setSkipped] = React.useState(new Set());

    // Modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
      setOpen(false);
      setActiveStep(0);
    };

    // Stepper 단계별
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Upload emojiId={emojiId}/>
    //   case 1:
    //     return <Uploading/>;
      case 1:
        return <UploadResult/>;
      default:
        return "Unknown step";
    }
  }

  const isStepSkipped = (step) => {
    return skipped.has(step);
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

    // 메인페이지 모든 이모지 List
    function allEmojiList() {
        var array = [];

        for (let index = 0; index < Object.keys(emojiData).length; index++) {
        array.push(
            <Grid item key={emojiData[index].id} xs={12} sm={6} md={4} lg={3}>
                <Card
                    sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: "-5px",
                    }}
                >
                    <CardMedia
                        component="img"
                        height="250px"
                        image={emojiData[index].image[0]}
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
                            mt: "-5px",
                            }}
                        >
                            {emojiData[index].name}
                        </Typography>
                        <Typography
                            sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            color: "#ADADAD",
                            mt: "-8px",
                            mb: "-5px",
                            }}
                        >
                            made by {emojiData[index].alias}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="outlined"
                            style={{ color: "#FECD93", borderColor: "#FECD93" }}
                            fullWidth
                            onClick={() => {
                                handleOpen();
                                setEmojiId(emojiData[index].id);
                            }}
                        >
                            Use
                        </Button>
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
                    {/* <Stepper activeStep={activeStep}>
                    {steps.map((label) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                        );
                    })}
                    </Stepper> */}
                    <div>
                    {activeStep === steps.length - 1 ? (
                        <Upload/>
                    ) : (
                        <div>
                        <Typography className={classes.instructions}>
                            {getStepContent(activeStep)}
                        </Typography>
                        {/* <div
                            style={{
                            textAlign: "center",
                            width: "85%",
                            position: "absolute",
                            bottom: "10px",
                            marginLeft: 20,
                            }}
                        >
                            <Button
                            variant="contained"
                            sx={{
                                bgcolor: "#FECD93",
                                ":hover": {
                                bgcolor: "#FECD93",
                                },
                            }}
                            onClick={handleNext}
                            className={classes.button}
                            >
                            {activeStep === steps.length - 1 ? "Finish" : "Next"}
                            </Button>
                        </div> */}
                        </div>
                    )}
                    </div>
                </div>
                </Box>
            </Modal>
        </Box>
        
    )
}