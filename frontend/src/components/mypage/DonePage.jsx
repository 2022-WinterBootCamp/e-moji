import React from 'react';
import {
    Card,
    Grid,
    CardHeader,
    CardMedia,
    Avatar,
    Box,
    Toolbar,
    Typography,
} from '@mui/material';
import Lottie from "lottie-react";
import animationData from "../../lotties/empty.json";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import "../../font/font.css"

export default function DonePage({didState, emojiResult}) {
    function place() {
        console.log("[DonePage] 내가 했던 이모지 페이지입니다.")
        console.log("emojiResult", emojiResult);
    }

    // 내가 했던 이모지 List
    function didList() {
        var array = [];
    
        for (let index = 0; index < Object.keys(emojiResult).length; index++) {
          array.push(
            <Grid item key={emojiResult[index].id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "fit-content",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Toolbar>
                  <Box style={{ marginLeft: "-30px" }}>
                    <CardHeader
                      avatar={
                        <Avatar>
                          <EmojiEmotionsIcon />
                        </Avatar>
                      }
                      title={emojiResult[index].name}
                      subheader={`made by ${emojiResult[index].alias}`}
                    />
                  </Box>
                </Toolbar>
                <CardMedia
                  component="img"
                  height="194"
                  image={emojiResult[index].image}
                />
              </Card>
            </Grid>
          );
        }
        return array;
    }
    
    return (
        <Box>
            {place()}
            {didState === true ? (
                <Grid
                container
                spacing={4}
                direction="row"
                justifyContent="space-evenly"
                >
                    {didList()}
                </Grid>
            ) : (
                <Box>
                <Lottie
                    animationData={animationData}
                    style={{ height: "200px", marginTop: 200 }}
                />
                <Typography
                    textAlign="center"
                    style={{ marginTop: -15, color: "gray" }}
                >
                    내가 했던 이모지가 존재하지 않습니다.
                </Typography>
                </Box>
            )}
        </Box>
    );
}