import * as React from 'react';
import {useEffect, useState} from 'react';
import {styled, useTheme} from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Topbar from "./Topbar";
import sidebarData from "./SidebarData";
import {Box, ListItem} from "@mui/material";
import {Link} from "react-router-dom";
import MuiAppBar from '@mui/material/AppBar';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    background: "#366ac3",
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    background: "#366ac3",
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

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

function Sidebar() {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const [isActive, setIsActive] = useState(() => {
        let result = {}

        for (let item of sidebarData) {
            let temp = result
            temp[item.id] = false
            result = temp
        }
        return result
    })

    function handleIsActive(id) {
        let result = {}
        for (let item of sidebarData) {
            let temp = result
            temp[item.id] = false
            result = temp
        }
        result[id] = true
        localStorage.setItem('page', id)
        setIsActive(result)
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            <AppBar position="fixed" open={open}>
                <Topbar open={open} handleDrawerOpen={handleDrawerOpen}/>
            </AppBar>
            <Drawer variant="permanent" open={open}>w
                <DrawerHeader sx={{background: "#366ac3"}}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </DrawerHeader>
                <Divider/>
                <List sx={{background: "#366ac3"}}>
                    {
                        sidebarData.map((item) =>
                            <ListItem
                                onClick={() => handleIsActive(item.id)}
                                key={item.id}
                                component={Link}
                                to={item.path}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    background: isActive[item.id] ? 'white' : null,
                                    ":hover": {
                                        transition: "all 0.25s ease-in-out",
                                        background: isActive[item.id] ? 'rgb(158,189,231)' : "#739ee8",
                                    }
                                }}>
                                <ListItemIcon
                                    sx={{
                                        color: isActive[item.id] ? '#366ac3' : "white",
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.name} sx={{
                                    textDecoration: "none",
                                    color: isActive[item.id] ? '#366ac3' : "white",
                                    opacity: open ? 1 : 0,
                                }}/>
                            </ListItem>
                        )
                    }
                </List>
            </Drawer>
        </Box>
    );
}

export default Sidebar;