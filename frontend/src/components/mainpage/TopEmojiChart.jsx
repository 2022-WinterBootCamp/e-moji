import React from 'react';
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
            top: 20,
            right: 80,
            bottom: 20,
            left: 20
        }}
        >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis
            dataKey="name"
            label={{position: "insideBottomRight", offset: 0 }}
        />
        <YAxis label={{ value: "count", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" barSize={60} fill="#e38e8e" />
        </ComposedChart>
    </Box>
  )
}