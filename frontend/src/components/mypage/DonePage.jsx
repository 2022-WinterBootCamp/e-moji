import React from 'react';
import {
    Card,
    Grid,
    CardHeader,
    CardMedia,
    Avatar,
    Box,
    Toolbar,
} from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const cards = [1, 2, 3, 4, 5, 6];

export default function DonePage() {
  return (
    <Box>
        <Grid container spacing={3} style={{justifyContent: 'center'}}>
            {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card sx={{/*maxWidth: 345, */ width: 250, textAlign:'initial', borderRadius: '20px'}}>
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://mblogthumb-phinf.pstatic.net/MjAyMTEwMjRfNTIg/MDAxNjM1MDU3NDU2NzQ0.yiSnrU_Ax6Y9jT1k3qkFPfP_UOr9zYB1vMfLLVBOwgMg.wDFvOoUEMfjvoQVwO5Ix0m9f9yZxnC_W0Jo3brhbC10g.PNG.eugenius1231/image.png?type=w800"
                            alt="Paella dish"
                        />
                        
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Box>
  );
}