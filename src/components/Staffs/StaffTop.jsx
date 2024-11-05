import React, { useState } from 'react';
import { Avatar, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AddStaff from './AddStaff';
import Drawer from '@mui/material/Drawer';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

const StaffTop = ({ selectedStaff }) => {
    const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false); // State for the right drawer
    const [staffData, setStaffData] = useState();
    // Function to toggle the right drawer
    const toggleAddDrawer = (data) => {
        setIsAddDrawerOpen(!isAddDrawerOpen);
        setStaffData(data);
        console.log(data);
        // setProductOpen(false);
    };
    return (
        <Stack
            width={'100%'}
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
        >
            <Stack direction={'row'} p={2} gap={2} alignItems='center'>
                <Avatar src={selectedStaff?.image} sx={{ width: '100px', height: '100px' }} />
                <Stack>
                    <Typography variant='titleLarge'>{selectedStaff?.name}</Typography>
                    <Typography variant='bodySmall'>{selectedStaff?.position}</Typography>
                    <Typography variant='bodySmall'>{`${selectedStaff?.address?.city}, ${selectedStaff?.address?.country}`}</Typography>
                </Stack>
            </Stack>
            <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                gap={2}
                p={2}
            >
                <Button variant={'contained'} startIcon={<DeleteOutlinedIcon />}>
                    Delete
                </Button>

                <Button
                    startIcon={<BorderColorOutlinedIcon />}
                    variant='outlined'
                    onClick={() => toggleAddDrawer(staffData)}
                >
                    Edit
                </Button>
            </Stack>
            <Drawer anchor={'right'} open={isAddDrawerOpen} onClose={toggleAddDrawer}>
                <Box width={'483px'}>
                    <AddStaff selectedStaff={selectedStaff} toggleAddDrawer={toggleAddDrawer} />
                </Box>
            </Drawer>
        </Stack>
    );
};

export default StaffTop;
