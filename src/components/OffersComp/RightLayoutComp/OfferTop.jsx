import React, { useState } from 'react';
import { Avatar, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import AddOffer from '../AddOffer';

const OfferTop = ({ selectedOffer }) => {
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
            <Stack direction={'row'} p={2} spacing={2} alignItems='center'>
                <Avatar src={selectedOffer?.image} sx={{ width: '100px', height: '100px' }} />
                <Stack spacing={1}>
                    <Typography variant='headlineMedium' color={'primary.500'}>
                        {selectedOffer?.OfferName}
                    </Typography>
                    <Typography variant='labelMedium' color={'sc.two'}>
                        Total Value{' '}
                        <span style={{ color: '#f15a2d' }}>${selectedOffer?.totalValue}</span>{' '}
                        <span
                            style={{
                                fontSize: '12px',
                                fontWeight: '300',
                                textDecoration: 'line-through',
                            }}
                        >
                            {selectedOffer?.regularValue}
                        </span>
                    </Typography>
                    <Typography variant='labelMedium' color={'sc.two'}>
                        Min Purchase Amount{' '}
                        <span style={{ color: '#f15a2d' }}>
                            ${selectedOffer?.minPurchaseAmount}
                        </span>
                    </Typography>
                </Stack>
            </Stack>
            <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                gap={2}
                p={2}
            >
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
                    {/*<AddStaff />*/}
                    <AddOffer toggleAddDrawer={toggleAddDrawer} />
                </Box>
            </Drawer>
        </Stack>
    );
};

export default OfferTop;
