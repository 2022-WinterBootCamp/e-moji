import React from 'react';
import {
    Box,
    Container,
    Typography,
    Avatar,
    Toolbar,
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
import first from './1st.png';
import second from './2nd.png';
import third from './3rd.png';

export default function TopEmoji() {

    return (
        <Box style={{textAlign: 'center'}}>
            <Box style={{textAlign: '-webkit-center', marginTop: -30}}>
                <Typography variant='h3' style={{color: "#FFFFFF", maxWidth: 300, textAlign: 'center', fontWeight: 500}}>
                    이모지 <span style={{fontWeight: '900'}}>TOP 3</span>
                </Typography>
            </Box>
            <Box style={{textAlign: '-webkit-center', marginTop: 10, marginBottom: 50}}>
                <Typography variant='h5' style={{color: "#FFFFFF", maxWidth: 500, textAlign: 'center', fontWeight: 500}}>
                    최근 7일간 <span style={{fontWeight: '900'}}>가장 인기 있는 이모지!</span>
                </Typography>
            </Box>

            <Box 
                width='200px' height='210px'
                style={{backgroundColor: '#FFFFFF', textAlign: '-webkit-center', borderRadius: 30, marginTop: -30, marginLeft: 'auto', marginRight: 'auto'}}
            >
                <Typography 
                    style={{color: '#FFFFFF', fontWeight: '900', backgroundColor: 'gold', width: '70px', borderRadius: 10}}>
                    Top 1
                </Typography>
                <img style={{position: 'relative', height: '110px'}} src={first}/>
                <Avatar sx={{position: 'relative', height:"70px", width: "70px", marginTop: -14, marginBottom: 5}} src={data[0].emoji_image}/>
                
                <Typography variant='h5' style={{fontWeight: 'bold'}}>
                    {data[0].emoji_name}
                </Typography> 
                <Typography>
                    made by {data[0].emoji_alias}
                </Typography>
            </Box>
            <Toolbar style={{marginTop: -130, marginBottom: 10}}>
                <Box 
                    width='200px' height='200px'
                    style={{backgroundColor: '#FFFFFF', textAlign: '-webkit-center', borderRadius: 30, marginLeft: 'auto', marginRight: '110px', marginTop: 10}}
                >
                    <Box >
                        <Typography style={{color: '#FFFFFF', fontWeight: '900', backgroundColor: 'silver', width: '70px', borderRadius: 10}}>
                            Top 2
                        </Typography>
                        <img style={{position: 'relative', height: '100px'}} src={second}/>
                        <Avatar sx={{position: 'relative', height:"70px", width: "70px", marginTop: -12.5, marginBottom: 3.5}} src={data[1].emoji_image}/>
                    </Box>
                    <Typography variant='h5' style={{fontWeight: 'bold'}}>
                        {data[1].emoji_name}
                    </Typography> 
                    <Typography>
                        made by {data[1].emoji_alias}
                    </Typography>
                </Box>
                <Box 
                    width='200px' height='200px'
                    style={{backgroundColor: '#FFFFFF', textAlign: '-webkit-center', borderRadius: 30, marginLeft: '110px', marginRight: 'auto', marginTop: 10}}
                >
                    <Box>
                        <Typography style={{color: '#FFFFFF', fontWeight: '900', backgroundColor: 'rosyBrown', width: '70px', borderRadius: 10}}>
                            Top 3
                        </Typography>
                        <img style={{position: 'relative', height: '100px'}} src={third}/>
                        <Avatar sx={{position: 'relative', height:"70px", width: "70px", marginTop: -12.5, marginBottom: 3.5}} src={data[2].emoji_image}/>
                    </Box>
                    <Typography variant='h5' style={{fontWeight: 'bold'}}>
                        {data[2].emoji_name}
                    </Typography> 
                    <Typography>
                        made by {data[2].emoji_alias}
                    </Typography>
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
                        left: 20
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis type="number" />
                    <YAxis dataKey="emoji_name" type="category"/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" barSize={20} fill="#413ea0" />
                </ComposedChart>
            </Box>
        </Box>
    )
}

const data = [
    {
        'emoji_image': 'https://item.kakaocdn.net/do/fd0050f12764b403e7863c2c03cd4d2d7154249a3890514a43687a85e6b6cc82',
        'emoji_name': '짱구우',
        'emoji_alias': 'mojji',
        'count': 102
    },
    {
        'emoji_image': 'https://w.namu.la/s/08c6a259933bf0159253cd7304180960a776791dcba49dba89d0e28648c20e544d87779113bcd874491d22a67d2cd4b9aab39683c3d27f90929872ef5b5ea1049cdff7f2eec08059301f7485257d7b5c24397c72485114cf84642c12bf7a4bf9',
        'emoji_name': '심슨',
        'emoji_alias': 'test',
        'count': 50
    },
    {
        'emoji_image': 'https://w.namu.la/s/254294b86f5ce9b28d6b319b106860f192b9f26bedf411afca1ca7ed73e640ac3111131fe99ace36182921fecc96ea4eafa5df13ea74fa079397d1ad66b2a840b23b64f8a5779a85c1db677a173f2df4b0cdb7cc6d33356cc98630babe964a17',
        'emoji_name': '커뷔',
        'emoji_alias': 'yeye',
        'count': 10
    }
]