import React, { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Container,
  Card,
  CardHeader,
  CardMedia,
  Button,
  Grid,
  Toolbar,
  Avatar,
  Modal,
  IconButton,
} from "@mui/material";
import PropsTypes from "prop-types";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CloseIcon from "@mui/icons-material/Close";

import CheckPage from "../components/mypage/CheckPage";
import { useEffect } from "react";
import { getAccess } from "../auth/tokenManager";
import { ReduxModule } from "../auth/ReduxModule";
import Lottie from "lottie-react";
import animationData from "../lotties/empty.json";
// import MadePage from '../components/mypage/MadePage';
// import DonePage from '../components/mypage/DonePage';

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
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const [value, setValue] = React.useState(0);
  const [emojiData, setEmojiData] = useState({});
  const [emojiResult, setEmojiResult] = useState({});
  const [emojiId, setEmojiId] = useState(1);

  const [emojiState, setEmojiState] = useState(false);
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
            setEmojiState(true);
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
  }, []);

  // 내가 만든 이모지
  function madeList() {
    var array = [];

    for (let index = 0; index < Object.keys(emojiData).length; index++) {
      array.push(
        <Grid
          item
          key={emojiData[index].id}
          xs={12}
          sm={6}
          md={4}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          {/* mui의 button은 자동 대문자화가 되기 떄문에 textTransform: 'none' 설정 */}
          <Button
            onClick={() => {
              setOpen(true);
              setEmojiId(emojiData[index].id);
            }}
            style={{ textTransform: "none" }}
          >
            <Card>
              <Toolbar>
                <Box style={{ marginLeft: "-30px" }}>
                  <CardHeader
                    avatar={
                      <Avatar>
                        <EmojiEmotionsIcon />
                      </Avatar>
                    }
                    title={emojiData[index].name}
                    subheader={`made by ${emojiData[index].alias}`}
                  />
                </Box>
              </Toolbar>
              <CardMedia
                component="img"
                height="194"
                image={emojiData[index].image[0]}
              />
            </Card>
          </Button>
        </Grid>
      );
    }
    return array;
  }
  // 내가 했던 이모지
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
          {/* 내가 했던 거지롱~😜 */}
          {/* <DonePage/> */}
          <Box>
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
        </TabPanel>
        <TabPanel value={value} index={1}>
          {/* 내가 만든 거지롱~😜 */}
          <Box>
            {emojiState === true ? (
              <Grid
                container
                spacing={4}
                direction="row"
                justifyContent="space-evenly"
                alignItems="c"
              >
                {madeList()}
              </Grid>
            ) : (
              <Box>
                <Lottie
                  animationData={animationData}
                  style={{ height: "200px", marginTop: 200 }}
                />
                <Typography textAlign="center" style={{ marginTop: -15 }}>
                  내가 만든 이모지가 존재하지 않습니다.
                </Typography>
              </Box>
            )}
          </Box>
        </TabPanel>
      </Box>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            fontWeight="bold"
            component="h2"
            sx={{ mb: 3, color: "#737458", fontFamily: "Itim" }}
          >
            <Toolbar sx={{ mt: -4 }}>
              <Box style={{ width: "120%", textAlign: "right" }}>
                <Typography
                  variant="h5"
                  textAlign="center"
                  color="text.primary"
                  gutterBottom
                  fontStyle="bold"
                  fontFamily="Itim"
                  sx={{ mt: 3 }}
                >
                  이모지 조회
                </Typography>
              </Box>
              <Box style={{ width: "0%", textAlign: "right" }}>
                <IconButton onClick={() => setOpen(false)}>
                  <CloseIcon fontWeight="300" />
                </IconButton>
              </Box>
            </Toolbar>
            <CheckPage emojiId={emojiId} />
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
}
