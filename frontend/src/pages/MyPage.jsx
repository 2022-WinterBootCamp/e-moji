import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Container,
} from "@mui/material";
import PropsTypes from "prop-types";

import { getAccess } from "../auth/tokenManager";
import { ReduxModule } from "../auth/ReduxModule";

import MadePage from '../components/mypage/MadePage';
import DonePage from '../components/mypage/DonePage';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpannel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

TabPanel.PropsTypes = {
  children: PropsTypes.node,
  index: PropsTypes.number.isRequired,
  value: PropsTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-$index`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 750,
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #FFFFFF",
  borderRadius: "25px",
  boxShadow: 24,
  p: 4,
};

export default function MyPage() {
  const what = getAccess();
  const userIdtoRedux = ReduxModule().decodeInfo?.id;

  const [value, setValue] = React.useState(0);
  const [emojiData, setEmojiData] = useState({});
  const [emojiResult, setEmojiResult] = useState({});

  const [doneState, setDoneState] = useState(false);
  const [didState, setDidState] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const myUserID = userIdtoRedux;
  // 내가 만든 이모지 Api
  async function getAllData() {
    try {
      const data = { user_id: myUserID };
      fetch(
        `http://localhost:8080/api/v1/emojis/mypage/upload?user_id=${data.user_id}`,
        {
          method: "GET",
          headers: {
            Authorization: `${what.value}`,
          },
        }
      )
        .then((response) => {
          // console.log(response);
          return response.json();
        })
        .then((data) => {
          if (data[myUserID] !== "PRODUCT_DOES_NOT_EXIST") {
            setDoneState(true);
          }
          setEmojiData(data);
          console.log("data>>> ", data);
        });
    } catch (err) {
      console.log(err);
    }
  }

  // 내가 헸던 이모지 Api
  async function getDidData() {
    try {
      const data = { user_id: myUserID };
      fetch(
        `http://localhost:8080/api/v1/emojis/mypage/result?user_id=${data.user_id}`,
        {
          method: "GET",
          headers: {
            Authorization: `${what.value}`,
          },
        }
      )
        .then((response) => {
          // console.log(response);
          return response.json();
        })
        .then((data) => {
          if (data[myUserID] !== "PRODUCT_DOES_NOT_EXIST") {
            setDidState(true);
          }
          setEmojiResult(data);

          console.log("data>>> ", data);
        });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (what !== "") {
      getDidData();
    }
  }, [myUserID]);

  return (
    <Container maxWidth="md">
      <Box sx={{ width: "100%", mt: 13 }}>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          alignItems="center"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
            variant="fullWidth"
            TabIndicatorProps={{ style: { background: "#FECD93" } }}
            textColor="inherit"
          >
            <Tab
              label="내가 했던 이모지"
              {...a11yProps(0)}
              onClick={getDidData}
            />
            <Tab
              label="내가 만든 이모지"
              {...a11yProps(1)}
              onClick={getAllData}
            />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          {/* 내가 했던 이모지 */}
          <DonePage didState={didState} emojiResult={emojiResult}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          {/* 내가 만든 이모지 */}
          <MadePage doneState={doneState} emojiData={emojiData}/>
        </TabPanel>
      </Box>
    </Container>
  );
}
