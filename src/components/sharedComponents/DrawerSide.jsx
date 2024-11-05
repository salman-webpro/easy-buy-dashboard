import React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';

export default function DrawerSide({ anchor, open, onClose, drawerContent }) {
    const toggleDrawer = (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        onClose();
    };

    return (
        <div>
            <Drawer anchor={anchor} open={open} onClose={toggleDrawer}>
                {drawerContent}
            </Drawer>
        </div>
    );
}
