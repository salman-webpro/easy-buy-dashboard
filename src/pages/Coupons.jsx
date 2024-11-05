import { useState } from 'react';
import coupons from '../data/Coupons';
import { Stack, Button, Drawer, Box } from '@mui/material';
import CouponsLeftLayout from '../components/Coupons/CouponsLeftLayout';
import CouponsRightLayout from '../components/Coupons/CouponsRightLayout';
import AddCoupons from '../components/Coupons/AddCoupons';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import IconButton from '@mui/material/IconButton';

const Coupons = () => {
    const [selectedCoupon, setSelectedCoupon] = useState(null);
    const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false); // State for the right drawer
    const [couponData, setCouponData] = useState();
    // Function to toggle the right drawer
    const toggleAddDrawer = (data) => {
        setIsAddDrawerOpen(!isAddDrawerOpen);
        setCouponData(data);
        console.log(data);
        // setProductOpen(false);
    };

    return (
        <Stack direction='row'>
            <Stack
                width='350px'
                sx={{
                    overflowY: 'auto', // Enable vertical scrolling
                    maxHeight: '93vh', // Set a maximum height
                }}
            >
                <CouponsLeftLayout
                    coupons={coupons}
                    setSelectedCoupon={setSelectedCoupon}
                    selectedCoupon={selectedCoupon}
                />
            </Stack>
            <Stack
                width='100%'
                sx={{
                    overflowY: 'auto', // Enable vertical scrolling
                    maxHeight: '93vh', // Set a maximum height
                }}
            >
                {/* <RightLayout selectedStaff={selectedStaff} /> */}
                <CouponsRightLayout selectedCoupon={selectedCoupon} />
            </Stack>
            <Stack
                sx={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                }}
            >
                <IconButton
                    onClick={() => toggleAddDrawer(couponData)}
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
                    <AddCoupons toggleAddDrawer={toggleAddDrawer} />
                </Box>
            </Drawer>
        </Stack>
    );
};

export default Coupons;
