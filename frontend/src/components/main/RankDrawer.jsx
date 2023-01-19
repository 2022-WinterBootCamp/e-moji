import * as React from 'react';
import {
  Box,
  Drawer,
  CssBaseline,
  Toolbar,
  Divider,
  Typography,
  Avatar,
} from '@mui/material';
// import {
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   CardMedia,
//   List,
//   Card,
//   CardContent,
//   ListItemAvatar,
// } from '@mui/material';

import MainPage from '../../pages/MainPage';

const drawerWidth = 250;

export default function RankDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
      <Toolbar />
        {/* 이모지 순위 - 아이콘 경계 색상, 이미지 가운데 정렬로 해보기 */}
        {/* <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                style={{ display:'block', justifyContent: 'center'}}
                variant="rounded"
                sx={{width: 200, height: 200}}
                src="https://images.mypetlife.co.kr/content/uploads/2019/08/09153141/hang-niu-Tn8DLxwuDMA-unsplash-e1565933329979.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              sx={{ml: 3}}
              primary="냥이~"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                  >
                    made by mojji
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider
          //variant="inset" component="li"
          />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                variant="rounded"
                src="https://www.artinsight.co.kr/data/tmp/2110/20211020130553_rodbhczf.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="유미의 귀여운 세포들"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                  >
                    made by mojji
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider/>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar 
                variant="rounded" 
                src="https://upload.wikimedia.org/wikipedia/ko/thumb/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png/230px-%EC%8B%A0%EC%A7%B1%EA%B5%AC.png" />
            </ListItemAvatar>
            <ListItemText
              primary="짱구야~ 놀장"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                  >
                    made by mojji
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider/>
        </List> */}
        <div>
          <Typography sx={{mt: 4, textAlign: 'center', color:'grey'}} 
                    fontWeight='bold' fontSize='20px' >
            이모지 순위
          </Typography>
          <Divider/>

          <Box textAlign="center" sx={{mt: 3}}>
            <Avatar
              variant="rounded"
              sx={{ fontWeight: "20px", width: 160, height: 160, ml: 5.5 }}
              src="https://images.mypetlife.co.kr/content/uploads/2019/08/09153141/hang-niu-Tn8DLxwuDMA-unsplash-e1565933329979.jpg"
            />
            냥이
            <Typography variant="body2" color="grey" sx={{mb: 1.5}}>
              mojji
            </Typography>
          </Box>
          <Divider/>

          <Box textAlign="center" sx={{mt: 3}}>
            <Avatar
              variant="rounded"
              sx={{ fontWeight: "20px", width: 160, height: 160, ml: 5.5 }}
              src="https://images.mypetlife.co.kr/content/uploads/2019/08/09153141/hang-niu-Tn8DLxwuDMA-unsplash-e1565933329979.jpg"
            />
            냥이
            <Typography variant="body2" color="grey" sx={{mb: 1.5}}>
              mojji
            </Typography>
          </Box>
          <Divider/>

          <Box textAlign="center" sx={{mt: 3}}>
            <Avatar
              variant="rounded"
              sx={{ fontWeight: "20px", width: 160, height: 160, ml: 5.5 }}
              src="https://images.mypetlife.co.kr/content/uploads/2019/08/09153141/hang-niu-Tn8DLxwuDMA-unsplash-e1565933329979.jpg"
            />
            냥이
            <Typography variant="body2" color="grey" sx={{mb: 1.5}}>
              mojji
            </Typography>
          </Box>
          <Divider/>
        </div>

        {/* <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem disablePadding>
              
            </ListItem>
          </List>
          <Divider />

          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon/>
                </ListItemIcon>
                <ListItemText primary={'All mail'}/>
              </ListItemButton>
            </ListItem>
          </List>

          <Divider />
        </Box> */}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <MainPage/>
      </Box>
    </Box>
  );
}
