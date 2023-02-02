import React, {useEffect, useState} from "react";
import { 
  Box, 
  Typography,
} from "@mui/material";
import TopFirst from "./TopFirst";
import TopSecond from "./TopSecond";
import TopThird from "./TopThird";
import TopEmojiDetail from "./TopEmojiDetail";

import stage from './stage.png';
import top3_logo from './top3_logo.png';

import Lottie from "lottie-react";
import animationData from "../../lotties/prize.json";

export default function TopEmoji() {
  const [topEmoji, setTopEmoji] = useState({});
  const [topState, setTopState] = useState(false);
  let emojiTotal =[];
  let data;

  function place() {
    console.log("[MainPage - TopEmoji] 메인페이지에서 Top 3를 보여주는 컴포넌트입니다.")
  }

  // Top 3 Api
  async function getTopData() {
    try {
      fetch('http://localhost:8080/api/v1/faces/ranking', {
        method: "GET",
      })
        .then((response) => {
          // console.log(response);
          return response.json();
        })
        .then((data) => {
          console.log("[TopEmoji]data>>> ", data);
          setTopEmoji(data);
          setTopState(true);
        });
    } catch (err) {
      console.log(err);
    }
  }

  function changeName(){
    for(let i=0;i<3;i++){
      data={}
      data.name = topEmoji[i].name
      data.count = topEmoji[i].cnt
      emojiTotal.push(data)
    }
    console.log("emojiTotal>>> ", emojiTotal)
  }

  useEffect(() => {
    getTopData()
  }, [])

  return (
    <Box style={{ textAlign: "center" }}>
      {place()}
      {
        topState === true
        ? <Box>
            {changeName()}
            <Lottie
              animationData={animationData}
              style={{ position: 'absolute', width: '500px', marginLeft: 70, marginTop: 100 }}
            />
            <Box style={{ textAlign: "-webkit-center", marginTop: 30 }}>
            {/* <Typography
              variant="h3"
              style={{
                maxWidth: 300,
                textAlign: "center",
                fontWeight: 500,
              }}
            >
              이모지 <span style={{ fontWeight: "900", color: '#e38e8e' }}>TOP 3</span>
            </Typography> */}
            <img style={{height: 90, marginTop: -40, marginBottom: -15}} src={top3_logo} />
            </Box>
          <Box
            style={{ textAlign: "-webkit-center", marginTop: 10, marginBottom: 50 }}
          >
            <Typography
              variant="h4"
              style={{
                maxWidth: 500,
                textAlign: "center",
                fontWeight: 500,
              }}
            >
              최근 7일간{" "}
              <span style={{ fontWeight: "900", color: '#743531' }}>가장 인기 있는 이모지!</span>
            </Typography>
            <Box style={{textAlign: 'right', marginTop: 30}}>
              <TopEmojiDetail emojiTotal={emojiTotal}/>
            </Box>
          </Box>
          <div style={{position: 'relative', marginTop: 10}}>
            <img style={{width: 650, marginTop: 200, marginLeft: -9}} src={stage} />
            <TopFirst topEmoji={topEmoji}/>
            {/* <Toolbar style={{ marginTop: -90 }}> */}
            <TopSecond topEmoji={topEmoji}/>
            <TopThird topEmoji={topEmoji}/>
            {/* </Toolbar> */}
          </div>
        </Box>
      : null
      }
    </Box>
  );
}
