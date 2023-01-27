import React, {useState} from "react";
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
} from '@mui/material';
import PropsTypes from 'prop-types';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CloseIcon from '@mui/icons-material/Close';

import EditPage from "../components/mypage/EditPage";
// import MadePage from '../components/mypage/MadePage';
// import DonePage from '../components/mypage/DonePage';

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

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: 700,
    width: 650,
    bgcolor: "background.paper",
    border: "2px solid #FFFFFF",
    borderRadius: '25px',
    boxShadow: 24,
    p: 4,
  };

export default function MyPage(){
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const [value, setValue] = React.useState(0);
    const [emojiData, setEmojiData] = useState([]);
    
    const [emojiState, setEmojiState] = useState(false);
    
    // const [userId, setUserId] = useState(null);
    // const [emojiName, setEmojiName] = useState(null);
    // const [emojiImage, setEmojiImage] = useState([]);
    // const [emoji, setEmoji] = useState(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    async function getAllData(){
        try{
    
            const data = {user_id: 1};
            fetch(`http://localhost:8080/api/v1/emojis/mypage/upload?user_id=${data.user_id}`, {
              method: 'GET'
            })
            .then((response) => {
                // console.log(response);
                return response.json();
            })
            .then((data) => {
                if(data[1] !== 'PRODUCT_DOES_NOT_EXIST'){
                    setEmojiState(true);
                }
                setEmojiData(data);
                // console.log("data[0].user_id_id>> ", data[0].user_id_id);
                // console.log("data[0].name>> ", data[0].name);
                // console.log("data[0].image>> ", data[0].image);
                // console.log("data[0]>> ", data[0]);

                // setUserId(data[0].user_id_id);
                // setEmojiName(data[0].name);
                // setEmojiImage(data[0].image);
                // setEmoji(data[0]);
                // 0번째 전체 데이터 불러오기: console.log("data[0]", data[0]);
            })
        } catch(err){
            console.log(err)
        }
    }

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
                        <Tab label="내가 만든 이모지" {...a11yProps(1)} onClick={getAllData}/>
                    </Tabs>
                </Box>

                <TabPanel value={value} index={0}>
                    {/* 내가 했던 거지롱~😜 */}
                    {/* <DonePage/> */}
                    
                </TabPanel>
                <TabPanel value={value} index={1} >
                    {/* 내가 만든 거지롱~😜 */}
                    <Box>
                        {
                        emojiState === true
                       ? <Grid container spacing={3} style={{justifyContent: 'center'}}>
                         {emojiData?.map((e) => (
                          <Grid item key={e.user_id_id} xs={12} sm={6} md={4}>  
                            <Button onClick={() => setOpen(true)}>
                              <Card sx={{width: 250, textAlign:'initial'}}>
                                <Toolbar>
                                  <div style={{marginLeft: '-30px'}}>
                                    <CardHeader
                                      avatar={    
                                        <Avatar><EmojiEmotionsIcon/></Avatar>
                                      }
                                      title={e.name}
                                      // subheader={e.image}
                                    />
                                  </div>
                                </Toolbar>

                                <CardMedia
                                  component="img"
                                  height="194"
                                  image={e.image[0]}
                                />
                              </Card>
                            </Button>
                          </Grid>
                        ))}
                      </Grid>
                      : null
                        }
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
                            sx={{ mb: 3, color: "#737458", fontFamily: "Itim"}}
                          >
                            <Toolbar sx={{mt: -4}}>
                              <div style={{width: '120%', textAlign: 'right'}}>
                                <Typography
                                  component="h1"
                                  variant='h5'
                                  textAlign='center'
                                  color='text.primary'
                                  gutterBottom
                                  fontStyle='bold'
                                  fontFamily='Itim'
                                >
                                  이모지 수정
                                </Typography>
                              </div>
                              <div style={{width: '0%',textAlign: 'right'}}>
                                <IconButton onClick={() => setOpen(false)}>
                                  <CloseIcon fontWeight='300'/>
                                </IconButton>
                              </div>
                            </Toolbar>
                            <EditPage/>
                          </Typography>
                        </Box>
                      </Modal>
                    </Box>
                </TabPanel>
            </Box>
        </Container>
    );
}