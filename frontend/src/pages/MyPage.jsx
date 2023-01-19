import React from "react";
import {
    Box,
    Typography,
    Tabs,
    Tab,
    Container,
} from '@mui/material';
import PropsTypes from 'prop-types';

import DonePage from '../components/mypage/DonePage';
import MadePage from '../components/mypage/MadePage';

function TabPanel(props){
    const {children, value, index, ...other} = props;

    return(
        <div
            role="tabpanel"
            hidden = {value !== index}
            id= {`simple-tabpannel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p:3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.PropsTypes = {
    children: PropsTypes.node,
    index: PropsTypes.number.isRequired,
    value: PropsTypes.number.isRequired
};

function a11yProps(index){
    return{
        id: `simple-tab-$index`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}

export default function MyPage(){
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <Container maxWidth="md">
            <Box sx={{width: '100%', mt: 13}}>
                <Box sx={{borderBottom: 1, borderColor: "divider"}} alignItems='center'>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        centered
                        variant="fullWidth"
                        TabIndicatorProps={{style: {background: '#FECD93'}}}
                        textColor="inherit"
                    >
                        <Tab label="내가 했던 이모지" {...a11yProps(0)}/>
                        <Tab label="내가 만든 이모지" {...a11yProps(1)}/>
                    </Tabs>
                </Box>

                <TabPanel value={value} index={0} alignItems="">
                    {/* 내가 했던 거지롱~😜 */}
                    <DonePage/>
                    
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {/* 내가 만든 거지롱~😜 */}
                    <MadePage/>
                </TabPanel>
            </Box>
        </Container>
    );
}