import React, { useState } from 'react';
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
    // Modal,
    // Backdrop,
} from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
//   };

export default function MainPage(){
    // const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    return(
        <ThemeProvider theme={theme}>
            <main>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant='h2'
                            align='center'
                            color="text.primary"
                            gutterBottom
                        >
                            IGE MOJI
                        </Typography>
                        <Typography variant='h5' align='center' color="text.secondary" paragraph>
                            이모지를 만들고, 다양한 이모지를 체험해보세요~
                        </Typography>
                    </Container>
                </Box>
                <Container sx={{py: 8}} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image="https://mblogthumb-phinf.pstatic.net/MjAyMTEwMjRfNTIg/MDAxNjM1MDU3NDU2NzQ0.yiSnrU_Ax6Y9jT1k3qkFPfP_UOr9zYB1vMfLLVBOwgMg.wDFvOoUEMfjvoQVwO5Ix0m9f9yZxnC_W0Jo3brhbC10g.PNG.eugenius1231/image.png?type=w800"
                                        alt="random"
                                    />
                                    <CardContent sx={{flexGrow: 1}}>
                                        <Typography gutterBottom variant='h5' component='h2' 
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center'
                                            }}>
                                            유미의 세포들
                                        </Typography>
                                        <Typography
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                color: '#ADADAD'
                                            }}>
                                            mojji
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button variant="outlined" fullWidth href="/upload">
                                            USE
                                        </Button>
                                        {/* <Button variant="outlined" fullWidth onClick={handleOpen}>
                                            Use
                                        </Button>
                                        <Modal
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style}>
                                                <Typography
                                                    id="modal-modal-title"
                                                    variant="h6"
                                                    fontWeight="bold"
                                                    component="h2"
                                                    sx={{mb:3, color: "#737458", fontFamily: "Itim"}}
                                                >
                                                    지금 당신의 표정을 넣어주세요!
                                                </Typography>
                                            </Box>

                                        </Modal> */}
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}