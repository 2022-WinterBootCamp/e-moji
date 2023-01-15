import { 
    Typography,
    Container,
    Box,
    Button,
} from '@mui/material';
import React from 'react';
// import { DropzoneArea } from "material-ui-dropzone";

const UploadPage = () => {
  return (
    <main>
        <Box
            whiteSpace = 'pre-wrap'
            sx={{
                bgcolor:'background.paper',
                pt: 8,
                pb: 6,
            }}
        >
            <Container maxWidth="sm">
                <Typography
                    component="h1"
                    variant='h4'
                    align='center'
                    color='text.primary'
                    gutterBottom
                    fontStyle='bold'
                    fontFamily='Itim'
                >
                    지금 당신의 표정을 넣어주세요!
                </Typography>
            </Container>
            <br/>
            <Box textAlign='center'>
                <Button variant="contained" component="label"
                    bgcolor="#FECD93"
                    sx={{
                        bgcolor: "#FECD93",
                        ':hover':{
                            bgcolor: '#FECD93',
                        }
                    }}>
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                </Button>
                {/* <DropzoneArea
                    acceptedFiles={["image/*"]}
                    dropzoneText={"Drag and drop an image here or click"}
                    onChange={(files) => console.log("Files:", files)}
                /> */}
                <br/>
                <br/>
                <Button variant="contained" href="/loading"
                    bgcolor="#FECD93"
                    sx={{
                        bgcolor: "#FECD93",
                        ':hover':{
                            bgcolor: '#FECD93',
                        }
                    }}
                >
                    결과 보기
                </Button>
            </Box>
        </Box>
    </main>
  );
}

export default UploadPage;