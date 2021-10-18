import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import logo from '../../src/assets/images/Artboard-1.png';
import {  BackupTableOutlined, PeopleOutline, SubjectOutlined } from '@mui/icons-material';
import { useHistory, useLocation } from 'react-router-dom';


const drawerWidth = 240;



const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
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

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
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


const Layout = ({ children }) => {
    let history = useHistory();
    let location = useLocation();
    const loggedInUser = async()=>{
        const userFromStorage = await sessionStorage.getItem('user')
        return userFromStorage;
    }
    console.log(loggedInUser)
    const menuItems = [
        {
            text: 'Home',
            icon: <SubjectOutlined color="secondary" />,
            path: '/dashboard'
        },
        {
            text: 'Customers',
            icon: <PeopleOutline color="secondary" />,
            path: '/dashboard/customers'
        },
        {
            text: 'Orders',
            icon: <BackupTableOutlined color="secondary" />,
            path: '/dashboard/orders'
        },

    ];

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" className='dashboard-container' open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        style={{
                            flexGrow: 1,
                        }}>
                        Hotshot Automotive
                    </Typography>
                    {/* <Avatar src={loggedInUser.img} /> */}
                </Toolbar>
            </AppBar>
            <div className="drawer-main">
                <Drawer
                    sx={{
                        '& .MuiDrawer-paper': {
                            background: 'none'
                        },
                    }}
                    variant="permanent" open={open}>
                    <DrawerHeader>
                        <img src={logo} alt="Hotshot Automotive Logo" className='drawer-logo' />
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {menuItems.map((item) => (
                            <ListItem 
                            button 
                            key={item.text}
                            onClick={() => history.push(item.path)}
                            className={location.pathname === item.path ? 'active' : ''}
                            >
                                <ListItemIcon>
                                        {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} style={{color:'black'}} />
                            </ListItem>
                        ))}
                    </List>

                </Drawer>
            </div>
            <div
                style={{
                    marginTop: '70px',
                    padding: '15px'
                }}
            >
                {children}
            </div>
        </Box>

    );
};

export default Layout;