import React from 'react';
import IconButton from '@mui/material/IconButton';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Avatar, Badge, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NavbarComps = () => {
    const [profileMenu, setProfileMenu] = React.useState(null);
    const openNavMenu = Boolean(profileMenu);
    const handleProfileClick = (event) => {
        setProfileMenu(event.currentTarget);
    };
    const handleMangerProfile = () => {
        setProfileMenu(null);
        navigate('manager-profile');
    };
    const handleStoreProfile = () => {
        setProfileMenu(null);
        navigate('store-profile');
    };
    const handleProfileClose = () => {
        setProfileMenu(null);
    };
    const navigate = useNavigate();
    return (
        <>
            <IconButton sx={{ color: 'background.main' }}>
                {/*<Badge color={'red'} variant='dot' invisible={false}>*/}
                <NotificationsNoneOutlinedIcon />
                {/*</Badge>*/}
            </IconButton>
            <IconButton onClick={handleProfileClick}>
                <Avatar alt='Remy Sharp' src='' sx={{ width: 40, height: 40 }} />
            </IconButton>
            <Menu
                id='basic-menu'
                anchorEl={profileMenu}
                open={openNavMenu}
                onClose={handleProfileClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleMangerProfile} divider>
                    Manager Profile
                </MenuItem>

                <MenuItem onClick={handleStoreProfile}>Store Profile</MenuItem>
            </Menu>
        </>
    );
};

export default NavbarComps;
