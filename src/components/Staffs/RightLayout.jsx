import React, { useState } from 'react';
import { Avatar, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import StaffTop from './StaffTop';
import PersonalDetails from './PersonalDetails';
import AddressDetails from './AddressDetails';
import CategoryAdd from '../Categories/CategoryAdd';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import AddStaff from './AddStaff';
import Box from '@mui/material/Box';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
const RightLayout = ({ selectedStaff }) => {
    const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false); // State for the right drawer
    const [staffData, setStaffData] = useState();
    const toggleAddDrawer = (data) => {
        setIsAddDrawerOpen(!isAddDrawerOpen);
        setStaffData(data);
        // setProductOpen(false);
    };
    return (
        <Stack
            fullWidth
            sx={{
                height: '93vh',
                padding: '24px',
                backgroundColor: 'background.main',
                position: 'relative',
            }}
        >
            {/* Main Stack */}
            <Stack backgroundColor='white.main' width={'100%'}>
                <StaffTop selectedStaff={selectedStaff} />
            </Stack>
            <Stack backgroundColor='white.main' width={'100%'} mt={2}>
                <PersonalDetails selectedStaff={selectedStaff} />
            </Stack>
            <Stack backgroundColor='white.main' width={'100%'} mt={2}>
                <AddressDetails selectedStaff={selectedStaff} />
            </Stack>
            <Stack
                sx={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                }}
            >
                {/* <Button
                    onClick={() => toggleAddDrawer(staffData)}
                    variant='contained'
                    sx={{ borderRadius: '10%' }}
                >
                    + Add New
                </Button> */}
                <IconButton
                    onClick={() => toggleAddDrawer(staffData)}
                    variant='contained'
                    sx={{
                        width: '55px',
                        height: '55px',
                        borderRadius: '50%',
                        backgroundColor: 'primary.500',
                        color: 'white.main',
                        ':hover': {
                            backgroundColor: 'primary.800',
                            color: 'white.main',
                        },
                    }}
                >
                    <AddOutlinedIcon />
                </IconButton>
            </Stack>
            {/*  Drawer */}
            <Drawer anchor={'right'} open={isAddDrawerOpen} onClose={toggleAddDrawer}>
                <Box width={'483px'}>
                    <AddStaff toggleAddDrawer={toggleAddDrawer} />
                </Box>
            </Drawer>
        </Stack>
    );
};

export default RightLayout;
