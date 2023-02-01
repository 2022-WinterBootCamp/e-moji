import React, {useEffect} from "react";
import { 
  Box, 
  Typography, 
  Avatar, 
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
import first from "../img/top3/1st.png";
import second from "../img/top3/2nd.png";
import third from "../img/top3/3rd.png";

export default function TopEmoji() {
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
        });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getTopData()
  }, [])

  return (
    <Box style={{ textAlign: "center" }}>
      {place()}
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

      <Box
        width="200px"
        height="210px"
        style={{
          backgroundColor: "#FFFFFF",
          textAlign: "-webkit-center",
          borderRadius: 30,
          marginTop: -20,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Typography
          style={{
            color: "#FFFFFF",
            fontWeight: "900",
            backgroundColor: "gold",
            width: "70px",
            borderRadius: 10,
          }}
        >
          Top 1
        </Typography>
        <img style={{ position: "relative", height: "110px" }} src={first} />
        <Avatar
          sx={{
            position: "relative",
            height: "70px",
            width: "70px",
            marginTop: -14,
            marginBottom: 5,
          }}
          src={data[0].emoji_image}
        />

        <Typography variant="h5" style={{ fontWeight: "bold" }}>
          {data[0].emoji_name}
        </Typography>
        <Typography>made by {data[0].emoji_alias}</Typography>
      </Box>
      <Toolbar style={{ marginTop: -130, marginBottom: 10 }}>
        <Box
          width="200px"
          height="200px"
          style={{
            backgroundColor: "#FFFFFF",
            textAlign: "-webkit-center",
            borderRadius: 30,
            marginLeft: "auto",
            marginRight: "110px",
            marginTop: 10,
          }}
        >
          <Box>
            <Typography
              style={{
                color: "#FFFFFF",
                fontWeight: "900",
                backgroundColor: "silver",
                width: "70px",
                borderRadius: 10,
              }}
            >
              Top 2
            </Typography>
            <img
              style={{ position: "relative", height: "100px" }}
              src={second}
            />
            <Avatar
              sx={{
                position: "relative",
                height: "70px",
                width: "70px",
                marginTop: -12.5,
                marginBottom: 3.5,
              }}
              src={data[1].emoji_image}
            />
          </Box>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            {data[1].emoji_name}
          </Typography>
          <Typography>made by {data[1].emoji_alias}</Typography>
        </Box>
        <Box
          width="200px"
          height="200px"
          style={{
            backgroundColor: "#FFFFFF",
            textAlign: "-webkit-center",
            borderRadius: 30,
            marginLeft: "110px",
            marginRight: "auto",
            marginTop: 10,
          }}
        >
          <Box>
            <Typography
              style={{
                color: "#FFFFFF",
                fontWeight: "900",
                backgroundColor: "rosyBrown",
                width: "70px",
                borderRadius: 10,
              }}
            >
              Top 3
            </Typography>
            <img
              style={{ position: "relative", height: "100px" }}
              src={third}
            />
            <Avatar
              sx={{
                position: "relative",
                height: "70px",
                width: "70px",
                marginTop: -12.5,
                marginBottom: 3.5,
              }}
              src={data[2].emoji_image}
            />
          </Box>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            {data[2].emoji_name}
          </Typography>
          <Typography>made by {data[2].emoji_alias}</Typography>
        </Box>
      </Toolbar>
      <Box>
        <ComposedChart
          layout="vertical"
          width={600}
          height={270}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="emoji_name" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="emoji_count" barSize={20} fill="#413ea0" />
        </ComposedChart>
      </Box>
    </Box>
  );
}

const data = [
  {
    emoji_image:
      "https://item.kakaocdn.net/do/fd0050f12764b403e7863c2c03cd4d2d7154249a3890514a43687a85e6b6cc82",
    emoji_name: "짱구",
    emoji_alias: "mojji",
    emoji_count: 102,
  },
  {
    emoji_image:
      "https://w.namu.la/s/08c6a259933bf0159253cd7304180960a776791dcba49dba89d0e28648c20e544d87779113bcd874491d22a67d2cd4b9aab39683c3d27f90929872ef5b5ea1049cdff7f2eec08059301f7485257d7b5c24397c72485114cf84642c12bf7a4bf9",
    emoji_name: "심슨",
    emoji_alias: "test",
    emoji_count: 50,
  },
  {
    emoji_image:
      "https://img.lb.joynews24.com/v1/facebookexternalhit/face/626x352/5987cdda14c1d0.jpg",
    emoji_name: "경혜씨 쏴랑해~",
    emoji_alias: "yeye",
    emoji_count: 10,
  },
];
