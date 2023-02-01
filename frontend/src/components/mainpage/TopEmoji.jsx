import React, {useEffect, useState} from "react";
import { 
  Box, 
  Typography,
  Toolbar 
} from "@mui/material";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import TopFirst from "./TopFirst";
import TopSecond from "./TopSecond";
import TopThird from "./TopThird";

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
            <Box style={{ textAlign: "-webkit-center", marginTop: -30 }}>
            <Typography
              variant="h3"
              style={{
                color: "#FFFFFF",
                maxWidth: 300,
                textAlign: "center",
                fontWeight: 500,
              }}
            >
              이모지 <span style={{ fontWeight: "900" }}>TOP 3</span>
            </Typography>
          </Box>
          <Box
            style={{ textAlign: "-webkit-center", marginTop: 10, marginBottom: 50 }}
          >
            <Typography
              variant="h4"
              style={{
                color: "#FFFFFF",
                maxWidth: 500,
                textAlign: "center",
                fontWeight: 500,
              }}
            >
              최근 7일간{" "}
              <span style={{ fontWeight: "900" }}>가장 인기 있는 이모지!</span>
            </Typography>
          </Box>
          <Box>
            <TopFirst topEmoji={topEmoji}/>
            <Toolbar style={{ marginTop: -130, marginBottom: 10 }}>
              <TopSecond topEmoji={topEmoji}/>
              <TopThird topEmoji={topEmoji}/>
            </Toolbar>
          </Box>
          <Box>
            <ComposedChart
              layout="vertical"
              width={600}
              height={270}
              data={emojiTotal}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" barSize={20} fill="#413ea0" />
            </ComposedChart>
          </Box>
        </Box>
      : null
      }
    </Box>
  );
}
