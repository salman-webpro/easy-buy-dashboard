import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import NavbarComps from '../components/NavbarComponents/NavbarComps';
import AppBar from '@mui/material/AppBar';
import { Outlet, useLocation } from 'react-router-dom';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';

const SingleLayout = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    let url = location.pathname;
    let header = 'N/A';
    if (url.includes('category-product')) {
        header = 'Items ';
        // console.log(url.includes('category-product'));
        // const parts = url.split('/');
        // if (parts.length > 1) {
        //     header = parts[parts.length - 1];
        // }
    }
    url = location.pathname.split('/').pop();

    if (url === 'manager-profile') {
        header = 'Manager Profile';
    } else if (url === 'store-profile') {
        header = 'Store Profile';
    }

    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <>
            <AppBar
                position='fixed'
                sx={{
                    // width: { sm: `calc(100% - 240px)` },
                    ml: { sm: `200px` },
                    marginBottom: '64px',
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
                        <Stack direction={'row'} alignItems={'center'}>
                            <IconButton sx={{ color: 'background.main' }} onClick={handleGoBack}>
                                <ArrowBackOutlinedIcon />
                            </IconButton>
                            <Typography variant='h6' noWrap component='div'>
                                {header}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack direction='row'>
                        <NavbarComps />
                    </Stack>
                </Toolbar>
            </AppBar>

            <Box style={{ marginTop: '64px', backgroundColor: 'sc.one', height: '100vh' }}>
                <Outlet />
            </Box>
        </>
    );
};

export default SingleLayout;
