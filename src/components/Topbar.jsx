import * as React from 'react';
import {styled} from '@mui/material/styles';
import {Box} from "@mui/material";
import MuiAppBar from '@mui/material/AppBar';
import '../css/Topbar.css';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

function Topbar() {

    return (
        <Box>
            <AppBar position="fixed">
                <div className="top__bar">
                    <div className="label__block">

                    </div>
                </div>
            </AppBar>
        </Box>
    );
}

export default Topbar;