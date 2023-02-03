import React from 'react';
import "../../font/font.css";
import {
    Box,
} from '@mui/material';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area
} from "recharts";

export default function TopEmojiChart({emojiTotal}) {
  return (
    <Box sx={{marginLeft: '5%', marginBottom: '2%'}}>
        <ComposedChart
        width={500}
        height={450}
        data={emojiTotal}
        margin={{
            top: 40,
            right: 80,
            bottom: 10,
            left: -20
        }}
        >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis
            fontFamily='cookierun-bold'
            style={{color: ''}}
            dataKey="name"
            label={{position: "insideBottomRight", offset: 0 }}
        />
        <YAxis label={{ angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" barSize={60} fill="#7F6F10" />
        </ComposedChart>
    </Box>
  )
}