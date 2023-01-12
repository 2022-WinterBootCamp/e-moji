import React from 'react';
import {
    Box,
    AppBar,
    Toolbar,
    Link,
} from '@mui/material';

export default function Header(){
    return(
        <Box sx={{flexGrow: 1}} >
            <AppBar position="static">
                <Toolbar sx={{bgcolor: '#FECD93'}}>
                    <Link variant="h5" color="inherit" href="/" underline="none" sx={{flexGrow: 1}}>
                        IGE MOJI
                    </Link>
                    <Link variant="h6" color="inherit" href="/my-page" underline="none">
                        My Page
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    )
}