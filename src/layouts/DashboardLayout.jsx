import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet, useNavigate } from 'react-router-dom';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import logo from '../assets/images/Fingerprintbutton.png';
import menuItems from '../data/MenuItem';
import { Avatar, Stack } from '@mui/material';
import NavbarComps from '../components/NavbarComponents/NavbarComps';
import { TbLogout2 } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { BiLogOut } from 'react-icons/bi';

function ResponsiveDrawer(props) {
    const { window } = props;

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = React.useState({
        name: 'Dashboard',
        icon: <DashboardOutlinedIcon />,
    });

    // State to store the selected list item's name and icon
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // Function to handle list item clicks and update the selected item's name and icon
    const handleListItemClick = (itemName, icon, route) => {
        setSelectedItem({
            name: itemName,
            icon: icon,
        });
        navigate(route);
        setMobileOpen(false);
    };

    const location = useLocation();
    const pageTitle = menuItems?.find((item) => item.link === location.pathname && item?.text);
    useEffect(() => {
        setSelectedItem({ icon: pageTitle?.icon, name: pageTitle?.text });
    }, []);
    const drawer = (
        <div>
            <img
                src={logo}
                alt='Logo'
                className={'ms-8 w-16  mt-4'}
                style={{ marginLeft: '15px' }}
            />

            <List
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '91vh',
                }}
            >
                <Stack>
                    {menuItems?.map((item, index) => (
                        <ListItem
                            key={index}
                            disablePadding
                            // component={Link}
                            // to={item.link}
                            sx={{ paddingY: '5px', cursor: 'pointer' }}
                            onClick={() => {
                                handleListItemClick(item.text, item.icon, item.link);
                            }}
                        >
                            <ListItemIcon>
                                {' '}
                                <div
                                    style={{
                                        backgroundColor:
                                            location?.pathname === item.link
                                                ? '#353535'
                                                : 'transparent',
                                        borderRadius: '0 15px 15px 0',
                                        padding: '8px',
                                        paddingLeft: '20px',
                                        color:
                                            location?.pathname === item.link
                                                ? '#ffffff'
                                                : '#f15a2d',
                                    }}
                                >
                                    {item.icon} {item.path}
                                </div>
                            </ListItemIcon>
                            <ListItemText sx={{ color: '#767676' }} primary={item.text} />
                        </ListItem>
                    ))}
                </Stack>

                <Stack>
                    <ListItem
                        sx={{ paddingY: '5px', cursor: 'pointer' }}
                        onClick={() => {
                            navigate('/');
                        }}
                    >
                        <ListItemIcon sx={{ color: 'primary.100', marginLeft: '5px' }}>
                            <BiLogOut size={'20px'} />
                        </ListItemIcon>

                        <ListItemText
                            sx={{ color: 'primary.500', marginLeft: '-22px' }}
                            primary={'Logout'}
                        />
                    </ListItem>
                </Stack>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position='fixed'
                sx={{
                    width: { sm: `calc(100% - 200px)` },
                    ml: { sm: `200px` },
                }}
            >
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}
                >
                    <Stack>
                        <IconButton
                            color='inherit'
                            aria-label='open drawer'
                            edge='start'
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Stack direction={'row'} alignItems={'center'} gap={1}>
                            <Typography variant={'headlineLarge'}>{selectedItem.icon}</Typography>{' '}
                            <Typography variant={'headlineLarge'}>{selectedItem.name}</Typography>
                        </Stack>
                    </Stack>
                    <Stack direction='row'>
                        <NavbarComps />
                    </Stack>
                </Toolbar>
            </AppBar>
            <Box
                component='nav'
                sx={{
                    width: { xs: 0, sm: 200 },
                    flexShrink: { sm: 0 },
                }}
                aria-label='mailbox folders'
            >
                <Drawer
                    container={container}
                    variant='temporary'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { sm: 'block', md: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: 200,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant='permanent'
                    open
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: 200,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component='main'
                sx={{
                    flexGrow: 1,

                    width: { sm: `calc(100% - 200px)` },
                    backgroundColor: 'background.main',
                }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}

export default ResponsiveDrawer;
