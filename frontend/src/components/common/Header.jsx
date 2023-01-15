import React from 'react';
import {
    Box,
    AppBar,
    Toolbar,
    Link,
    Tooltip,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';

export default function Header(){
    return(
        <Box sx={{flexGrow: 1}} >
            <AppBar position="static">
                <Toolbar sx={{bgcolor: '#FECD93'}}>
                    <div style={{width:'20%', textAlign: 'center'}}>
                        <Link sx={{fontWeight: '700'}} align="left" variant="h5" color="inherit" href="/" underline="none" >
                            IGE MOJI
                        </Link>
                    </div>
                    <div style={{width:'90%', textAlign:'right'}}>
                        <Link sx={{fontWeight: '500'}} align="right" variant="h6" color="inherit" href="/my-page" underline="none">
                            <IconButton color="inherit" sx = {{mt: -0.6}}>
                                <PersonIcon/>
                            </IconButton>
                            사용자님, 환영합니다!
                        </Link>
                        <Tooltip title="logout">
                            <IconButton color="inherit" sx = {{ml: 2,mt: -0.6}}>
                                <LogoutIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

