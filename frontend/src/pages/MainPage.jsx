import React from 'react';
import {
    Typography,
    Button,
    Box,
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function MainPage(){
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
                                        <Button fullWidth>Use</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        <Box sx={{bgcoor: 'background.paper', p: 6}} component="footer">
            <Typography variant='h6' align='center' gutterBottom>
                Footer
            </Typography>
            <Typography
                variant='subtitle1'
                align='center'
                color="text.secondary"
                component='p'
            >
                Something here to give the footer a purpose!
            </Typography>
            
        </Box>
        </ThemeProvider>
    );
}