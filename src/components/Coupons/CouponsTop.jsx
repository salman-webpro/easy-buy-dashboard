import React, { useState } from 'react';
import { Avatar, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
// import EditCoupon from './EditCoupon';
import Drawer from '@mui/material/Drawer';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import AddCoupons from './AddCoupons';

const CouponsTop = ({ selectedCoupon }) => {
    const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);
    const [couponData, setCouponData] = useState();

    const toggleEditDrawer = (data) => {
        setIsEditDrawerOpen(!isEditDrawerOpen);
        setCouponData(data);
    };

    return (
        <Stack
            width={'100%'}
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
        >
            <Stack direction={'row'} p={2} gap={2} alignItems='center'>
                <Avatar
                    src={selectedCoupon?.image}
                    sx={{ width: '110px', height: '110px', borderRadius: '10px' }}
                />
                <Stack>
                    <Typography variant='titleLarge'>{selectedCoupon?.name}</Typography>
                    <Typography
                        variant='bodySmall'
                        mt={1}
                    >{`Discount: ${selectedCoupon?.discount}%`}</Typography>
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
                    onClick={() => toggleEditDrawer(couponData)}
                >
                    Edit
                </Button>
            </Stack>
            <Drawer anchor={'right'} open={isEditDrawerOpen} onClose={toggleEditDrawer}>
                <Box width={'483px'}>
                    <AddCoupons toggleAddDrawer={toggleEditDrawer} />
                </Box>
            </Drawer>
        </Stack>
    );
};

export default CouponsTop;
